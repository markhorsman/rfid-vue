import axios from 'axios';
import store from './store'
import { eventHub } from './eventhub'
import getStock from './axios-cache/stock';
import getCustomerContact from './axios-cache/customerContact'
import getContItems from './axios-cache/contItem'

const instance = axios.create({
    timeout: 10000
});


const setResponse = conf => () => {
    return Promise.resolve({
        data: conf.data,
        status: 200,
        statusText: "OK",
        headers: conf.headers,
        config: conf,
        request: conf
    });
};

instance.interceptors.request.use(
    conf => {
        if (!conf.headers.skipLoader) {
            eventHub.$emit('before-request');
        } else {
            delete conf.headers.skipLoader;
        }

        if (conf.headers && conf.headers.skipCache || !store.state.offline) {
            if (conf.headers && conf.headers.hasOwnProperty('skipCache')) {
                delete conf.headers.skipCache;
            }

            if (store.state.offline) {
                conf.adapter = setResponse(conf);
                return conf;
            }

            return conf;
        }

        if (conf.method.toLowerCase() !== 'get') {
            conf.adapter = setResponse(conf);
            return conf;
        }

        if (conf.url.indexOf('customercontact') >= 0) {
            const urlParts = conf.url.split('/');
            return getCustomerContact(urlParts[urlParts.length - 1])
                .then(data => {
                    conf.data = data;
                    conf.adapter = setResponse(conf);

                    return conf;
                })
        }

        if (conf.url.indexOf('stock') >= 0) {
            return getStock(conf.url)
                .then(data => {
                    conf.data = data;
                    conf.adapter = setResponse(conf);

                    return conf;
                });
        }

        if (conf.url.indexOf('contracts') >= 0 && conf.url.indexOf('items') >= 0) {
            return getContItems(conf.url)
                .then(data => {
                    conf.data = data;
                    conf.adapter = setResponse(conf);

                    return conf;
                });
        }

        conf.adapter = setResponse(conf);
        return conf;
    },
    error => {
        eventHub.$emit('request-error');
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(function (response) {
    eventHub.$emit('after-response');
    return response;
}, function (error) {
    eventHub.$emit('response-error');
    if (error.response.status === 400 && error.response.data && error.response.data.Message && error.response.data.Message.toLowerCase().indexOf('invalid session id') >= 0) {
        store.commit('logout')
    }
    return Promise.reject(error.response)
})

export default instance;

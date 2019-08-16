import Vue from 'vue'

import './styles/quasar.styl'
import lang from 'quasar/lang/nl.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import {
  Quasar,
  QBar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QBtnGroup,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QSpace,
  QCard,
  QSpinnerHourglass,
  QInput,
  QForm,
  QStep,
  QStepper,
  QStepperNavigation,
  QChip,
  QAvatar,
  QBtnToggle,
  QCheckbox,
  QSelect,
  QTh,
  QTr,
  QTd,
  QTable,
  QAjaxBar,
  QToggle,
  QBadge,
  QTimeline,
  QTimelineEntry,
  QScrollArea,
  QDialog,
  QCardSection,
  QCardActions,
  QSeparator,
  QPopupEdit,
  QField,
  QLinearProgress,
  QKnob,
  QExpansionItem,
  QSpinnerRadio,
  Loading,
  ClosePopup,
  Notify,
  AppFullscreen,

} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QBar,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QBtnGroup,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QSpace,
    QCard,
    QSpinnerHourglass,
    QInput,
    QForm,
    QStep,
    QStepper,
    QStepperNavigation,
    QChip,
    QAvatar,
    QBtnToggle,
    QCheckbox,
    QSelect,
    QTh,
    QTr,
    QTd,
    QTable,
    QAjaxBar,
    QToggle,
    QBadge,
    QTimeline,
    QTimelineEntry,
    QScrollArea,
    QDialog,
    QCardSection,
    QCardActions,
    QSeparator,
    QPopupEdit,
    QField,
    QLinearProgress,
    QKnob,
    QExpansionItem,
    QSpinnerRadio,
  },
  directives: {
    ClosePopup,
  },
  plugins: {
    Loading,
    Notify,
    AppFullscreen,
  },
  extras: [
    'Fontawesome'
  ],
  lang: lang,
})
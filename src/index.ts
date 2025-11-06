import './styles/index.scss';

import defaultEvent from "./utils/defaultEvent";
import TApp from "./components/t-app.vue";
import TCable from "./components/t-cable.vue";
import TButton from "./components/t-button.vue";
import TCard from "./components/t-card.vue";
import TContent from "./components/t-content.vue";
import TRefresher from "./components/t-refresher.vue";
import TScreen from "./components/t-screen.vue";
import TScreenRouter from "./components/t-screen-router.vue";
import TToolbar from "./components/t-toolbar.vue";
import TBackButton from "./components/t-back-button.vue";
import TText from './components/t-text.vue';
import TPresent from './components/t-present.vue';
import TSheet from './components/t-sheet.vue';
import TGestureIndicator from './components/t-gesture-indicator.vue';
import TInput from './components/t-input.vue';
import TTextarea from './components/t-textarea.vue';
import TRichText from './components/t-rich-text.vue';
import TGrid from './components/t-grid.vue';
import TDivider from './components/t-divider.vue';
import TTogglePassword from './components/t-toggle-password.vue';
import TIconSpinner from './components/t-icon-spinner.vue';
import TAlert from './components/t-alert.vue';
import TAvatar from './components/t-avatar.vue';
import TCollapse from './components/t-collapse.vue';
import TToast from './components/t-toast.vue';
import TSwitch from './components/t-switch.vue';
import TTab from './components/t-tab.vue';
import TTabs from './components/t-tabs.vue';
import TCheckbox from './components/t-checkbox.vue';
import TKeyboardSpace from './components/t-keyboard-space.vue';
import TSkeleton from './components/t-skeleton.vue';
import TRipple from './components/t-ripple.vue';
import TLoading from './components/t-loading.vue';

export * from './controllers';
export * from './utils';

export const createToife = () => {
  return {
    install: (app:any) => {
      defaultEvent();
      app.component('t-app', TApp);
      app.component('t-screen', TScreen);
      app.component('t-screen-router', TScreenRouter);
      app.component('t-cable', TCable);
      app.component('t-toolbar', TToolbar);
      app.component('t-content', TContent);
      app.component('t-card', TCard);
      app.component('t-refresher', TRefresher);
      app.component('t-button', TButton);
      app.component('t-back-button', TBackButton);
      app.component('t-present', TPresent);
      app.component('t-text', TText)
      app.component('t-sheet', TSheet);
      app.component('t-gesture-indicator', TGestureIndicator);
      app.component('t-input', TInput);
      app.component('t-textarea', TTextarea);
      app.component('t-rich-text', TRichText);
      app.component('t-grid', TGrid);
      app.component('t-divider', TDivider);
      app.component('t-toggle-password', TTogglePassword);
      app.component('t-icon-spinner', TIconSpinner);
      app.component('t-alert', TAlert);
      app.component('t-avatar', TAvatar);
      app.component('t-collapse', TCollapse);
      app.component('t-toast', TToast);
      app.component('t-switch', TSwitch);
      app.component('t-tab', TTab);
      app.component('t-tabs', TTabs);
      app.component('t-checkbox', TCheckbox);
      app.component('t-keyboard-space', TKeyboardSpace);
      app.component('t-skeleton', TSkeleton);
      app.component('t-ripple', TRipple);
      app.component('t-loading', TLoading);
    }
  }
}
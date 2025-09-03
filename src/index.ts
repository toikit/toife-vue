import './styles/index.scss';

import defaultEvent from "./utils/defaultEvent";
import TApp from "./components/t-app.vue";
import TCable from "./components/t-cable.vue";
import TButton from "./components/t-button.vue";
import TCard from "./components/t-card.vue";
import TContent from "./components/t-content.vue";
import TRefresher from "./components/t-refresher.vue";
import TScreen from "./components/t-screen.vue";
import TSwipeScreen from "./components/t-swipe-screen.vue";
import TToolbar from "./components/t-toolbar.vue";
import TBackButton from "./components/t-back-button.vue";
import TText from './components/t-text.vue';
import TPresent from './components/t-present.vue';
import TSheet from './components/t-sheet.vue';
import TPullSignal from './components/t-pull-signal.vue';
import TInput from './components/t-input.vue';
import TTextarea from './components/t-textarea.vue';
import TRichText from './components/t-rich-text.vue';
import TGrid from './components/t-grid.vue';
import TGridItem from './components/t-grid-item.vue';
import TDivider from './components/t-divider.vue';
import TTogglePassword from './components/t-toggle-password.vue';
import TLoadingIcon from './components/t-loading-icon.vue';
import TAlert from './components/t-alert.vue';
import TAvatar from './components/t-avatar.vue';
import TCollapse from './components/t-collapse.vue';
import TToast from './components/t-toast.vue';
import TSwitch from './components/t-switch.vue';
import TTab from './components/t-tab.vue';
import TTabs from './components/t-tabs.vue';
import TLoadingApp from './components/t-loading-app.vue';
import TCheckbox from './components/t-checkbox.vue';
import TKeyboard from './components/t-keyboard.vue';
import TSkeleton from './components/t-skeleton.vue';

export * from './controllers';
export * from './utils';

export const createToife = () => {
  return {
    install: (app:any) => {
      defaultEvent();
      app.component('t-app', TApp);
      app.component('t-screen', TScreen);
      app.component('t-swipe-screen', TSwipeScreen);
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
      app.component('t-pull-signal', TPullSignal);
      app.component('t-input', TInput);
      app.component('t-textarea', TTextarea);
      app.component('t-rich-text', TRichText);
      app.component('t-grid', TGrid);
      app.component('t-grid-item', TGridItem);
      app.component('t-divider', TDivider);
      app.component('t-toggle-password', TTogglePassword);
      app.component('t-loading-icon', TLoadingIcon);
      app.component('t-alert', TAlert);
      app.component('t-avatar', TAvatar);
      app.component('t-collapse', TCollapse);
      app.component('t-toast', TToast);
      app.component('t-switch', TSwitch);
      app.component('t-tab', TTab);
      app.component('t-tabs', TTabs);
      app.component('t-loading-app', TLoadingApp);
      app.component('t-checkbox', TCheckbox);
      app.component('t-keyboard', TKeyboard);
      app.component('t-skeleton', TSkeleton);
    }
  }
}
import {
  Action, App, Cable, Button, Card, Content, Refresher, Screen, ScreenRouter,
  Toolbar, BackButton, Text, Present, Sheet, GestureIndicator, Input, Textarea,
  Richtext, Grid, Divider, TogglePassword, IconSpinner, Alert, Avatar, Collapse,
  Toast, Switch, Tab, Tabs, Checkbox, KeyboardSpace, Skeleton, Ripple, Loading,
  Flex, Image
 } from './components';
import { type CreateToifeOptions } from './type';

export const createToife = (options?: CreateToifeOptions) => {
  return {
    install: (app:any) => {
      const prefix = options?.prefix || 't-';
      app.component(prefix + 'app', App);
      app.component(prefix + 'action', Action);
      app.component(prefix + 'screen', Screen);
      app.component(prefix + 'screen-router', ScreenRouter);
      app.component(prefix + 'cable', Cable);
      app.component(prefix + 'toolbar', Toolbar);
      app.component(prefix + 'content', Content);
      app.component(prefix + 'card', Card);
      app.component(prefix + 'refresher', Refresher);
      app.component(prefix + 'button', Button);
      app.component(prefix + 'back-button', BackButton);
      app.component(prefix + 'present', Present);
      app.component(prefix + 'text', Text)
      app.component(prefix + 'sheet', Sheet);
      app.component(prefix + 'gesture-indicator', GestureIndicator);
      app.component(prefix + 'input', Input);
      app.component(prefix + 'textarea', Textarea);
      app.component(prefix + 'richtext', Richtext);
      app.component(prefix + 'grid', Grid);
      app.component(prefix + 'divider', Divider);
      app.component(prefix + 'toggle-password', TogglePassword);
      app.component(prefix + 'icon-spinner', IconSpinner);
      app.component(prefix + 'alert', Alert);
      app.component(prefix + 'avatar', Avatar);
      app.component(prefix + 'collapse', Collapse);
      app.component(prefix + 'toast', Toast);
      app.component(prefix + 'switch', Switch);
      app.component(prefix + 'tab', Tab);
      app.component(prefix + 'tabs', Tabs);
      app.component(prefix + 'checkbox', Checkbox);
      app.component(prefix + 'keyboard-space', KeyboardSpace);
      app.component(prefix + 'skeleton', Skeleton);
      app.component(prefix + 'ripple', Ripple);
      app.component(prefix + 'loading', Loading);
      app.component(prefix + 'flex', Flex);
      app.component(prefix + 'image', Image);
    }
  }
}
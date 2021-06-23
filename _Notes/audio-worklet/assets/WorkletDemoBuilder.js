

import {
  html,
  render,
  Component,
  WorkletIndicator,
  TopBar,
  Footer,
  OneColumnView,
  DemoRunner,
} from "../../assets/Components.js";

export default (PageData, demoCode) => {
  render(
    html` <div id="TopBar"></div>
      <div id="WorkletIndicator"></div>
      <div id="Description"></div>
      <div id="Runner"></div>
      <div id="Footer"></div>`,
    document.getElementsByClassName("container was-page-wrap")[0]
  );

  Component.build("TopBar", TopBar, PageData.TopBar);
  Component.build("WorkletIndicator", WorkletIndicator);
  Component.build("Description", OneColumnView, PageData.Description);
  Component.build("Runner", DemoRunner, demoCode);
  Component.build("Footer", Footer);
  Component.present();
};

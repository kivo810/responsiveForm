"use strict";
const ResponsiveformMainAbl = require("../../abl/responsiveform-main-abl.js");

class ResponsiveformMainController {
  init(ucEnv) {
    return ResponsiveformMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new ResponsiveformMainController();

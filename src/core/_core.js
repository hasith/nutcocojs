﻿var Core = Core || {};

define(function(require) {
    Core.Router = require("./core/router");
    Core.Context = require("./core/context");
    Core.Mediator = require("./core/mediator");
    Core.Panel = require("./core/panel");
    Core.Controller = require("./core/controller");
    Core.Loader = require("./core/loader");
    return Core;
});

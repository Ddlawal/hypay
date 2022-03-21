"use strict";
exports.__esModule = true;
exports.useMediaQuery = void 0;
var react_responsive_1 = require("react-responsive");
var breakpoints = {
    xs: 0,
    sm: 640,
    md: 760,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
};
exports.useMediaQuery = function (size) {
    var minWidth = breakpoints[size];
    return react_responsive_1.useMediaQuery({ minWidth: minWidth });
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
function debounce(func, ms) {
    if (ms === void 0) { ms = 1000; }
    var timeout = 0;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            func.apply(_this, args);
        }, ms);
    };
}
exports.debounce = debounce;

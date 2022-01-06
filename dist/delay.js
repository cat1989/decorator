"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
/**
 * delaying a function
 * @param f decorated function
 * @param ms delayed by milliseconds
 */
function delay(f, ms) {
    if (ms === void 0) { ms = 1000; }
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setTimeout(function () {
            f.apply(_this, args);
        }, ms);
    };
}
exports.delay = delay;

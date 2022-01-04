"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = exports.debounce = exports.delay = void 0;
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
function throttle(func, ms) {
    if (ms === void 0) { ms = 1000; }
    var isThrottled = false;
    var savedThis = null;
    var savedArgs = null;
    var wrapper = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isThrottled) {
            savedThis = this;
            savedArgs = args;
            return;
        }
        isThrottled = true;
        func.apply(this, args);
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedThis = null;
                savedArgs = null;
            }
        }, ms);
    };
    return wrapper;
}
exports.throttle = throttle;

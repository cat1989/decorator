"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
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

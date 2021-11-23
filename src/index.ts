type DecoratedFunction = (...args: any[]) => void;

/**
 * delaying a function
 * @param f decorated function
 * @param ms delayed by milliseconds
 */
export function delay(f: DecoratedFunction, ms = 1000): DecoratedFunction {
    return function(this: ThisParameterType<DecoratedFunction>, ...args: any[]) {
        setTimeout(() => {
            f.apply(this, args)
        }, ms)
    }
}

export function debounce(func: DecoratedFunction, ms = 1000): DecoratedFunction {
    let timeout = 0
    return function(this: ThisParameterType<DecoratedFunction>, ...args: any[]) {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = window.setTimeout(() => {
            func.apply(this, args)
        }, ms)
    }
}

export function throttle(func: DecoratedFunction, ms = 1000): DecoratedFunction {
    let isThrottled = false
    let savedThis: ThisParameterType<DecoratedFunction> | null = null
    let savedArgs: any[] | null = null
    const wrapper = function(this: ThisParameterType<DecoratedFunction>, ...args: any[]) {
        if (isThrottled) {
            savedThis = this
            savedArgs = args
            return
        }
        isThrottled = true
        func.apply(this, args)
        setTimeout(() => {
            isThrottled = false
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs)
                savedThis = null
                savedArgs = null
            }
        }, ms)
    }
    return wrapper
}

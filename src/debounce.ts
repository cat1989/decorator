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

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

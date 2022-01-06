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

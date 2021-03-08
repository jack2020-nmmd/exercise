function bind(obj, callback, ...args) {
    if (obj === undefined || obj === null) {
        obj = window
    }
    obj.newMethod = callback
    return function (...arg) {
       let result =  obj.newMethod(arg, ...args)
       delete obj.newMethod
       return result
    }
}
window.bind = bind
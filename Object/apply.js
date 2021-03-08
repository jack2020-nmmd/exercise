function apply(obj, callback, args) {
    if (obj === undefined || obj === null) {
        obj = window
    }
    obj.newAttr = callback
    let result = obj.newAttr(args)
    delete obj.newAttr
    return result
}
window.apply = apply
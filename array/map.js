function map(array, callback) {
    let arr = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
       let result = callback(element, index)
       arr.push(result)
    }
    return arr
}

function reduce(array, callback, initValue) {
    let total = initValue
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        total = callback(total, element, index)
    }
    return total
}

function filter(array, callback) {
    let arr = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let result = callback(element, index)
        if (result) {
            arr.push(element)
        }
    }
}

function find(array, callback) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let result = callback(element, index)
        if (result) {
            return element
        }
    }
    return undefined
}

function findIndex(array, callback) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let result = callback(element, index)
        if (result) {
            return index
        }
    }
    return -1
    
}


function apply(obj, fn, args) {
    if (obj === undefined || obj === null) {
        obj = window
    }
    obj.newAttr = fn
    let result = obj.newAttr(args)
    delete obj.newAttr
    return result
}



function throttle(callback, delay) {
    let pre = 0
    return function (event ) {
        let current = Date.now()
    if (current - pre >= delay) {
        callback.call(this, event)
        pre = current
    }
    }
    
}

function debounce(callback, delay) {
    return function (event) {
        if (timeId) {
            clearTimeout(timeId)
        }
        let timeId = setTimeout(() => {
            callback.call(this, event)
        }, delay);
    }
    
}
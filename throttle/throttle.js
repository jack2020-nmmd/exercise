function throttle(callback,delay) {
    let pre = 0
    return function(event) {
        let now = Date.now()
        if (now - pre > delay) {
            callback.call(this, event)
            pre = now
        }
    }
}
fafhaf
fafaf
fagga
fagag
agag
// function debounce(callback, delay) {
//     let pre = 0
//     return function (event) {
//            this.timeId = setTimeout(() => {
//                 let current = Date.now()
//                 if (current - pre >= delay) {
//                     callback.call(this,event)
//                     pre = current
//                 }
//                 clearTimeout(this.timeId)
                
//         },delay)
//     }
// }错误的例子

function debounce(callback, delay) {
    return function (event) {
        if (callback.hasOwnProperty(timeID)) {
            clearTimeout(callback.timeID)
        }
        callback.timeID = setTimeout(() => {
            callback.call(this, event)
            delete callback.timeID
        }, delay);
        }
    }
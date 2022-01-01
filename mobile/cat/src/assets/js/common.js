export function sleep(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
                resolve({code:1,datas:{name:'fangjialiang'}})
            
        }, 1000)
    })
}
/*  1
    @function addObjects
    @param a {Object}
    @param b {Object}
    @returns {Object}
    @description:
        - take two object literals and add them, return NEW object
        - if both objects have same key, use key of 
            second object
    @example addObjects({'a': 1}, {'b': 2})
             // returns {'a': 1, 'b': 2}
*/
const addObjects = (obj1, obj2) => {
    
return Object.assign({},obj1,obj2)

}

console.log(addObjects({z:1,b:2,c:3},{h:22}))
/*  2
    @function appendEachObject
    @param a {Object}
    @param b {Number}
    @returns {Object}
    @description:
        - given an object and a number, append number
            to each item in object if that item is a number
        - assume objects are flat (ie, no child objects)
    @example appendEachObject({'a': 1, 'b': true}, 5)
             // returns {'a': 6, 'b': true}
*/
const appendEachObject = (obj,num) => {
    for(let key in obj){
        if ((typeof obj[key]) === 'number'){
            obj[key] += num
        }
    }
    return obj
    }
    
console.log(appendEachObject({'a': 1, 'b': true},5))
/*  3
    @function mapObject
    @param a {Object}
    @param b {Function}
    @returns {Object}
    @description:
        - given an object and a callback, update each item
            in object with output from the callback
        - assume objects are flat (ie, no child objects)
    @example mapObject({'a': 1,}, (key, value) => {
        console.log(key) // a
        console.log(value) // 1
        
        return value+2;
    })
             // returns {'a': 3,}
*/
const mapObject = (obj,cb) => {

    for(let key in obj){
     obj[key] = cb(key, obj[key])
    }
   
    return obj;
}

console.log(mapObject({'a': 1,}, (key, value) => {
    return value+2;
}))
/*  4
    @function subtractObject
    @param a {Object}
    @param b {Object}
    @returns {Object}
    @description:
        - given two objects, remove all keys in second object
            FROM first object
        - assume objects are flat (ie, no child objects)
    @example subtractObject({'a': 1, 'b': true}, {'b': 3})
             // returns {'a': 6,}
             subtractObject({a: 1,}, {a: 3})
            // returns {}
*/

const subtractObject = (a,b) => {
    let obj = {}
    for (let key in a){
        for(let secondKey in b ){
            if(key !== secondKey){
               obj[key] = a[key]
            }
        }
    }
return obj
}


console.log(subtractObject({a: 1,}, {a: 3})
)
/*  5
    @function addNObjects
    @param a {Object}
    @param b {Object}
    ...
    @param n {Object}
    @returns {Object}
    @description:
        - given N objects, add them all
    @example addNObjects({a: 1}, {b: 2}, {c: 3})
             // returns {a: 1, b: 2, c: 3}
            addNObjects({a: 1})
             // returns {a: 1,}
            addNObjects({a: 1}, {b: 2}, {c: 3}, {d: 4)
             // returns {a: 1, b: 2, c: 3, d: 4}
*/

const addNObjects = (...args) => {
return Object.assign(...args)
}

console.log(addNObjects({a: 1}, {b: 2}, {c: 3}))
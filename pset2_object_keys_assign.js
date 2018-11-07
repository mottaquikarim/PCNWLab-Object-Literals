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

    const addObjects = (a,b) => Object.assign({}, a, b);

    console.log(addObjects({'a': 1}, {'b': 2}));

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

    const appendEachObject = (a,b) => {
        keys = Object.keys(a);
        keys.forEach(e => {
            if (typeof a[e] === 'number') {
                a[e] = a[e]+b;
            }
        });
        return a;
    }

    console.log(appendEachObject({'a': 1, 'b': true}, 5))

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

    const mapObject = (a, b) => {
        newObj = {...a};
        keys = Object.keys(newObj);
        keys.forEach(key => {
            // console.log("this is a[key]'s value: ", a[key])
            let newKey = b(key, newObj[key])
            // console.log("newKey is: ", newKey)
            newObj[key] = newKey;
        });
        return newObj;
    }

    console.log('=====START=====')
    console.log(mapObject({'a': 1, 'b': 2}, (key, value) => {
        console.log(key);
        console.log(value);

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
        let newA = {...a};
        let newB = {...b};
        let keysA = Object.keys(newA);
        let keysB = Object.keys(newB);
        keysB.forEach(key => {
            console.log('key is: ', key)
            if (keysA.includes(key)) {
                delete newA[key];
            }
        })
        return newA;
    }

    console.log("=====START=====")
    console.log(subtractObject({'a': 1, 'b': 2}, {'b': 3}));

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

    const addNObjects = () => {
        let newObj = {};
        return "0";
    }

    console.log(addNObjects({a: 1}, {b: 2}, {c: 3}))

    
    // let weight = "145";
    // let wow = "wowowowow";
    // let height = "5'7";
    // let new1 = {
    //           'name': "Mr. Deltoid",
    //           age: 39,
    //           weight,
    //           [height]: height,
    //           wow
    //         };
    // console.log(new1);
    // console.log("wow" in new1);

    // function makeUser(name, age, weight, height, wow) {
    //     return {
    //       'name': name,
    //       age: age,
    //       weight,
    //       [height]: height,
    //       wow
    //     };
    //   }
      
    //   let user = makeUser("John", 30, "180lbs", "5'4", "WOOWOWOOW");
    //   console.log(user);
    //   console.log(user.name);
    //   console.log(user.age);
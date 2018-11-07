/*
  const obj = {
      'name': 1,
      'age': 2,
      'title': 3,
  }
  const obj_cpy = {}
  const foobar = Object.keys(obj); // ['name', 'age', 'title']
  for (let i = 0; i < foobar.length; i++) {
      obj_cpy[foobar[i]] = obj[foobar[i]]
  }
  obj_cpy[foobar[0]] = obj[foobar[0]]
  obj_cpy[foobar[1]] = obj[foobar[1]]
  obj_cpy[foobar[2]] = obj[foobar[2]]
*/

/*
  const obj = {
      'name': 1,
      'age': 2,
      'title': 3,
  }
  const copiedObj = copyObj(obj);
  // test 1
  console.log('obj is: ', obj)
  console.log('copiedObj is: ', copiedObj);
  // test 2
  copiedObj.test = 'test';
  copiedObj.name.c.d = 2;
  console.log('obj is: ', obj)
  console.log('copiedObj is: ', copiedObj);
*/


const copyObj = (obj) => {
    const obj_cpy = {}
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        obj_cpy[keys[i]] = obj[keys[i]];
    }

    return obj_cpy;
}

// =============================================

/*
    @func cpyProps
    @param {object} obj
    @returns {object}
    @desc - for each key in object, create a NEW key with "_cpy" appended to it (same value)
    @example -
        const obj = {
          'a': 1,
          'b': 2,
          'c': 3,
        }
        cpyProps(obj);
        {
          'a': 1,
          'a_cpy': 1,
          'b': 2,
          'b_cpy': 2,
          'c': 3,
          'c_cpy': 3,
        }
*/

const obj_1a = {
    'a': 1,
    'b': 2,
    'c': 3,
}

const cpyProps = (obj) => {
    let copiedObj = {};
    let keys = Object.keys(obj);
    console.log(keys);
    keys.forEach(key => {
        copiedObj[key] = obj[key];
        copiedObj[key+'_cpy'] = obj[key];
    });
    // for (i = 0; i < keys.length; i++) {
    //     copiedObj[keys[i]] = obj[keys[i]];
    //     copiedObj[`${keys[i]}_cpy`] = obj[keys[i]];
    // }
    return copiedObj;
}

obj_1b = cpyProps(obj_1a);

console.log("=======OBJS FAM=======")
console.log(obj_1a);
console.log(obj_1b);

/*
    @func addObjs
    @param {object} obj1
    @param {object} obj2
    @returns {object}
    @desc - add two objects
    @example -
        const obj1 = {
          'a': 1,
          'b': 2,
          'c': 3,
        }
        const obj2 = {
          'd': 1,
          'e': 1,
          'f': 1,
          'a': 0,
        }
        addObjs(obj1, obj2);
        {
          'a': 0,
          'b': 2,
          'c': 3,
          'd': 1,
          'e': 1,
          'f': 1,
        }
*/

const obj1 = {
    'a': 1,
    'b': 2,
    'c': 3,
}

const obj2 = {
    'd': 1,
    'e': 1,
    'f': 1,
    'g': 0,
}

const addObjs = (obj1, obj2) => {
    let objNew = {};
    // take each property from obj1 and add to a new obj
    // take each property from obj2 and add to a new obj
    let keys1 = Object.keys(obj1);
    keys1.forEach(key => objNew[key] = obj1[key]);
    let keys2 = Object.keys(obj2);
    keys2.forEach(key => objNew[key] = obj2[key]);
    return objNew;
}

const addedObj = addObjs(obj1, obj2);
console.log(addedObj);

/*
    @func addNObjs
    @param {array} arrOfObjs
    @returns {object}
    @desc - add N objects
    @example -
        const obj1 = {
          'a': 1,
          'b': 2,
          'c': 3,
        }
        const obj2 = {
          'd': 1,
          'e': 1,
          'f': 1,
          'a': 0,
        }
        const obj3 = {
          'd': 0,
          'g': 1,
          'a': -1,
        }
        addNObjs([obj1, obj2, obj3]);
        {
          'a': -1,
          'b': 2,
          'c': 3,
          'd': 0,
          'e': 1,
          'f': 1,
          'g': 1,
        }
*/

const obj1_lol = {
    'a': 1,
    'b': 2,
    'c': 3,
  }
  const obj2_lol = {
    'd': 1,
    'e': 1,
    'f': 1,
    'a': 0,
  }
  const obj3_lol = {
    'd': 0,
    'g': 1,
    'a': -1,
  }

const objArray = [obj1_lol, obj2_lol, obj3_lol];

const addNObjs = (arr) => {
    // arr.forEach((element, index, arr) => {
    //     let arr = Object.keys(obj1);}
    // )
    let newObj = arr.reduce((acc, currentObj) => {
        for (let i = 0; i < newKeys.length; i++) {
            let newKeys = Object.keys(currentObj);
            acc[newKeys[i]] = currentObj[newKeys[i]];
        }
        return acc;
    }, {})

    return newObj;
}

console.log("============")
console.log(addNObjs(objArray))
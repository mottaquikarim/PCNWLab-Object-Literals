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

const cpyProps = (obj) => {
    
    const copyObj = {};
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        copyObj[keys[i]] = obj[ keys[i] ];
        copyObj[keys[i] + '_cpy'] = obj[ keys[i] ];
    }
    return copyObj;
}

const obj = {
    'a': 1,
    'b': 2,
    'c': 3,
  }
  console.log(cpyProps(obj));



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

/*
    @func getSuperHero
    @param {string} name
    @param {string} alterEgoName
    @param {boolean} isVillain
    @param {number} age
    @returns {object}
    @desc - takes in the params and returns an object
            that describes superhero
    @example - 
        getSuperHero('Batman', 'Bruce Wayne', false, 31);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
*/

const getSuperHero = (name = 'Spider-Man', alterEgoName = 'Peter Parker', isVillain = false, age = 24) => {
    const superHeroObj = {
        name,
        alterEgoName,
        isVillain,
        age,
    }
    return superHeroObj;
}

console.log(getSuperHero());
const spiderMan = getSuperHero();
console.log(spiderMan);
console.log(spiderMan['alterEgoName']);

/*
    @func updateSuperHero
    @param {object} superHero
    @param {string} keyName
    @param {anything} keyValue
    returns {object}
    @desc - takes an existing superhero object
            and adds a new property to it
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }keyName
        updateSuperHero(batman, 'likesBats', true);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            likesBats: true
        }
*/

const batman = {
    name: 'Batman',
    alterEgoName: 'Bruce Wayne',
    isVillain: false,
    age: 31
}

const updateSuperHero = (superHero, keyName, keyValue) => {
    superHero[keyName] = keyValue;
}

updateSuperHero(batman, 'likesBats', true);

console.log(batman);

/*
    @func updateSuperHeroAction
    @param {object} superHero
    @param {string} actionName
    @param {function} actionFunc 
    @returns {object}
    @desc - takes an existing superhero object
            and adds a new FUNCTION property to it 
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'saySomething', function saySomething() {
            return "I'm Batman";
        });
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            saySomething: function saySomething() {
                return "I'm Batman";
            }
        }   
*/

const updateSuperHeroAction = (superHero, actionName, actionFunc) => {
    superHero[actionName] = actionFunc;
}

updateSuperHeroAction(batman, 'saySomething', function saySomething() {
    return "I'm Batman";
})

console.log(batman);
console.log(batman.saySomething);
console.log(batman.saySomething());

/*
    @func updateSuperHeroInBulk
    @param {object} superHero
    @param {array} properties
    @returns {object}
    @desc - takes an ARRAY of properties and values
            and applies them to the superhero object
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, [
            'saySomething', 
            function saySomething() {
                return "I'm Batman";
            },
            'likesBats',
            true,
            'isRich',
            true
        ]);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            saySomething: function saySomething() {
                return "I'm Batman";
            },
            likesBats: true,
            isRich: true
        }     
*/

batArray = ['saySomething', function saySomething() {
    return "I'm not wearing hockey pads"},
    'likesBats', true, 'isRich', true, 'lol'];

const updateSuperHeroInBulk = (superHero, properties) => {
    properties.forEach((element, index, arr) => {
        if (index % 2 === 0 && !(index === arr.length -1)) {
            superHero[element] = arr[index +1];
        }
    });
}

updateSuperHeroInBulk(batman, batArray);

console.log(batman);
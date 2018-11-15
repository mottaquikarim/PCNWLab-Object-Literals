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
const getSuperHero = (name="The Green Arrow", alterEgoName ="Oliver Queen", age = 31, isVillan = false) => {
    const alias = alterEgoName;

    const heroObj = {
        name,
        alias,
        age,
        "Is A Villan ?": isVillan,
    }
    return heroObj;
}
const batman = getSuperHero('Batman','Bruce Wayne', '31', false );
console.log(batman);


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
        }
        updateSuperHero(batman, 'likesBats', true);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            likesBats: true
        }
*/
const updateSuperHero = (superHero, keyName, keyValue) => {
    superHero[keyName] = keyValue; // brackets is understood as the variable name  as long as the variable is not enclosed in quotations
    return superHero; // because you are passing in by reference, you are modifying the original so you do not need a spefic return for the r
}

console.log(updateSuperHero(batman,'likebats', true));
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

    superHero[actionName] = actionFunc
    return superHero;
}
console.log( updateSuperHero(batman, 'saySomething', function saySomething() {
    return "I'm Batman";})
);
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

const updateSuperHeroInBulk = (superHero, propert) => {
   for (let i = 0; i < propert.length; i+2) {
       superHero[propert[i]] =
   }
return superHero;

}
console.log(updateSuperHeroInBulk(batman, [
    'saySomething', 
    function saySomething() {
        return "I'm Batman";
    },
    'likesBats',
    true,
    'isRich',
    true
]));

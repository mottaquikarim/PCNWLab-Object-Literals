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
let getSuperHero = (name, alterEgoName, isVillain, age) => {
    return{name, alterEgoName, isVillain, age};
}

console.log(getSuperHero("Batman", "Bruce Wayne", false, 31));

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
            age: 31,
            likesBats: undefined
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
let updateSuperHero = (superHero, keyName, keyValue) =>{
    superHero[keyName] = keyValue
     return superHero
}
const batman = {
    name: 'Batman',
    alterEgoName: 'Bruce Wayne',
    isVillain: false,
    age: 31
}
console.log(updateSuperHero(batman, "likesBats", true));
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

const updateSuperHeroInBulk = (superHero, properties) => {

    for(let x = 0; x < properties.length; x+=2){

            superHero[properties[x]] = properties[x + 1]
    }

    return superHero

}
console.log(updateSuperHeroInBulk(batman,[
    'saySomething', function saySomething () {
        return "I'm Batman";
    }, 
    'likesBats', 
    true, 
    'isRich', 
    true]
));


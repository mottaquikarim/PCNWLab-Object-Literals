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
const getSuperHero = (name = 'Batman', alterEgoName = 'Bruce Wayne', isVillain = false, age = 31) => {
    const superHeroObj = {
        name,
        alterEgoName,
        isVillain,
        age,
    }
    return superHeroObj;
}
 console.log(getSuperHero());
const Batman = getSuperHero();
console.log(Batman);
console.log(Batman['alterEgoName']);
console.log("-----------------1------------------")
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

  updateSuperHero = (superHero, keyName, keyValue) => {
            superHero[keyName] = keyValue;
            return superHero;
 }
    //  console.log(updateSuperHero());
     console.log(updateSuperHero(Batman,'likesBats', false));
     console.log("----------------2-------------------")
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
 const updateSuperHeroBulk = (superHero,keyName, keyValue) => {
    superHero[keyName] = keyValue;
    return superHero; 
}
console.log(updateSuperHeroBulk(Batman,'likesBats', true));

  updateSuperHeroBulk (Batman, 'saySomething', function saySomething(){
          return "Im a Batman"; 
  });
 // console.log(Batman.saySomething);
    console.log(Batman);
    console.log(Batman.saySomething());

// const updateSuperHeroInBulk = (superHero, properties, keyValue) => {
//      superHero[properties] = keyValue;
//     return superHero;

// }

// console.log(updateSuperHeroInBulk(Batman,'likesBats', true));
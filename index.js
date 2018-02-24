'use strict';

const sama = {
    name: 'Sama',
    age: 32,
    happy: false,
    hairColor: 'black'
}

const becky = {
    name: 'Becky',
    age: 28,
    happy: true,
    hairColor: 'red'
}

const brandon = {
    name: 'Brandon',
    age: 35,
    happy: true,
    hairColor: 'brown'
}

const studentArray = [brandon, sama, becky];
// console.log(studentArray);

for (let i = 0; i < studentArray.length; i++) {
    console.log(`Hello, ${studentArray[i].name}. I heard you are ${studentArray[i].age}. That sure is old! Why are you so ${studentArray[i].happy ? 'happy' : 'unhappy you old jerk'}?`);
}

// studentArray [i].happy ? 'happy' : 'unhappy'

//            is the same as 

// if(josh.happy) {
//     return 'happy';
// } else {
//     return 'unhappy';
// }

// const name = 'Brandon';
// let happy = true;
// let age = 35;
// const hairColor = 'Sandy-blonde';

// const brandonArray = [name, happy, age, hairColor, ['kids', 'dogs', 4]];

// for (let index = 0; index < brandonArray.length; index++) {
//     console.log(brandonArray[index]);
// }

// if(brandonArray[1] === true) {
//     console.log(Array.isArray(brandonArray), brandonArray[4][0]);
// }


// console.log(typeof sentence, sentence);
// console.log(typeof happy, happy);
// happy = false;
// console.log(typeof happy, happy);
// console.log(typeof age, age);



// Mutation: A value is said to be mutable if it can be changed. A mutation is the act of changing the properties of a value. While
// Array methods under mutation
//  array.splice(), array.fill(), array.pop(), array.unshift(), array.shift()

// Non-mutation: This method does not change the object after the method has been used.

// Array methods under non-mutation
//  array.lastIndexOf, array.slice(), array.concat(), array.includes(), array.join()


let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
languages.splice (5, 0, 'Kotlin')
console.log(languages)


// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
// languages.splice (3, 0, 'Java')
// console.log(languages)


// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
// const removedElementFirst = languages.shift();
// console.log(languages)

// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
// languages.splice (0, 0, 'Scala', 'Swift')
// console.log(languages)



// const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

// const removeItem = (arr, item) =>{
//     let newArray = [...arr]
//     const index = newArray.findIndex((element) => element === item)
//     if (index !== -1) {
//         newArray.splice(index, 1)
//         return newArray
//     }

// }
// // console.log(languages)
// console.log(removeItem(languages, 'PHP'))

// let languages = ['C#', 'JavaScript', 'Ruby', 'Python']
// languages.splice (3, 0, 'Go', 'Rust')
// console.log(languages)

// 3. ['apple', 'mango', 'orange']

// let fruit = ['apple', 'mango', 'banana'];
// function changeFruit (fruit){
//     fruit [2] = "orange";
//     return fruit
// }

// 4. 
// const newArray = [5, 6, 7, 4, 8];
// arrayFunction (newArray) {
//     let maximum = - Infinity
//     for (let i = 0; i < newArray.length; i++) {
//         if (newArray [i] > maximum) {
//             max - newArray;
//         }
//         return maximum;
       
//     }
//     let max = arrayFunction (newArray);
    
// }
// console.log(max)



 
// 5. 
// const newArray =  [5, 6, 7, 4, 3, 9]
// let emptyArray = [];
// function valTimesIndex (newArray){
//    for (let i = 0; i < newArray.length; i++){
//     let newVal = i * newArray [i];
//     emptyArray.push(newVal);
//    }
//     return emptyArray;
// }
// console.log(valTimesIndex(newArray ));

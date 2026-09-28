// ARRAY array is a collection of items
// BASICS OF ARRAY
// let marks = [97, 88, 65, 32, 10];
// console.log(marks);
// console.log(marks.length)  // property  property hoti hai jo kuch value de deti hai aur methods kuch kaam karta hai


// let heros = ["hanuman", "ironman", "captain america"];
// console.log(heros);
// console.log(heros.length);



// // ARRAY INDICES    0 indexing
// console.log(marks[0]);
// console.log(heros[1]);
// heros[2] = "thor";
// console.log(heros);



// LOOPING OVER AN ARRAY       // for loop and for-of loop    and and and for-each loop
// let names = ["ankit", "aman", "anchit", "arun"];
// // for(let i=0; i<names.length; i++){
// //     console.log(names[i]);
// //     console.log(i);
// // }
// for(let val of names){
//     console.log(val.toUpperCase());
// }



// PRACTICE SET 
// Qno. 1
// let marks = [85, 97, 44, 37, 76, 60];
// let totalMarks = 0;
// for(let val of marks){
//     totalMarks += val;
// }
// console.log(`the average marks obtained is ${totalMarks/marks.length}`);

// Qno. 2
// let prices = [250, 645, 300, 900, 50];
// let i=0;
// for(let val of prices){
//     console.log(`Price before offer ${val}`);
//     let offer = val/10;
//     prices[i] = prices[i] - offer;
//     console.log(`Price after offer ${prices[i]}`)
//     i++;
// }

// for(let i=0; i<prices.length; i++){
//     prices[i] = prices[i] - prices[i]/10;
// }
// console.log(prices);



// ARRAY METHODS
// two types of methods in array one which change the array and one which doesn't change but create new array like array

// push()  added to the end of the array aur existing array ke andar hi change kar deta hai
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// foodItems.push("mangoes");
// console.log(foodItems);
// foodItems.push("chips", "choclate");
// console.log(foodItems);


// pop()  delete from end & return aur change in existing array
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// let deletedItme = foodItems.pop();
// console.log(`the deleted item is ${deletedItme}`);
// console.log(foodItems);


// toString()   original array ke andar change nahi karta hai ye ek nya string return karta hai 
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());


// concat()   to join multiple arrays & return result  ye bhi original array ke andar change nahi karta ek nya array return karta hai...
// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];
// let array3 = [11,12,13,14,15];
// let finalArray = array1.concat(array2,array3);
// console.log(finalArray);


// unshift()  like push() method  but it added element to the start of the array and change in original array
// let array = ["aman", "ankit", "anchit"];
// array.unshift("arun");
// console.log(array);


// shift() like pop() method but delete from start and return and change in original array
// let array = ["arun", "aman", "ankit", "anchit"];
// console.log(array);
// let deletedItem = array.shift();
// console.log(deletedItem);
// console.log(array); 


// slice() and splice()
// slice()  return a piece of the array  syntax: slice(startIdx, endIdx), endIdx is non-inclusive  aur original array ke andar change nahi karta 
// let marks = [88, 24, 75, 25, 17, 84, 96, 67, 56, 57, 45, 75];
// let slicedmarks = marks.slice(3, 6);
// console.log(slicedmarks);


// splice() change in original array (add, remove, replace)  syntax: splice(startIdx, delCount, newEl1, newEl2, newEl3.....)
// let heros = ["ironman", "antman", "thor", "hulk", "hawkeye"];
// console.log(heros);
// heros.splice(1,2,"vision","black panther","spiderman");
// console.log(heros);

// let array = [1,2,3,4,5,6,7,8,9];

// console.log(array);
// // add element
// array.splice(2,0,100);
// console.log(array);

// // delete element
// array.splice(2,1);
// console.log(array);

// // replace element
// array.splice(3,1,404);
// console.log(array);

// array.splice(3);
// console.log(array);
// if we do not write delCount it will delete all the elements starting from that given index

// PRACTICE SET : 02
// Qno. 1
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// console.log(companies);
// companies.shift();
// console.log(companies);

// companies.splice(1,1,"Ola");
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);


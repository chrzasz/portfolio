// console.log(123 + "test");
// console.log(" java jest slaba ".replace("slaba", "mocna").repeat(3));
// console.log(" JAVA   jest      mocno    typowany     ".trim().split(/\s+/));
// console.log(
//    " JAVA   jest      mocno    typowany     "
//       .trim()
//       .split(" ")
//       .filter(Boolean)
// );

// console.log((234).toString(2));

// console.log((23.2345432).toPrecision(5));
// console.log((23.2345432).toFixed(3));

// console.log(parseFloat("54.34test"));
// console.log(isFinite(2e134));

// console.log(!!0);

// console.log(5 > 1);

// console.log(0 || false || "abc" || 23);

// console.log("abc" && 23 && "last");

// var str = "234";
// var bin = (+str).toString(2);
// console.log(bin);

// const b = "";

// let count = 0;
// console.log(count);
// let result;
// result = 1;
// console.log(result);

// const expenses = 250;
// const myName = "Grzegorz";
// const amount = 1000;

// console.log(amount - expenses);

// const story = "This is sample story";
// const newStory = "This is awsome new story";
// console.log(story.concat(" ", newStory));
// console.log(`${story}`.concat(" ", newStory));

// function add(a, b) {
//    return a + b;
// }

// console.log(add(2, 4));

// console.log(add(2, "1"));

// console.log(add(2, "a", "b"));

// console.log(add(2, null));

// console.log(add(2, undefined));

// const add = (a, b) => {
//    return a + b;
// };

// console.log(add(2.33, 2.33));

// const names = ["Adam", "Robert", "Piotr"];
// const age = [23, 40, 25];
// const mergedArray = names.concat(age);
// console.log(mergedArray);
// console.log(mergedArray.join());

let numbers = [2, 3, 4, 5, 6, -1, 0];
let numbers1 = [2, 3, 4, 5, 6, -1, 0];
let numbers2 = [2, 3, 4, 5, 6, -1, 0];
console.log(numbers);
console.log(numbers.sort());
console.log(numbers.sort().reverse());
console.log(numbers1.reverse());
console.log(numbers2.sort((a, b) => b - a));
numbers2.push(-20, 100);
console.log(numbers2);
console.log(numbers2.sort());

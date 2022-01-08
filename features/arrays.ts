// Typescipt arrays should maintain just one type of elements.





const carMakers = ['ford', 'toyota', 'volvo', 'mercedes'];

// if we just initialize an empty array, we should tag it with a type annontation
const myNumbersArray: number[] = [];

const datesArray = [new Date(), new Date()];

const carsByMake = [ // :string[][] -> an array containing an array of strings
['f150'],
['corola'],
['240'],
['bentz']
];

// TS can do type inference when extracting values from an array
// Help with inference when extracting values
const myCurrentCar =  carMakers[2];
const myFutureCar =  carMakers.pop();

// TS can prevent us from adding incompatible values to the array
// carMakers.push(100);

// We can get help with 'map', 'forEach', 'reduce' functions
carMakers.map((car: string):string => {
    return car.toUpperCase(); // TS now knows what this type is, and can give good autocomplete options.
});

// Flexible Types - arrays can still contain multiple different types.
const importantDates = [new Date(), '2030-10-10']; // :(string | Date)[] -> can contain stings or dates

// We will be using arrays any time we need to represent a collection of
// records with some arbitary sort order.
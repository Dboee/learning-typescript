// A tuple is an array-like structure where each 
// element represents some property of a record.

// An object works well, nice and easy to read
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};




// Typescipt lets you turn a sting into a touple my locking types to positions in the string.
const pepsi: [string, boolean, number] = ['brown', true, 40]; // The type annontation makes this a touple in this case.
// We can also use type aliases, we'll look at those later.

// Type definition
type Drink = [string, boolean, number];

const julebrus: Drink = ['brown', true, 50];
const sprite: Drink = ['clear', true, 30];

// Touples are useful when working with csv files for example, 
// but not used that often...

const carSpecs: [number, number] = [400, 3354]; // hard to understand what the values are representing

const carStats = { // Objects are generally easierto understand, so use objects for things like this.
    horsepower: 400,
    weight: 3354
};
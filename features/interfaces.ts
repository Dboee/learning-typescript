// Interfaces creates a new type, descibing the
// property names and the value types of an object.

interface Vehicle {
  name: string;
  year: Date;
  working: boolean;
  summary(): string;
}

interface Reportable {
  // An object can have more elements, as long as the interface rquirements are met.
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  working: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinkObject = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

// This works, but it starts getting hard to read, especially if we have more elements on the object.
const printVehicle = (vehicle: {
  name: string;
  year: number;
  working: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year Built: ${vehicle.year}`);
  console.log(`Working: ${vehicle.working}`);
};

// Better alternative using interface.
const printVehicle2 = (vehicle: Vehicle): void => {
  // Interface Vehicle makes it a lot cleaner.
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year Built: ${vehicle.year}`);
  console.log(`Working: ${vehicle.working}`);
};

// Since we are now just accessing the summary, we dont really need to have all the elements available.
const printVehicle3 = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

// We can now make this function more generic, and not just apply to vehicles.
const printSummary = (element: Reportable): void => {
  console.log(element.summary());
};

printVehicle3(oldCivic);

// Since both object have a summary function, they are both reportable, and can be thrown into out print function.
printSummary(oldCivic);
printSummary(drinkObject);

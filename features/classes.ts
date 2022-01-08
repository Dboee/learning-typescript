// Classes are blueprints to create an object with
// some fields(values) and methods (functions)
// to represent a 'thing'.

// ========== methods(functions) to represent a thing: ======================================
// It's common to use a uppercase first letter when defining a class
class Vehicle {
  protected honk(): void {
    console.log('Honky Donk');
  }
}

// A car should probably be able to do all the things a Vehicle can do.
// extrends is used for basic enheritance.
class Car extends Vehicle {
  // You can override how a function works by writing a new function with the same name in the childclass.
  private drive(): void {
    console.log('wroomm');
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// To create an instance of a class, we use "new"
const vehicle = new Vehicle(); // and a lowercase first letter when creating an instance from a class

const car = new Car();

// MODIFIERS ===============================
// PUBLIC
// This method can be called anywhere, any time.

// PRIVATE
// This method can only be called by other methods in this class.
// This is mainly used so other developers dont call methods on accident.

// PROTECTED
// This method can be called by other methods in this class,
// or by other methods in child classes.

// =========== fields(values) to represent a thing: ======================================

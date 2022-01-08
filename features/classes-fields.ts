// Classes are blueprints to create an object with
// some fields(values) and methods (functions)
// to represent a 'thing'.

// It's common to use a uppercase first letter when defining a class
class Vehicle2 {
  // =================== REPETATIVE WAY ============================================
  // color: string;
  // // If you do not use a constuctor, you must initialize it like this:
  // // color: string = '':
  // //
  // constructor(color: string) {
  //   // A constructor will be instantly executed when we create a thing from a class.
  //   this.color = color;
  // }
  // =================== REPETATIVE WAY ============================================
  // ===================    SHORTCUT    ============================================
  constructor(public color: string) {}
  // does the same a the code above.
  // ===================    SHORTCUT    ============================================
  protected honk(): void {
    console.log('Honky Donk');
  }
}

// To create an instance of a class, we use "new"
const vehicle2 = new Vehicle2('beige'); // and a lowercase first letter when creating an instance from a class
console.log('Vehicle: ');
console.log(vehicle2.color);

// A car should probably be able to do all the things a Vehicle can do.
// extrends is used for basic enheritance.
class Car2 extends Vehicle2 {
  constructor(public wheels: number, color: string) {
    super(color); // The super keyword is used to access and call functions on an object's parent.
  }
  // You can override how a function works by writing a new function with the same name in the childclass.
  private drive(): void {
    console.log('wroomm');
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car2 = new Car2(4, 'red');
console.log('Car: ');
console.log(car2.color);

// MODIFIERS ===============================
// PUBLIC
// This method can be called anywhere, any time.

// PRIVATE
// This method can only be called by other methods in this class.
// This is mainly used so other developers dont call methods on accident.

// PROTECTED
// This method can be called by other methods in this class,
// or by other methods in child classes.

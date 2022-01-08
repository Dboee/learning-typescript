// Classes are blueprints to create an object with
// some fields(values) and methods (functions)
// to represent a 'thing'.
// methods(functions) to represent a thing: ======================================
// It's common to use a uppercase first letter when defining a class
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('wrooooom');
    };
    Vehicle.prototype.honk = function () {
        console.log('Honk Honk');
    };
    return Vehicle;
}());
// To create an instance of a class, we use "new"
var vehicle = new Vehicle(); // and a lowercase first letter when creating an instance from a class
vehicle.drive();
vehicle.honk();
// fields(values) to represent a thing: ======================================

// Person Object Created using Constructor
// function Person(name,dob){
// 	this.name = name;
// 	this.birthday = new Date(dob);
// 	this.calculateAge = function(){
// 		const diff = Date.now() - this.birthday.getTime();
// 		const ageDate = new Date(diff);
// 		return ageDate.getUTCFullYear() - 1970
// 		;
// 	}
// }

// const bruce = new Person('bruce', '9-11-2008');
// console.log(bruce);
// console.log(bruce.calculateAge())

// function Person(firstName,lastName,dob){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.birthday = new Date(dob);

// }
// // Person Protype Vs Object Prototype
// Person.prototype.calculateAge = function(){
// 		const diff = Date.now() - this.birthday.getTime();
// 		const ageDate = new Date(diff);
// 		return Math.abs(ageDate.getUTCFullYear() - 1970);
// 	}
// Person.prototype.greeting = function(){
// 	return `Hello ${this.firstName} ${this.lastName}`;
// }
// Person.prototype.getsMarried = function(newLastName){
// 	this.lastName = newLastName;
// }
// const tom = new Person('Tom', 'Cruise', '1-1-1989');
// const jolene = new Person('Jolene', 'Shelby', '2-23-1995');

// // console.log(tom.calculateAge());
// console.log(jolene.greeting());
// jolene.getsMarried('Kapoor'); console.log('After Jolene gets married to Rishi Kapoor ');
// console.log(jolene.greeting());

// const brad = {
// 	name : 'Brad',
// 	age : 21
// }
// Object.prototype.calculateAge = function(){
// 	return `${this.age}`;
// }
// console.log(brad);
// console.log(brad.calculateAge())


// Protypal Inheritance
// function Person(firstName,lastName){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }
// Person.prototype.greeting = function greeting() {
// 	return `Hello ${this.firstName} ${this.lastName}`;
// }
// const parash = new Person('Parash', 'Shrestha');

// console.log(parash.greeting())

// function Customer(firstName,lastName,membership){
// 	Person.call(this,firstName,lastName);
// 	this.membership = membership;
// }
// // Inherit the Person protype to Customer Prototype
// Customer.prototype = Object.create(Person.prototype)
// Customer.prototype.constuctor = Customer;
// const ramesh = new Customer('Ramesh', 'Subedi', 'Gold');
// console.log(ramesh)
// // console.log(ramesh.greeting()); 	 


// ES6 Classes
class Person{
	constructor(firstName,lastName,dob){
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}
	greeting(){
		return `Hello ${this.firstName} ${this.lastName}`;
	}
	calculateAge(){
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	getsMarried(newLastName){
		this.lastName = newLastName;
	}
	static addNumbers(x,y){
		return x-y;
	}
}
const ramesh = new Person('Ramesh', 'Srivastav', '1-12-2020');

console.log(ramesh);
console.log(Person.addNumbers(2,1));


class Customer extends Person{
	constructor(firstName,lastName,phone,membership){
		super(firstName,lastName);
		this.phone = phone;
		this.membership = membership;
	}
	greeting(){
		return `Hello ${this.firstName} ${this.lastName}.`;
	}
	static getMembershipCost(){
		return 1000;
	}
}
const suresh = new Customer('Suresh', 'Star','4321','Platinum' );

console.log(suresh);
console.log(Customer.getMembershipCost());
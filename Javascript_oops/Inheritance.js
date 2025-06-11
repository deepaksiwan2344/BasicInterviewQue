// Inheritance
// In JavaScript, inheritance is a mechanism that allows one object to inherit
// properties and methods from another object.

// Parent class
 /*class Animal{
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

class Dog extends Animal{
   constructor(name, breed){
    super(name); //super(name), super is a keyword used in JavaScript to call the
    // constructor of the parent class.
    this.breed = breed
   }
}



const myDog = new Dog('Buddy', 'Labrador');
myDog.eat()
myDog.sleep();


class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    sayHI(){
        console.log("say hi...")
    }
    static hello(){
        console.log("Hello")
    }
    //static function call directaly at class 
}
const person = new Person("deepak", 24);
Person.hello()
person.sayHI()
console.log(person)


class emp{
    constructor(name){
        this.name = name
    }
    msg(){
        console.log("Hello")
    }
}

class Manager extends emp{
    constructor( name,department){
        super(name)
        this.department = department
    }
    info(){
        super.msg();
        console.log(this.name + "is manager of department")
    }

}

class Admin extends Manager{

}
let admin = new Admin("praveen", "node js")
console.log("admin", admin)

let mng1 = new Manager("deepak", 'web developent')
console.log(mng1)



//Public and Prvate
class emp{
    #name = ""
    constructor(name){
        this.#name = name
    }
    #getName(){
        console.log(this.#name)
    }
    pubfun(){
        this.#getName();
    }
}

let emp1 = new emp("deepak");
console.log(emp1.pubfun())

Mixing


*/

/*
Inheritance Example of Banking

// Parent Class
class BankAccount {
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ₹${amount}. Remaining balance: ₹${this.balance}`);
        } else {
            console.log("Insufficient balance.");
        }
    }

    displayDetails() {
        console.log(`Account No: ${this.accountNumber}, Name: ${this.holderName}, Balance: ₹${this.balance}`);
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, holderName, balance, interestRate) {
        super(accountNumber, holderName, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        let interest = (this.balance * this.interestRate) / 100;
        this.balance += interest;
        console.log(`Interest ₹${interest} added. New balance: ₹${this.balance}`);
    }
}
class CurrentAccount extends BankAccount {
    constructor(accountNumber, holderName, balance, overdraftLimit) {
        super(accountNumber, holderName, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`Withdrew ₹${amount}. New balance: ₹${this.balance}`);
        } else {
            console.log("Overdraft limit exceeded.");
        }
    }
}

const saving = new SavingsAccount("SB123", "Deepak", 10000, 5);
saving.displayDetails();
saving.addInterest();
saving.deposit(2000);
saving.withdraw(5000);

console.log("----------");

const current = new CurrentAccount("CA456", "Kumar", 5000, 3000);
current.displayDetails();
current.withdraw(7000);  // Within overdraft
current.withdraw(2000);  // Exceeds overdraft


*/

// 1
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    speak() {
        console.log(`${this.name} ovoz chiqarmoqda.`);
    }
}

// 2
class Product {
    constructor(price) {
        this.price = price;
    }
    filterByPrice(maxPrice) {
        return this.price <= maxPrice;
    }
}

// 3
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    login(username, password) {
        return this.username === username && this.password === password;
    }
    logout() {
        console.log("User logged out.");
    }
}

// 4
class Flight {
    constructor(flightNumber, departureTime, destination) {
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.destination = destination;
        this.seats = 100;
    }
    bookSeat() {
        if (this.seats > 0) this.seats--;
    }
    cancelSeat() {
        this.seats++;
    }
    getAvailableSeats() {
        return this.seats;
    }
}

// 5
class Course {
    constructor(courseName, courseCode) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        this.students = this.students.filter(s => s !== student);
    }
}

// 6
class Wallet {
    constructor(balance) {
        this.balance = balance;
    }
    addFunds(amount) {
        this.balance += amount;
    }
    spendFunds(amount) {
        if (this.balance >= amount) this.balance -= amount;
    }
}

// 7
class Notification {
    constructor(message, date) {
        this.message = message;
        this.date = date;
    }
    sendNotification() {
        console.log(`Notification sent: ${this.message}`);
    }
    clearNotification() {
        console.log("Notification cleared.");
    }
}






////////////////////////////////////////////////////////////////////////////////////

// 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// 2
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) this.balance -= amount;
    }
}

// 3
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// 4
class Student {
    constructor(name, id, grades) {
        this.name = name;
        this.id = id;
        this.grades = grades;
    }
    calculateAverage() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
}

// 5
class Clock {
    displayTime() {
        setInterval(() => {
            console.log(new Date().toLocaleTimeString());
        }, 1000);
    }
}

// 6
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    giveRaise(percentage) {
        this.salary += this.salary * (percentage / 100);
    }
}

// 7
class Order {
    constructor() {
        this.items = [];
    }
    addItem(item, quantity) {
        this.items.push({ item, quantity });
    }
    removeItem(item) {
        this.items = this.items.filter(i => i.item !== item);
    }
    calculateTotal(prices) {
        return this.items.reduce((total, i) => total + (prices[i.item] * i.quantity), 0);
    }
}

// 8
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
    multiply(a, b) { return a * b; }
    divide(a, b) { return b !== 0 ? a / b : 'Error: Division by zero'; }
}

// 9
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

// 10
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
}
class Car extends Vehicle {
    constructor(speed, fuel) {
        super(speed);
        this.fuel = fuel;
    }
}
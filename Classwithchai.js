// // • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     changeAge(age) {
//         return this.age = age + 12;
//     }
// }


// // const myPerson = new Person("Rakesh", 21);
// // console.log(myPerson)
// // console.log(myPerson.changeAge(21))
// // console.log(myPerson)

// // class Student extends Person {
// //     constructor(name, age, studentId) {
// //         super(name, age);
// //         this.studentId = studentId;
// //     }

// //     getStudentId() {
// //         return `student ID: ${this.studentId}`;
// //     }

// //     static gretting() {
// //         return `Hello,, good night ${this.name}`
// //     }
// // }

// // const student1 = new Student("ImBona", 21, "S12345")
// // console.log(student1.getStudentId())
// // console.log(student1.gretting())


// class Student extends Person {
//     static studentCount = 0;

//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//         Student.studentCount++;
//     }

//     getStudentId() {
//         return `Student ID: ${this.studentId};`
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`
//     }
// }

// const student1 = new Student("Bob", 20, "S12345")
// const student2 = new Student("Charlie", 22, "S12346")
// console.log(Student.studentCount);

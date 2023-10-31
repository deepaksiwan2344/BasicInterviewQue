// In JavaScript, a getter is a method that gets the value of a specific property on an object,
// while a setter is a method that sets the value of a specific property on an object. Getters
// and setters are used to control access to an object's properties and add extra logic to
// property access or assignment.


let useInfo ={
    firstname: "deepak",
    lastname: "kumar",
    get fullname(){
        return this.firstname+ " "+ this.lastname
    },
    // language: "",
    // set lang(lang){
    //     this.language = lang

    // }
}


// useInfo.lang = 'eng';
// console.log(useInfo)
console.log(useInfo.fullname)

let userData ={
    name: "deepak",
    lastname: "kumar",
    get fullname(){
        return this.name+ "" +this.lastname
    }
}

console.log(userData.fullname)
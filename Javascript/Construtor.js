//example of constructor function
//  In JavaScript, a constructor is a special function that is used to create and initialize objects.
//  When a constructor is invoked using the new keyword,
//  it creates a new object and assigns it to the this keyword within the constructor


// function Person(name, age){
//     this.name = name;
//     this.age= age;
//     this.seyHello = function(){
//         console.log("hello deepak")
//     }
// }





// const deepak = new Person(deepak, 23)
// deepak.sayHello();


function personinfo(name, age, village) {
  this.name = name;
  this.age = age;
  this.vilage = village;
}


const deepakinfo = new personinfo("deepak", 23, "siwan");
console.log("deepakinfo", deepakinfo);


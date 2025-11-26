// This is useful to create directly objects and override their behavior individually.
function Person(){
    this.age = 12;
    this.talk = function() {
        console.log("Hello, I am a person.");
    }


}
/*
// To add methods to the prototype (to be inheritable)
Person.prototype.talk = function() {
    console.log("Hello, I am a person.");
}*/

const me = new Person();
me.talk();
me.age; 

const you = new Person();
you.talk = function() {
    console.log("Hello, I am you.");
}
you.talk();
me.talk();


function Person(){
    this.age = 12;
    this.talk = function() {
        console.log("Hello, I am a person.");
    }


}
/*
Person.prototype.talk = function() {
    console.log("Hello, I am a person.");
}*/

const me = new Person();
me.talk();
//Person.age = 40;
//me.age; 
//Person.prototype.age = 30;
me.age; 

/*const you = new Person();
you.talk();
*/

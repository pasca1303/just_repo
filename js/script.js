const person = {
    name: 'maxim',
    age:25,
    greet:function(){
        console.log("Greet!");
    }
}

// const lena1 = Object.prototype.sayHello = function() {
//     //console.log(this.greet());
// 	console.log('hello');
// }
Object.prototype.sayHello = function(){
    console.log("Hello");
}
const lena5 = Object.create.sayHello5 = {'key':function(){
    console.log("hello5");
}};
const lena6 = Object.create.sayHello6 = function(){
    console.log("hello6");
}
//const lena = Object.create(person);
const str = new String(700);



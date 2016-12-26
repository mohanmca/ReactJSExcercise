//http://egghead.io/playlists/the-this-key-word-250c37d9  

* Implicit Binding  (Left of the Dot)
* Explicit Binding
* New Binding
* Window/Glabal Binding

# We don't know the meaning of this, until the function is invoked.

var sayHello = function(name) {
  console.log('Hello' + name);
  //Following would print Window/Global
  console.log(this);
}

------------
Mixin - this
-------------

var functionMixin = function(obj) {
  obj.sayHello =  function() {
    console.log('Hello! ' + this.name);
  };
}

var me = {
  name : "Mohan"
}

var joe = {
  name : "Joe"
}


functionMixin(joe);
functionMixin(me);


joe.sayHello();
me.sayHello();

----------
var Person = function(name, age) {
  return {
    name : "Joe",
    age : age,
    sayName : function() {console.log(this.name); },
    mother: {
      name : "Stacey",
      sayName : function() {console.log(this.name); },
    }
  };
}

var jim = new Person('Jim', 24);
var joe = new Person('Joe', 24);

----------------
Explicit Binding
----------------

var stacey = {
  name : "Stacey",
  age : 34
}

function sayName() {
    console.log(this.name);
}

function sayNameWithParam(lang1, lang2) {
    console.log('My name '  + this.name + ', And I Know ' + lang1 + ' and ' + lang2 );
}

var languages = ['ruby', 'python'];
sayName.call(stacey);
sayNameWithParam.call(stacey, languages[0], languages[1]);
sayNameWithParam.apply(stacey, languages);

var newFunction = sayNameWithParam.bind(stacey, languages[0], languages[1]);
newFunction();



----------------
New Binding
----------------

var Animal = function(color, name, type) {
  //this = {}
  this.color = color;
  this.name = name;
  this.type = type;
}

var zebra = new Animal('Black and white', 'Zorro', 'Zebra');


----------------
Window/Global Binding
----------------
var me = {
  age: 25
};

var sayAge = function() {
  //'use strict';
  console.log(this.age);
}

sayAge();
window.age = 25;
sayAge();

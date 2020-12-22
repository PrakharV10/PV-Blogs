---
title: Dealing with Functions in JavaScript
date: "2020-12-17T22:40:32.169Z"
description: After JavaScript variables, the next amazing thing is JavaScript Functions. This articles focuses on understanding the different type of JavaScript Functions& the different Notations used.
---

### Introduction 
In the previous article, we studied about the different types of keywords, that are used to declare variables in JavaScript. If you haven't read the previous blog, you can find it [here](https://prakhar10varshney.hashnode.dev/declaring-your-first-variable-in-javascript).

Today, we are going to learn the next fundamental thing, i.e. Functions. 

Let's get started.

### What are Functions?

> 
Functions are "self contained" modules of code that accomplish a specific task.

Let's understand this in basic terms. 
Functions are like blocks of code, containing some expressions, bindings, statements etc, which once defined can be used anywhere!

Functions usually "take in" data, process it, and "return" a result. Once a function is written, it can be used over and over and over again.

Let's get into more details.

### Defining a function.
There are various methods for defining a function. But first, let's understand the concept of defining a function.

As we know, we use different bindings(or variables), for storing data which is to be used later! In the similar way, functions are defined to store a particular block of code, inside them, which is to be used later.

A function definition is same as a variable definition. The only difference here is that, inside a regular binding, instead of some value, the function is stored. Sounds Typical? Lets see some example here -

``` js
let sqFunction = function (x){
    return x*x;
}
```

A function is defined using a keyword `function`. In this case, the name of the function is `sqFunction`, which will be used for calling it later on. The function body is wrapped inside curly braces - { }, inside these, our desired code has to be written. 

In the above example, 'x' is a parameter passed inside the `sqFunction`.

### Understanding Parameters -


> 
Parameters are values passed at the time of function definition. In general terms, Parameters are used to take value of variables, from outside of the scope of function, to be used inside the function. 

A function can have multiple parameters, or no parameters at all, It depends solely on the choice of the programmer. For eg -
```js
let add = function(a,b){
    return a + b;
}
console.log(add(2,3));

// --> 5
```
*Note - The `return` keyword is used to return a value, when the function is called. In this case, the `return` keyword send the sum of function `sum`, which we log to the console.*

### Calling a function -
A function call statement is used to use a defined function, where we need it. We are required to write the name of the function followed by parenthesis, which contains values as arguments. 

Here's an example- 
``` js
let hello = function(){
    console.log("Hello");
}
hello();
// --> Hello
```

*Note - Arguments are the values that are to be sent as Parameters for the function. *

### Declaration Notation -
After understanding function declaration, call statement, parameters and arguments, we will learn a different way of defining the function, than the one we were using until now.

This was is slightly better and preferred way of defining a function. In this case we use the syntax - 
``` js
// function function_name(parameters){
//    body 
// }
// Example - 

function add(x,y){
    return x+y;
}
```
In the above example we don't need to use the keyword `let`, `var` or `const`, to define the function. Instead we directly put the function name after the leyword `function`.

### Arrow Notation -
This is one the most important and widely used Notation for function definition. Let's see how it looks like -

``` js
let add = (x , y) => { return x + y; } ;
console.log(add(2,3));

// --> 5
```
Overwhelmed? Let's break this down-

1. Using of the `let` variable for variable defining is the same as we studied above.

2. In this notation, The keyword function is removed, and the parameters that are to be passed inside it, is placed inside parenthesis, like we can see - `(x , y)`. *(If there are no parameters to pass, than we leave the parenthesis empty.)*

3. Next we use an arrow symbol *(equals to sign, followed by a greater than symbol)*.

4. And then the body, which is inside the curly-braces. 

Note, in the case of small functions, where the value directly has to be returned, we can use this -
```js
let add = (x , y) => x + y;
```
In above example, JavaScript automatically recognizes, whatever is written after the arrow, as return values and returns them. 

### Summary -

* Defining 'a' to hold a function value - 
```js
let a = function (){
    console.log("Hello World!");
}
```

* Declaring a function 'b' -
```js
function b(){
    console.log("Hello World!");
}
```

* Using Arrow function -
```js
let c = (x , y) => x + y; 
```

Congratulations! You have learnt the different ways of declaring functions in JavaScript. Practice and get your hands dirty while experimenting with functions, You will surely learn something new!

### What's next -
I'm sure after reading this article, your basic concepts related to JavaScript functions must be clear! If you liked this blog, Give me a **Like** ❤️ and **Share**➦ your newly acquired knowledge with your friends! 

Also if you felt like I missed something, put it into the **Comments**💬 section, for other people to read. 

Stay tuned for more Blogs or read my previous ones, listed below! 
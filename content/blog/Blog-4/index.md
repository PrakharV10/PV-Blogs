---
title: Declaring your First Variable in JavaScript
date: "2020-12-16T22:40:32.169Z"
description: Getting Started with JavaScript Variables. This articles focuses on understanding the difference between the three keywords for defining variables - let , var and const.
---

### Introduction -
In this article, we will discuss the different ways of defining variables present in JavaScript! Stick to the end of the article to discover something new, that you might have missed previously!

Without further ado, let's get started. 

### What are Variables?

> 
Variables (or Bindings) are used to name a memory location, inside which some information or some changes done in a program are stored. 

Let's simplify this statement a little bit. 
Ever wondered, how JavaScript remembers some data given to it by us? Let's take an example - You are prompted by the Browser for your Name and after filling out your name, you are greeted by the Program as "Welcome <your name>!" 
So how was JS able to collect the information provided by you (here, your name) and was able to use it later, when needed??

For this, variables come into play. We define a variable and we ask the JS to store the information in that. Once, the variable has been defined, we can use it anywhere and anytime we want! 

Let's see an example - 
```js
var name = prompt("What is your Name?");
\\ user entered "PV"
console.log("Welcome " + name);
```

In the above example, the prompt stores your data into the variable called "name".
*P.S. You can define the variable_name as anything you like.*

### Variable types -
So now you may ask, what's the "var" word, used before the variable_name?

> 
Var is a *keyword* used to define a variable. 

Let's first understand what a keyword is.
Keywords are predefined or reserved words present in the JS. These words already have a defined meaning to them and we CANT use them as variable names! I'll give you some examples - `let`, `var`, `const`, `for`, `if`, `break`, `catch` etc.

So in order to define a new variable, we need to use one of these three variables - `let`, `var` or `const`. 

```js
let first = "Hello";
var second = 2;
const third = 'A';
```
*Note - JavaScript is very liberal in case of defining variables. Unlike other languages, we do not have to specify the data-type of the data that variables will be storing. In short, We do not need to notify JavaScript that we will be storing string or int or char in the variable. :)*

### Difference between these 3 keywords -
Let's start by knowing the usage of and the difference between `let` and `var`.
You might see in different codes and places, `let` and `var` being used interchangeably. 
They might seem the same to you, but they aren't. 

The main difference between `let` and `var` is due to the scope of the variable, that the keywords are defining. 


> 
`let` is limited to the block in which it is declared while variable declared with `var` has the global scope.

I'm pretty sure you understood nothing by that! Lets dive into an example to understand it.

```js
function textExample(){
    let a = "Prakhar";
    console.log(a);
}
textExample();
console.log(a);

\\ Output of above program is -
\\ Prakhar
\\ Undefined
```
Here in the above example, we can see that the variable 'a' was defined inside the function textExample, and its scope is limited to that function only. When we try to print 'a' outside the function, the output is undefined.

But that is not the case with `var`. Let's see another example -

```js
function textExample(){
    var a = "Prakhar";
    console.log(a);
}
textExample();
console.log(a);

\\ Output of above program is -
\\ Prakhar
\\ Prakhar
```
Here, unlike the `let` keyword, the variable is accessible even outside of the function. In this case, the `var` keyword, has global scope i.e. the scope is not limited to inside the block, it is defined in.

Now let's move towards `const`-

The `const` keyword is used to defined constants in a program. Let's say, you want to define the value of pi, inside your program for some mathematical calculations. In this case you use `const`. 

```js
const pi = 3.1415926;
```

Now once, you have defined pi constant, it's value CANNOT be changed under any circumstances inside your program. Sounds easy? It is!

And Congratulations! you have learnt the 3 methods or keywords for defining a variable, inside your program. Go define, anything you want, any way you want!

### What's next?
I'm sure now, in the future you won't ever be confused amongst these 3 keywords! These keywords might seem small, but they play a huge role in building up your basics in JavaScript. 

If you have followed the article until now, consider giving a like and sharing it with your friends! It would be much appreciated. 

Also, Stay tuned for more tech articles like this one, or checkout the previous ones, I have already published! 

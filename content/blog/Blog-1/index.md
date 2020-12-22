---
title: Building A F.R.I.E.N.D.S Quiz Using JavaScript
date: "2020-11-27T22:17:22.284Z"
description: "A walkthrough tutorial for the first project I made, using Repl.it. Follow along to learn the basics of JavaScript in a few hours!"
---

In this tutorial, we will learn to create our first ever project : Creating a Quiz using only JavaScript with [Repl.it](https://repl.it/) 

Without further wait, Let us begin :
#### Prerequisites :-
1. Create an account on [Repl.it](https://repl.it/).
2. Ready the Questions of your quiz, the options and the correct answer of the questions.
3. Make a Blueprint, involving the marking schemes and the structures of levels to be included. (_optional_)

#### Understanding Repl - 
A "Repl" at Repl.it is an interactive programming environment. We can create a workspace in most popular programming languages, where we are given a container on a virtual machine where our code can run. It allows us to write code and build apps and websites using a browser. Additionally, We can also share projects through various ways. 

#### Importing Packages
This is our one the most essential commands, for creation of our projects. We import packages - `readline-sync` and `chalk`.
1. `readline-sync` - Allows our console to have a 'conversation' with the users. Basically, We use it to take input from users. The Input can be of any data-type eg- String, integer etc.
2. `chalk` package is used for the beautification of our project. By the help of chalk we can introduce various text-colors, background-colors and styles to our text.

We import these packages by using command - 
```js
var readline = require('readline-sync');
var chalk = require('chalk');
```

#### Taking Input from the user - 
Next, we take Username as Input from our user, in order to display their name and make the Quiz _more interactive_.
We input username by using the readline-sync package and Display it(with enhancing their colors a bit by the chalk package) we installed in the previous step, as shown below -
```js
var Username = myVar.question(chalk.red("Hi! What is your name?\n"));
console.log(chalk.cyanBright("Welcome " + Username));
```
Note - `console.log()` is used to print output to the console.

#### Introducing the Question Bank -
Now, we define a variable named `questionBank` which includes various JavaScript objects, in which our questions and answers would be included.

_An Object is a collection of properties, and a property is an association between a name (or key) and a value._

Below is an example, which shows the initialization of various Questions and Answers, to be asked in the quiz -
```js
var questionBank = [{
  question : "Which of the actors on Friends unfortunately decides 
to whiten his teeth\n before going out on a first date with a girl\n
he's had a crush on for some time?\n",
  answer : "Ross"
},
{
  question : "Who was Ross's second wife?\n",
  answer : "Emily"
},
{
  question : "Who is Gunther's roommate?\n",
  answer : "Jasmine"
}]
```
Note - Here '\n' is used to change line, that will be shown on the user's screen.

#### Defining a Function, to check user-provided Answer to the Actual Answer -
To define a function, we use the keyword `function`, followed by the name of the functions, followed by the parameters to be passed in it. 
For eg- Here we define a function named 'checkAnswer', and we pass the question and answer from questionBank as its parameters.
We output the respective question to the user and check their answer to our pre-defined answer.
```js
function checkAnswer(question , answer){
  var userAnswer = myVar.question(chalk.cyanBright(question));
    if(userAnswer == answer){
    console.log(chalk.green("Correct."));
    score ++;
    }

    else{
    console.log(chalk.red("Wrong."));
    }
}
```

#### A loop to access all the questions of `questionBank` -
Now, we run  a for loop, in order to access every object of the `questionBank` and then use `function checkAnswer()` to check the user's answers. 
Additionally, we introduce a variable score, which can keep a check on the total score of the user.
```js
var score = 0;
for(var i = 0; i<questionBank.length; i++){
    current = questionBank[i];
    checkAnswer(current.question,current.answer);
  }
  console.log(chalk.yellowBright("Total = " + score + " out of " 
+ questionBank.length));
```
Note -`questionBank.length` is used to get the number of objects present in the `questionBank` list, we defined earlier.

Our quiz is now complete! Press the Run command to play the quiz by yourself.

#### Sharing the Quiz with your Friends - 
Add ?embed=1&output=1 in the URL of your project to share the Quiz. For eg-
Initial URL - `https://repl.it/@your-username/Project-name`
URL to share - `https://repl.it/@your-username/Project-name?embed=1&output=1`

### What's Next?
If you have followed this article till here, I'm sure you were able to create the Quiz successfully. If you faced any difficulties, you can always refer to my [code](https://github.com/PrakharV10/Project-01---p2).

Also if you want to play my version of the Quiz, you can do it [here](https://repl.it/@Prakhar10V/Project-01-p2?embed=1&output=1).

If you liked this tutorial, share it with your friends and help them learn!

Also! Stay tuned for more of these informative tutorials. :)


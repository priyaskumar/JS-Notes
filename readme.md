# Javascript - Notes

# CONTENTS

- Introduction

- Objects and Arrays

- Functions

- Algorithms

# Introduction

- A high level, single threaded, garbage collected, interpreted/ Just-in-Time compiled, prototye based, multi-paradigm, dynamic language with a non-blocking event loop.

- Excellent in handling IO intensive jobs

- It's standard implementation is called `ECMASCRIPT`

- The default language in web browsers. The only code that run snatively in a browser.

- A scripting language : you can run some code on the fly by opening console (dev tools) in the browser

## Js Engine

- The Js engine under the hood of the browser is called V8 

- Makes Js run extremely fast by taking your code and converting it to a machine code with a process called JIT compilation

## Js file 

- extension : .js

- Code executes from the global context

- Console :log to log a value with the built-in debugger
    ```js
    console.log('javascript');
    ```
## Runtime 

- Can run js files in a frontend browser or a backend node.js server as the runtime.

- In browser, you can reference it with a script tag (using src attribute)
    ```js
    <script src="app.js"></script>
    ```

- In website, Js is used to grab a element from the dom. 
    ```js
    <!-- <button>click me</button> - HTML-->
    document.querySelector('button');
    ```
## Variable Types

- Document query selector will grab the HTML element.

- We can assign it to the variable with any of the following types :

    - var - original way to assign but avoided
        ```js
        var btn = document.querySelector('button');
        ```

    - let - for variables that can be reassigned 
        ```js
        let btn = document.querySelector('button');

        let luckyNum = 23;
        ```

    - const - for variables that cannot be reassigned
        ```js
        const btn = document.querySelector('button');
        ```
## Lexical Environment 

- Determines where variables work and where they don't

- Scopes:

    - Global Scope

    - Local Scope

    - Block Scope

    ```js
    let a = 'global';

    function func() {
        let a = 'local';

        if (true) {
            let a = 'block';
            var b = 'hoisted'; <!-- hoisted up to the local scope -->
        }
    }

## Primitive Data Types 

- Js is dynamically typed, so you dont have to specify the data type during declaration.

- Types :

    - string

    - number

    - bigint

    - boolean

    - undefined

    - symbol

    - null

- Default value for any datatype is undefined.

## Event Listener

- To make HTML element interactive, define a function for the event

    ```js
    btn.onclick() = function() { 

    }
    <!-- or -->
    btn.onclick() = () => {

    }
    ```
- The event loop will execute this function whenever the event occurs

## Data Structures

### Array

- Dynamic collection of indexed items
    ```js
    const list = ['foo','bar']
    ```

### Set

- Hold collection of unique items
  
    ```js
    const uniq = new Set(list)
    const uniq2 = new WeakSet(list) //garbage collected set
    ```
### Map

- Holds a key:value pair
    ```js
    const dict = Map([
        ['foo': 1],
        ['bar': 2]
    ])

    const dict2 = WeakMap([
        ['foo': 1],
        ['bar': 2]
    ])            
    ```

## Functions

- first class objects to support functional programming patterns

    ```js
    const fun = () => 'functional programming patterns'
    ```

### Function Definition

- When function keyword is used, it signifies function definition

    ```js
    function fun() {

    }
    ```
### this - keyword

- A keyword that references an object based on how a function has called.

- If called globally references to window

    ```js
    function hello(){
        console.log(this)       //person
    }

    const person = {}

    hello.bind(person)  //bind a function to random object
    ```

### Pass by value and Pass by reference

    ```js
    const num = 26
    const obj = new Object()

    somefunc = (num,obj)
    // If argument is primitive like num it is passed as value ( copy is sent )
    // If argument is object it is stored in the heap and its passed by reference ( mutating same obj )
    ```

## Classes and inheritance

- to support Object Oriented Patterns

    ```js
    class Humanoid {
        constructor() {
            this.dna = 'hi';
        }
        walk() {
            console.log('going for a walk')
        }
    }
    ```
- Even though, it is single threaded it can work asynchronously with `Promise` API which also supports the async wait.

    ```js
    const wait = new Promise((resolve, reject)) => {
        setTimeout(() => {
            resolve('thank you for waiting');
        },1000);
    });
    wait.then(doSomethong).catch(handleErr)

    async function pausableFunc() {
        await longRunningJob();
    }
    ```
## Running on server

- Js code can also run on server (using node.js runtime)

- Instead of buttons on webpage, it interacts with things like file system API

    ```js
    import { readFile } from 'fs/promises';
    readFile('./sample.txt', 'utf-8');
    ```
- To execute code on server, run the command on terminal

    ```
    node app.js
    ```

# REFERENCES

- [JS Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [JS in 100 secs](https://www.youtube.com/watch?v=DHjqpvDnNGE)
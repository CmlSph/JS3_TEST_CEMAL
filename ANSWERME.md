1. You could have used XMLHttpRequest, the library axios or the fetch API to get the data from the server. And you could have used callbacks, async/await and/or promises. What did you use and why?
(_TIP: There is no right way, all have their advantages and disadvantages. Explain your decision making listing the advantages/disadvantages of each technology/approach_)

Each of these methods have their advantages. We can not say this one or the other is the best. Two of the disadvantages of XMLHTTPRequest is that it doesn't use promises and we can not do error handling with that. But it is supported by the old browsers which is one of its advantages. The other advantage is that it is native to the browser. But it is an old concept and is not used much lately.

Axios seems to be the most powerful and advantageous one however it is not native to the browser. You are dependent on an external library. It uses promises, supports the older browsers, and you can do HTTP Error Handling with it.

However fetch does not support old browsers and HTTP Error Handling, it uses promises and is native to the browser. You are not dependant to an external library. I've chosen to work with fetch because it's native to the browser, I don't need to use an external library.

On the other hand, callbacks have many disadvantages. Using callback is not bad but we need to know how to avoid callback hell, which means nested functions. With an exercise like this you can easily fall into callback hell which is very time consuming and unnecessary. 

Async/await on the other hand has many advantages. It provides clean and neat syntax, it is more readable, it removes the .then blocks of our code, handles conditionals smoother and cleaner than the promises. 

In this case async/await would be much easier but I wanted to do it in a way I got used to doing it, using fetch (api) and promises. Promises break down the code and chain them together. Instead of code indenting to right like in callbacks, our codes are now increased in vertical direction. This solves the major problem of callback hell.


2. Let's say you were a huge fan of Object Oriented Programming and you would have all the data the api provided in an array and you want to restructure your code in an OOP way. What classes would you make and what functions would they have?
(_TIP: You do not have to write out the implementation of the functions (but you can if it makes it easier to think it through)_)
(_TIP: If you are unsure between two decisions, then write a comment with the alternative you considered but decided against with arguments. There is again no one correct answer here, but we want to see you think in an OOP way_)
(_TIP: If you want the code highlighting, it is also fine to create a `.js` file and then write down here what file to look at_)

Imagine the data is given as follows:
```
const data = [{
  category: 'Sports',
  questions: [{ question: 'Who won the 2015 Formula 1 World Championship?', answer: 'Lewis Hamilton'}, ...]
}, {
  ...
}];
```

Example of how to write the classes (taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    // get the area of the rectangle
  }

  calcArea() {
    // calculate the area of the rectangle
  }
}
```

What I would do is as follows:

I would create a class, named Sports. Within this class, in the constructor, I would define two properties, question and answer. Then I would create the methods to get the questions and answers.

class Sports {
  constructor (question, answer) {
    //These are the Properties-What the object is
    this.question = question;
    this.answer = answer;
}
    //These are the Methods-What can the objects do
  get question() {
    //Get the question
    console.log (`${this.question}`)
  }

  get answer() {
    //Get the answer
    console.log (`${this.answer}`)
  }
}
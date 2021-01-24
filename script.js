// // Functions to set an id attribute to an HTML element
// const DATA_ID_ATTRIBUTE = 'data-id';

// function getCategoryId(element) {
//   return element.getAttribute(DATA_ID_ATTRIBUTE);
// }
// function setCategoryId(element, id) {
//   element.setAttribute(DATA_ID_ATTRIBUTE, id);
// }

// /**
//  * The following code sets the buttons on the page with the information of the categories
//  */
// async function setTriviaCategories() {
//   // TODO
// }

// setTriviaCategories();


// /**
//  * The following code implements the top 3 buttons on the page
//  */
// async function onCategoryButtonClick(event) {
//   // This gets the button that was clicked
//   const clickedButton = event.target;
  
// }

const leftButton = document.getElementById('left-button')
const centralButton = document.getElementById('central-button');
const rightButton = document.getElementById('right-button');

const url=("https://opentdb.com/api_category.php")

function getCategories() {
  fetch (url)
  .then(response => response.json())
  .then(data => {
   
  const arrayOfCategories = data.trivia_categories
    for (let i = 0; i < arrayOfCategories.length; i++){
      
      const randomArray = arrayOfCategories[Math.floor(Math.random()*arrayOfCategories.length)];
  
      leftButton.innerText = randomArray.name;
      centralButton.innerText = arrayOfCategories[1].name;
      rightButton.innerText = arrayOfCategories[2].name;
    }
  })
}
getCategories();


function getQuestions() {
  fetch(`https://opentdb.com/api.php?amount=10&category=9`)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData)
    
    const questionsArray = jsonData.results
    for (let i = 0; i < questionsArray.length; i++){
      
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.classList.add("question-container");
      div.innerHTML = "";

      const spanQuestion = document.createElement('span')
      
      div.appendChild(spanQuestion)
      spanQuestion.classList.add("question-label")

      const spanAnswer = document.createElement('span')
      div.appendChild(spanAnswer)
      spanAnswer.className = 'answer-label'

      console.log(questionsArray[i].question);
      spanQuestion.innerText = questionsArray[i].question;
      spanAnswer.innerText = questionsArray[i].correct_answer;
    }
  })
}

leftButton.addEventListener('click', getQuestions);

function getOtherQuestions() {
  fetch(`https://opentdb.com/api.php?amount=10&category=9`)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData)
    console.log(jsonData.results[0].question);
   
  const questionsArray = jsonData.results
  for (let i = 0; i < questionsArray.length; i++){
      
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.classList.add("question-container");
    div.innerHTML = "";

    const spanQuestion = document.createElement('span')
    div.appendChild(spanQuestion)
    spanQuestion.classList.add("question-label")

    const spanAnswer = document.createElement('span')
    div.appendChild(spanAnswer)
    spanAnswer.className = 'answer-label'

    console.log(questionsArray[i].question);
    spanQuestion.innerText = questionsArray[i].question;
    spanAnswer.innerText = questionsArray[i].correct_answer;
    }
  })
}

centralButton.addEventListener('click', getOtherQuestions);

function getDifferentQuestions() {
  fetch(`https://opentdb.com/api.php?amount=10&category=11`)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData)
    console.log(jsonData.results[0].question);
   
  const questionsArray = jsonData.results
  for (let i = 0; i < questionsArray.length; i++){
      
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.classList.add("question-container");
    div.innerHTML = "";

    const spanQuestion = document.createElement('span')
      
    div.appendChild(spanQuestion)
    spanQuestion.classList.add("question-label")

    const spanAnswer = document.createElement('span')
    div.appendChild(spanAnswer)
    spanAnswer.className = 'answer-label'

    console.log(questionsArray[i].question);
    spanQuestion.innerText = questionsArray[i].question;
    spanAnswer.innerText = questionsArray[i].correct_answer;
    }
  })
}
rightButton.addEventListener('click', getDifferentQuestions);

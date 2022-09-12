// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.

const numToString = (n) => {
  document.getElementById("display-string").innerHTML = n.toString();
  console.log(`numToString ${n} is a ${typeof(n.toString())}`)
}

// Write a JavaScript program to convert a string to the number.

const stringToNum = (s) => {
  document.getElementById("display-number").innerHTML = parseInt(s);
  console.log(`stringToNum ${s} is a ${typeof(parseInt(s))}`)
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  const stringType = (t) => {
    console.log(`${t} is a ${typeof(t)}`)
    switch(typeof(t)) {
      case 'boolean':
        console.log(`${t} is a boolean`)
        break;
      case 'number':
        console.log(`${t} is a number`)
        break;
      case 'string':
        console.log(`${t} is a string`)
        break;
      case undefined:
        console.log(`${t} is undefined`)
        break;
      case NaN:
        console.log(`${t} is Not a Number`)
        break;
      case null:
        console.log(`Nothing was given`)
        break;
      default:
        console.log("Literally I don't know what that is..")
    }
  }

  
// Write a JavaScript program that adds 2 numbers together.

const numPlusNum = (m) => {
  document.getElementById("display-math").innerHTML = parseInt(m);
  let result = parseInt(m) + 1
  console.log(`${m} + 1 is ${result}`)
}

// Write a JavaScript program that runs only when 2 things are true.

const whenTwoTrue = (f, s) => {
  switch(f) {
    case True:
      switch(s) {
        case True:
          console.log("Both are True.")
          break;
      }
    default:
      console.log("One or none of given entities are False.")
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const whenOneTrue = (f, s) => {
  switch(f) {
    case True:
      switch(s) {
        case False:
          console.log("First is True, second is False.")
          break;
      }
    default:
      console.log("Both or none are True.")
  }
  switch(s) {
    case True:
      switch(f) {
        case False:
          console.log("Second is True, first is False.")
          break;
      }
    default:
      console.log("Both or none are True")
  }
}

// Write a JavaScript program that runs when both things are not true.  

const whenTwoFalse = (f, s) => {
  switch(f) {
    case False:
      switch(s) {
        case False:
          console.log("Both are False.")
          break;
      }
    default:
      console.log("One or none of given entities are True.")
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

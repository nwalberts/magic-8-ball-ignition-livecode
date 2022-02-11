const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Can't predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

const numberArray = [1, 2, 3, 4]

// Confirm the correct number of responses have been stored by printing the number to the console (`20`)

const determineLength = (array) => {
  return array.length
}

console.log(determineLength(numberArray))

// Ask the user what their question is, and store it as a variable called `question`
// Output a random response to the user's question


const magicEightBall = () => {
  const responses = ["no", "yes", "maybe"]

  const question = prompt("TELL THE ORB WHAT YOUR QUESTION IS!?")
  console.log(question)

  const indexOfRandomResponse = Math.floor(Math.random() * responses.length)
  console.log(responses[indexOfRandomResponse])
}
magicEightBall()


// randomly choose an element in the responses array, and log it 

  const indexOfRandomResponse = Math.floor(Math.random() * responses.length)
  console.log(responses[indexOfRandomResponse])

// Output the number of responses that include the word "yes"


const findYesWords = (arrayWithPotentialYesWords) => {

  let numberOfYesStrings = 0

  arrayWithPotentialYesWords.forEach((response) => {
    if (response.toLowerCase().includes("yes")){
      numberOfYesStrings++
    }
  })

  return numberOfYesStrings
}

findYesWords(responses)

// Example of finding yes words with the callback function defined separately

  let numberOfYesStrings = 0

  const yesCheckCallbackFunction = (response) => {
    if (response.toLowerCase().includes("yes")){
      numberOfYesStrings++
    }
  }

  responses.forEach(yesCheckCallbackFunction)

  console.log(numberOfYesStrings)

// Bonus: find the string that has the word "doubtful" in it

const foundReplyString = responses.find((responseString) => {
  return responseString.includes("doubtful") // true/false
})
console.log(foundReplyString)
![saywhat screen shot](https://github.com/jdhawks2132/wordle/blob/main/saywhat.png?raw=true)
# Wordle Clone

## Deployment

- [Front End Deployed on Vercel](https://wordle-ogtpcsop3-jdhawks2132.vercel.app/)
- [Back End Deployed on Heroku](https://wordsbackend.herokuapp.com/solutions)

## Purpose

The purpose of this project was to explore custom hooks in order to abstract away complex game logic from the React frontend. I also wanted to explore deploying a live application on Vercel - something I had never done before.

## Planning

- User can
  - Type 5 letter guesses
  - Allows up to 6 guesses
  - Tracks keyboard inputs
  - Tracks game state:
    - turn (current turn)
    - guesses (store each guess in an array)
    - history (store each guess as a string)
    - used keys (hashmap to store letters with colors)
    - correct guesses (isCorrect - game winning state)
  - Receive visual confirmation of correct/ incorrect guesses
    - Gray: No Letter && No Position, Yellow: Yes Letter && No Position, Green: Yes Letter && Yes Position
  - Gives winning/ losing feedback

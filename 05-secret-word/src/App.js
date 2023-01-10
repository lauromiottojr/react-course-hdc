import { useEffect, useState, useCallback } from 'react'

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

import { wordsList } from './data/words'

import './App.css';

const stages = [
  {
    id: 1,
    name: "start"
  },
  {
    id: 2,
    name: "game"
  },
  {
    id: 3,
    name: "end"
  },
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  //Object.keys() get the key word from array
  const pickWordAndPickCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return { word, category }
  }, [words])

  const startGame = useCallback(() => {
    clearLetterStates()
    const { word, category } = pickWordAndPickCategory()
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((letter) => letter.toLowerCase())
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }, [pickWordAndPickCategory])

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }
    if (letters.includes(normalizedLetter)) {
      // Get currently guessedletters and add normalizedletters if user guessed it
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [... new Set(letters)]
    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => actualScore += 100)
      startGame()
    }
  }, [guessedLetters, letters, startGame])

  const retry = () => {
    setGameStage(stages[0].name)
    setScore(0)
    setGuesses(3)

  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord}
        pickedCategory={pickedCategory} letters={letters}
        guessedLetters={guessedLetters} wrongLetters={wrongLetters}
        guesses={guesses} score={score} />}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import _, { words } from "lodash";

const Word = "zachary";

const generateLinesAndLetters = (word, guesses) => {
  let displayWord = "";

  let guessesCopy = [...guesses];

  for (let i = 0; i < word.length; i++) {
    if (guessesCopy.includes(word[i])) {
      displayWord += word[i] + " ";

      //removes this character from our array of guesses
      guessesCopy.splice(guessesCopy.indexOf(word[i]), 1);
    } else {
      displayWord += "_ ";
    }
  }
  return displayWord;
};

const findRemainingLetters = (word, guesses) => {
  let remainingLetters = [...word];
  let guessesCopy = [...guesses];

  for (let i = 0; i < word.length; i++) {
    if (guessesCopy.includes(word[i])) {
      console.log("remaining letters", remainingLetters);
      guessesCopy.splice(guessesCopy.indexOf(word[i]), 1);
      remainingLetters.splice(remainingLetters.indexOf(word[i]), 1);
    }
  }
  return remainingLetters;
};

export default function Hangman() {
  const [gameState, setGameState] = useState("PLAYING");
  const [lives, setLives] = useState(5);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const evaluateGuess = (guess) => {
    setGuesses([...guesses, guess]);
    const remainingLetters = findRemainingLetters(Word, guesses);

    //if the guess is not in the remaining letters to be guessed
    if (remainingLetters.indexOf(guess) === -1) {
      setLives(lives - 1);
      if (lives - 1 === 0) {
        setGameState("LOSE");
      }
    }

    setCurrentGuess("");
  };

  useEffect(() => {
    const remainingLetters = findRemainingLetters(Word, guesses);
    if (remainingLetters.length === 0) {
      setGameState("WIN");
    }
  }, [guesses]);

  return (
    <>
      {gameState === "PLAYING" ? (
        <div>
          <div>{_.range(lives).map(() => "😍")}</div>
          <div>{generateLinesAndLetters(Word, guesses)}</div>
          <lable>Enter a letter</lable>
          <input
            value={currentGuess}
            onChange={() => evaluateGuess(event.target.value)}
            type="text"
          ></input>
        </div>
      ) : (
        <div>
          GAME OVER
          <span>{gameState === "LOSE" ? "YOU LOSE" : "YOU WIN"}</span>
        </div>
      )}
    </>
  );
}

import {
  lowercaseLetters,
  uppercaseLetters,
  numbers,
  symbols,
} from '../tokens';

const returnValidCharacters = (
  lowercaseSelected,
  uppercaseSelected,
  numbersSelected,
  symbolsSelected
) => {
  let validCharacters = '';
  if (lowercaseSelected) {
    validCharacters += lowercaseLetters.join('');
  }
  if (uppercaseSelected) {
    validCharacters += uppercaseLetters.join('');
  }
  if (numbersSelected) {
    validCharacters += numbers.join('');
  }

  if (symbolsSelected) {
    validCharacters += symbols.join('');
  }

  return validCharacters;
};

export const returnValidPassword = (
  lowercaseSelected,
  uppercaseSelected,
  numbersSelected,
  symbolsSelected,
  requiredLength
) => {
  let validPassword = '';

  const validCharacters = returnValidCharacters(
    lowercaseSelected,
    uppercaseSelected,
    numbersSelected,
    symbolsSelected
  );

  while (validPassword.length < requiredLength) {
    // select a random index

    const index =
      Math.floor(Math.random() * (validCharacters.length - 0 + 1)) + 0;

    if (validCharacters[index] === undefined) {
      validPassword += validCharacters[index - 1];
    } else {
      validPassword += validCharacters[index];
    }
  }

  return validPassword;
};

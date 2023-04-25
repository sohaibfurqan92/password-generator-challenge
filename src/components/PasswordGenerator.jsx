import { useState } from 'react';
import CopyIcon from '../assets/copy.svg';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(32);
  const [uppercaseSelected, setUppercaseSelected] = useState(false);
  const [lowercaseSelected, setLowercaseSelected] = useState(false);
  const [numbersSelected, setNumbersSelected] = useState(false);
  const [symbolsSelected, setSymbolsSelected] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState(null);
  const MIN_RANGE = 4;
  const MAX_RANGE = 64;
  return (
    <form className="rounded-md space-y-3 ">
      {/* char length range picker */}
      <h2 htmlFor="passwordLength">Length: {passwordLength}</h2>
      <div className="bg-gray-2 py-6 px-4 flex justify-between items-center rounded-lg">
        <span>{MIN_RANGE}</span>
        <input
          type="range"
          name="passwordLength"
          id="passwordLength"
          className="w-full mx-4 accent-green-1"
          min={MIN_RANGE}
          max={MAX_RANGE}
          step={1}
          value={passwordLength}
          onInput={(e) => {
            setPasswordLength(e.target.value);
          }}
        />
        <span>{MAX_RANGE}</span>
      </div>

      <h2>Settings:</h2>

      {/* uppercase */}
      <div className="bg-gray-2 py-6 px-4 flex justify-between items-center rounded-lg">
        <h3 className="w-1/2">Include Uppercase</h3>
        {/* container for the checkbox, the slider and the button */}
        <label className="relative inline-block w-16 h-8">
          <input
            type="checkbox"
            name="uppercaseToggle"
            id="uppercaseToggle"
            className="opacity-0 w-0 h-0" // hidding the default checkbox
            value={uppercaseSelected}
            onChange={(e) => {
              setUppercaseSelected(e.target.checked);
            }}
          />
          {/*This is the button */}
          <span
            className={`absolute top-0 left-0 right-0 bottom-0 cursor-pointer ${
              uppercaseSelected ? 'bg-green-1' : 'bg-gray-500'
            }  rounded-full before:content-[attr(before)] before:absolute before:h-8 before:w-8 ${
              uppercaseSelected ? 'before:right-0 ' : 'before:left-0 '
            }before:bottom-0 before:bg-white before:rounded-full`}
          ></span>
        </label>
      </div>

      {/* lowercase */}
      <div className="bg-gray-2 py-6 px-4 flex justify-between items-center rounded-lg">
        <h3 className="w-1/2">Include Lowercase</h3>
        {/* container for the checkbox, the slider and the button */}
        <label className="relative inline-block w-16 h-8">
          <input
            type="checkbox"
            name="lowercaseToggle"
            id="lowercaseToggle"
            className="opacity-0 w-0 h-0" // hidding the default checkbox
            value={lowercaseSelected}
            onChange={(e) => {
              setLowercaseSelected(e.target.checked);
            }}
          />
          {/*This is the button */}
          <span
            className={`absolute top-0 left-0 right-0 bottom-0 cursor-pointer ${
              lowercaseSelected ? 'bg-green-1' : 'bg-gray-500'
            }  rounded-full before:content-[attr(before)] before:absolute before:h-8 before:w-8 ${
              lowercaseSelected ? 'before:right-0 ' : 'before:left-0 '
            }before:bottom-0 before:bg-white before:rounded-full`}
          ></span>
        </label>
      </div>

      {/* numbers */}
      <div className="bg-gray-2 py-6 px-4 flex justify-between items-center rounded-lg">
        <h3 className="w-1/2">Include Numbers</h3>
        {/* container for the checkbox, the slider and the button */}
        <label className="relative inline-block w-16 h-8">
          <input
            type="checkbox"
            name="numbersToggle"
            id="numbersToggle"
            className="opacity-0 w-0 h-0" // hidding the default checkbox
            value={numbersSelected}
            onChange={(e) => {
              setNumbersSelected(e.target.checked);
            }}
          />
          {/*This is the button */}
          <span
            className={`absolute top-0 left-0 right-0 bottom-0 cursor-pointer ${
              numbersSelected ? 'bg-green-1' : 'bg-gray-500'
            }  rounded-full before:content-[attr(before)] before:absolute before:h-8 before:w-8 ${
              numbersSelected ? 'before:right-0 ' : 'before:left-0 '
            }before:bottom-0 before:bg-white before:rounded-full`}
          ></span>
        </label>
      </div>

      {/* symbols */}
      <div className="bg-gray-2 py-6 px-4 flex justify-between items-center rounded-lg">
        <h3 className="w-1/2">Include Symbols</h3>
        {/* container for the checkbox, the slider and the button */}
        <label className="relative inline-block w-16 h-8">
          <input
            type="checkbox"
            name="symbolsToggle"
            id="symbolsToggle"
            className="opacity-0 w-0 h-0" // hidding the default checkbox
            value={symbolsSelected}
            onChange={(e) => {
              setSymbolsSelected(e.target.checked);
            }}
          />
          {/*This is the button */}
          <span
            className={`absolute top-0 left-0 right-0 bottom-0 cursor-pointer ${
              symbolsSelected ? 'bg-green-1' : 'bg-gray-500'
            }  rounded-full before:content-[attr(before)] before:absolute before:h-8 before:w-8 ${
              symbolsSelected ? 'before:right-0 ' : 'before:left-0 '
            }before:bottom-0 before:bg-white before:rounded-full`}
          ></span>
        </label>
      </div>

      {/* symbols */}

      <button className="py-6 px-4 w-full bg-gradient-to-r from-green-brightGreen via-green-middleGreen to-green-blueishGreen rounded-lg ">
        Generate Password
      </button>

      {/* output label */}

      <div className="bg-gray-2 py-6 px-4 flex justify-between items-center rounded-lg">
        {generatedPassword && (
          <>
            <p>Hello World</p>
            <button>
              <img
                src={CopyIcon}
                alt="Copy to clipboard"
                width={20}
                height={20}
              />
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default PasswordGenerator;

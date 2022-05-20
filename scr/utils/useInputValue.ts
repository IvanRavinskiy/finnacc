import {useState} from 'react';

export const useInputValue = (
  data: string,
  conditionFunc?: (newText: string) => void,
) => {
  const [inputValue, setInputValue] = useState(data);

  const onChangeInputValue = (newText: string) => {
    if (!conditionFunc || conditionFunc(newText)) {
      setInputValue(newText);
    }
  };

  return {inputValue, setInputValue, onChangeInputValue};
  // return [inputValue, setInputValue, onChangeInputValue];
};

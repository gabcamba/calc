import {useState} from 'react';

const Actions = () => {
  let [value, setValue] = useState('');
  let [result, setResult] = useState('');

  const onPressDelete = () => {
    let text = value.split('');
    text.pop();
    let string = text.join('');
    setValue(string);
  };

  const handleOperation = operation => {
    if (operation === 'c') {
      setValue('');
      setResult('');
      // setResult('')
    } else if (operation === '=') {
      //tawagin calculate fn
    } else if (operation === '⌫') {
      onPressDelete();
    } else {
      const display = value + operation;
      let newResult = result;
      try {
        let fixedOperation = display.split('×').join('*');
        fixedOperation = fixedOperation.split('÷').join('/');
        fixedOperation = fixedOperation.split(',').join('.');

        newResult = new String(eval(fixedOperation)).toString();
      } catch (e) {}
      setValue(display);
      setResult(newResult);
    }
  };

  return {
    handleOperation,
    onPressDelete,
    value,
    result,
  };
};

export default Actions;

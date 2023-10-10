import React from 'react';
import { diff, multiply, sum } from '../utils/MathToString';

const MathComponent = () => {
  const [num1, setNum1] = React.useState<number>(0);
  const [num2, setNum2] = React.useState<number>(0);
  const [selectedOperation, setSelectedOperation] =
    React.useState<string>('multiply');

  const [answer, setAnswer] = React.useState<string>('');
  return (
    <div>
      <div>
        <input
          id='num1'
          type='number'
          placeholder='Enter first number'
          value={num1}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNum1(+event.target.value)
          }
        />
        <select
          id='operation'
          value={selectedOperation}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedOperation(e.target.value)
          }
        >
          <option value='multiply'>*</option>
          <option value='sum'>+</option>
          <option value='diff'>-</option>
        </select>
        <input
          id='num2'
          type='number'
          placeholder='Enter second number'
          value={num2}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNum2(+event.target.value)
          }
        />
      </div>
      <div>
        <button
          id='calculate'
          onClick={() => {
            switch (selectedOperation) {
              case 'multiply':
                setAnswer(multiply(num1, num2));
                break;
              case 'sum':
                setAnswer(sum(num1, num2));
                break;
              case 'diff':
                setAnswer(diff(num1, num2));
                break;
              default:
                setAnswer('Invalid operation');
                break;
            }
          }}
        >
          Calculate
        </button>
      </div>
      <div>
        <p id='result'>{answer}</p>
      </div>
    </div>
  );
};

export default MathComponent;

import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

const Calculator = () => (
    <main className='calculator'>
        <Screen />
        <Keypad />
    </main>
)

export default Calculator;
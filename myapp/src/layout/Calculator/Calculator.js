import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0
    }
    render() {
        return (
            <main className='calculator'>
                <Screen />
                <Keypad />
            </main>
        )
    }
}

export default Calculator;
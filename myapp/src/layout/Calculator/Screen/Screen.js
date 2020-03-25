import React from 'react';
import ComputationScreen from './ComputationScreen/ComputationScreen';
import ResultScreen from './ResultScreen/ResultScreen';

const Screen = (props) => (
    <section className="screen">
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
)

export default Screen;
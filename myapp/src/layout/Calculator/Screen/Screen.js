import React from 'react';
import ComputationScreen from './ComputationScreen/ComputationScreen';
import ResultScreen from './ResultScreen/ResultScreen';

const Screen = () => (
    <section className="screen">
        <ResultScreen />
        <ComputationScreen />
    </section>
)

export default Screen;
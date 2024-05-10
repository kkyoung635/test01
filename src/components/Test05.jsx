import './Test05.scss';
import { useState } from 'react';
const Test05 = () => {
    const [isColor, setIsColor] = useState(false);
    const [score, setScore] = useState(50);

    const onColor = () => {
        setIsColor(!isColor);
    };
    const increment = () => {
        // setScore (안에는 함수가 들어갈 수 있다.)
        setScore(score + 1);
    };
    const decrement = () => {
        setScore(score - 1);
    };

    // div의 on, off 토글로
    return (
        <>
            <div className={`wrap ${isColor ? 'on' : 'off'}`}>
                <h2>backgroundColor : {isColor ? 'pink' : 'tomato'} </h2>
                <h2>점수 : {score} </h2>
                <p>
                    <button onClick={onColor}>배경바꾸기:true/false </button>
                    <button onClick={increment}>점수 증가</button>
                    <button onClick={decrement}>점수 감소</button>
                </p>
            </div>
        </>
    );
};

export default Test05;

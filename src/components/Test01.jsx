// import '../assets/css/reset.css';
import { useState } from 'react';
const Test01 = () => {
    const [color, setColor] = useState('lime');
    const changeColor1 = () => {
        setColor('pink');
    };
    const changeColor2 = () => {
        setColor('skyblue');
    };

    return (
        <>
            <div
                style={{
                    width: 400,
                    height: 100,
                    border: '1px solid #000',
                    textAlign: 'center',
                    fontSize: 40,
                    lineHeight: '100px',
                    margin: '20px auto',
                    backgroundColor: color,
                }}
            >
                color : {color}
            </div>
            <h3>bgColor</h3>
            <p>배경색 : pink - skyblue</p>
            <p style={{ textAlign: 'center' }}>
                <button onClick={changeColor1}>if문</button>
                <button onClick={changeColor2}>삼항연산자</button>
            </p>
        </>
    );
};
// 함수영역 + JSX 영역 클릭 이벤트 넣기 (복습)
export default Test01;

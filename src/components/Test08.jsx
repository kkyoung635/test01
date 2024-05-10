import { useState } from 'react';
import { useRef } from 'react';

const Test08 = () => {
    // const colorRef = useRef();
    const [color, setColor] = useState('black');
    const [txtColor, setTxtColor] = useState('black');

    // 복습하자. 버튼과 셀렉테는 연결되는 과정 이해가 안감

    const changeColor = (e) => {
        // setTxtColor(e.target.value);
        const { value } = e.target;
        setTxtColor(value);
    };
    const onView = () => {
        setColor(txtColor);
    };

    return (
        <div style={{ margin: 30 }}>
            <h2 style={{ color: color }}>color : {color}</h2>
            <select onChange={changeColor}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="beige">beige</option>
                <option value="pink">pink</option>
            </select>
            <p>
                1. onView 함수
                <br /> 2. txtColor 상태변수 생성
                <br /> 3. 확인 누르면 컬러 변경
            </p>
            <button onClick={onView}>확인</button>
        </div>
    );
};

export default Test08;

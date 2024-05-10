import { useState } from 'react';
import { useRef } from 'react';

const Test08 = () => {
    // const colorRef = useRef();
    const [color, setColor] = useState('black');
    const changeColor = (e) => {
        setColor(e.target.value);
    };

    return (
        <div style={{ margin: 30 }}>
            <h2 style={{ color: color }}>color : {color}</h2>
            <select onChange={changeColor} name="" id="">
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="beige">beige</option>
                <option value="pink">pink</option>
            </select>
        </div>
    );
};

export default Test08;

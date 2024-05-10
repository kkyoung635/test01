import './Test04.scss';
import { useState } from 'react';

const Test04 = () => {
    const [isClass, setIsClass] = useState(false);

    const add = () => {
        setIsClass(true);
    };
    const remove = () => {
        setIsClass(false);
    };
    const toggle = () => {
        setIsClass(!isClass);
    };

    return (
        <>
            <div className="con-box">
                <p>오늘 불금~~~</p>
                <p className="on1">오늘 불금~~~</p>
                <p className="on2">오늘 불금~~~</p>
                <p className="on on1">오늘 불금~~~</p>
                <hr />
                <br />
                <br />
                <h2>위와 동일한 결과, 삼항 이용</h2>
                {/* 클래스 네임은 && 사용하지 않기 */}
                <p className={isClass ? 'on1' : ''}>오늘 불금~~~</p>
                <p className={isClass ? 'on2' : ''}>오늘 불금~~~</p>
                <p className={`on ${isClass ? 'on1' : ''}`}>오늘 불금~~~</p>
                <div>
                    <button onClick={add}>classList.add</button>
                    <button onClick={remove}>classList.remove</button>
                    <button onClick={toggle}>classList.toggle</button>
                </div>
            </div>
        </>
    );
};

export default Test04;

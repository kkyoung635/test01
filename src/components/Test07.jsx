import { useRef } from 'react';
import { useState } from 'react';

const Test07 = () => {
    const [userid, setUserId] = useState('');
    const idRef = useRef();

    const changeInput = (e) => {
        // 현재 이벤트가 실행된 태그의~ e.target
        // setUserId(e.target.value);
        // 구조분해 할당 가능
        const { value } = e.target;
        setUserId(value);
    };
    const onReset = () => {
        setUserId('');
        idRef.current.focus();
    };

    return (
        <div style={{ margin: 30 }}>
            {/* input의 내용(값)을 추출해서 활용하고자 할때 onInput(이벤트)을 사용하고 함수 실행 */}
            <input
                type="text"
                placeholder="값 입력"
                onInput={changeInput}
                ref={idRef}
                value={userid}
            />
            <button onClick={onReset}>초기화</button>
            <hr />
            <p>onChange, onInput</p>
            <h2 style={{ fontSize: '24px' }}>입력 값 : {userid}</h2>
        </div>
    );
};

export default Test07;

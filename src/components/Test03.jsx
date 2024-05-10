import { useState } from 'react';

const Test03 = () => {
    const [isShow, setIsShow] = useState(false);
    // const [isD, setIsD] = useState(true);
    const onShow = () => {
        setIsShow(true);
    };
    const onHide = () => {
        setIsShow(false);
    };
    const onToggle = () => {
        setIsShow(!isShow);
    };
    // jsx div[0] : 삼항
    // jsx div[1] : && 논리곱으로 하기
    // 삼항연산자 사용해서 toggle 버튼의 보이기/숨기기 텍스트 바꾸기
    return (
        <>
            <p
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center',
                }}
            >
                <button onClick={onShow}>show</button>
                <button onClick={onHide}>hide</button>
                <button onClick={onToggle}>{isShow ? 'hide' : 'show'}</button>
            </p>
            <hr />
            <div
                style={{
                    width: 400,
                    height: 100,
                    border: '1px solid #000',
                    textAlign: 'center',
                    fontSize: 40,
                    lineHeight: '100px',
                    margin: '20px auto',
                    display: isShow ? 'block' : 'none',
                }}
            >
                1st div
            </div>
            <div
                style={{
                    width: 400,
                    height: 100,
                    border: '1px solid #000',
                    textAlign: 'center',
                    fontSize: 40,
                    lineHeight: '100px',
                    margin: '20px auto',
                    display: (isShow === true && 'block') || 'none',
                }}
            >
                2nd div
            </div>
        </>
    );
};

export default Test03;

import { useRef } from 'react';

const Test06 = () => {
    const ref1 = useRef(null);
    // 초기값이 null 이면 생략가능
    const onTest = () => {
        ref1.current.style.color = 'hotpink';
        ref1.current.style.fontSize = '24px';
        ref1.current.style.width = '200px';
        ref1.current.style.backgroundColor = '#f5f5f5';
        ref1.current.style.textAlign = 'center';
        ref1.current.style.borderRadius = '20px';
        ref1.current.style.margin = '20px';
        ref1.current.style.padding = '20px';
    };

    return (
        <>
            <h2 ref={ref1}>useRef</h2>
            <p>
                <button onClick={onTest}>confirm</button>
            </p>
        </>
    );
};
/*
이전 공식문서 (수업은 이전 공식문서를 참고함)
const refContainer = useRef(initialValue);
const 참조 = useRef(초기값);

형식 1) 값을 유지
const refContainer = useRef(null);
const refContainer = useRef();

<input ref={refContainer} type="text" />
참조된 값을 변경 또는 가져올 경우
refContainer.current.xxx??


형식 2) 
const no = useRef(숫자);
const no = useRef(1); - 고유번호 생성 (화면단)
                        sql 서버 - 고유번호가 자동 생성된다.


현재 공식문서
const ref = useRef(initialValue)

직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능합니다.
useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능합니다.

공식문서 내용
useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다
useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 "상자"와 같습니다.
*/
export default Test06;

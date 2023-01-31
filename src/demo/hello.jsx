/*
 * @Author: ryyyyy
 * @Date: 2023-01-30 17:30:56
 * @LastEditors: ryyyyy
 * @LastEditTime: 2023-01-31 14:00:37
 * @FilePath: /first-vite/src/demo/hello.jsx
 * @Description: 
 * 
 */
import { useLayoutEffect, useRef } from 'react';
import reactLogo from '../assets/react.svg';

const HelloDemo = props => {
    const imgRef = useRef(null);

    useLayoutEffect(() => {
        const imgUrl = new URL('../assets/react.svg', import.meta.url).href
        console.log(reactLogo, imgUrl, 'logo');
        imgRef.current.src = reactLogo;
    }, [])
    return <div>
        <h1>hello, vite demo</h1>
        <img ref={imgRef} />
    </div>
}

export default HelloDemo;
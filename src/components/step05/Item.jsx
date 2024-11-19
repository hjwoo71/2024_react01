import React from 'react';

function Item({name , isPacked}) {
/*     if (isPacked){
        return <li>{name} ✅ </li>
    } else{
        return <li>{name}  </li>
    } */
 /*    if (isPacked){
        return <li>{name} ✅ </li>
    } else{
        return null;
    } */

    // && 연산자
    // 참이면 ✅ 표시, 거짓이면 표시하지 않음
    /* return(
        <li>{name}{isPacked && '✅'}</li>
    ); */

    let itemContent = name ;
    if(isPacked){
        itemContent = name + "✅";
    }
    return(
       <li>{itemContent}</li>
    );
}

export default Item;
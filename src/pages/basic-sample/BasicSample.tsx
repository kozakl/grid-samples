import * as React from 'react';
import * as style from './BasicSample.pcss';

export default function BasicSample()
{
    return (
        <div className={style.basic}>
            <div className={style.element1}>1</div>
            <div className={style.element2}>2</div>
            <div className={style.element3}>3</div>
            <div className={style.element4}>4</div>
            <div className={style.element5}>5</div>
            <div className={style.element6}>6</div>
            <div className={style.element7}>7</div>
        </div>
    );
}

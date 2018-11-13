import * as React from 'react';
import * as style from './AlignContentSample.pcss';

export default function AlignContentSample()
{
    return (
        <div className={style.alignContent}>
            <div className={style.element1}>1</div>
            <div className={style.element2}>2</div>
            <div className={style.element3}>3</div>
            <div className={style.element4}>4</div>
            <div className={style.element5}>5</div>
            <div className={style.element6}>6</div>
        </div>
    );
}

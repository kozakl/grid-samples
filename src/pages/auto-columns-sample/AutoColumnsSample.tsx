import * as React from 'react';
import * as style from './AutoColumnsSample.pcss';

export default function AutoColumnsSample()
{
    return (
        <>
            <div className={style.content1}>
                <div className={style.element1}>1</div>
                <div className={style.element2}>2</div>
                <div className={style.element3}>3</div>
                <div className={style.element4}>4</div>
                <div className={style.element5}>5</div>
            </div>
            <div className={style.content2}>
                <div className={style.element1}>1</div>
                <div className={style.element2}>2</div>
                <div className={style.element3}>3</div>
                <div className={style.element4}>4</div>
                <div className={style.element5}>5</div>
            </div>
        </>
    );
}

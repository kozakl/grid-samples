import * as React from 'react';
import * as style from './AreasSample.pcss';

export default function AreasSample()
{
    return (
        <div className={style.areas}>
            <div className={style.header}>HEADER</div>
            <div className={style.menu}>MENU</div>
            <div className={style.content}>CONTENT</div>
            <div className={style.footer}>FOOTER</div>
        </div>
    );
}

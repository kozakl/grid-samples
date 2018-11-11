import * as React from 'react';
import * as style from './LinesNameSample.pcss';

export default function LinesNameSample()
{
    return (
        <div className={style.content}>
            <div className={style.header}>HEADER</div>
            <div className={style.menu}>MENU</div>
            <div className={style.container}>CONTAINER</div>
            <div className={style.footer}>FOOTER</div>
        </div>
    );
}

import * as React from 'react';
import * as style from './LinesNameSample.pcss';

export default function LinesNameSample()
{
    return (
        <div className={style.linesName}>
            <div className={style.header}>HEADER</div>
            <div className={style.menu}>MENU</div>
            <div className={style.content}>CONTENT</div>
            <div className={style.footer}>FOOTER</div>
        </div>
    );
}

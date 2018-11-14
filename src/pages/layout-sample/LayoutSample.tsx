import * as React from 'react';
import * as style from './LayoutSample.pcss';

export default function LayoutSample()
{
    return (
        <div className={style.layout}>
            <div className={style.header}>
                <div>HOME</div>
                <div>SEARCH</div>
                <div>LOGOUT</div>
            </div>
            <div className={style.menu}>MENU</div>
            <div className={style.content}>CONTENT</div>
            <div className={style.footer}>FOOTER</div>
        </div>
    );
}

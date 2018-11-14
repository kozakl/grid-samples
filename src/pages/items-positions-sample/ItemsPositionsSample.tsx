import * as React from 'react';
import * as style from './Content12Col.pcss';

export default function ItemsPositionsSample()
{
    return (
        <div className={style.itemsPositions}>
            <div className={style.header}>HEADER</div>
            <div className={style.menu}>MENU</div>
            <div className={style.content}>CONTAINER</div>
            <div className={style.footer}>FOOTER</div>
        </div>
    );
}

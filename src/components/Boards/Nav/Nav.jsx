import React from "react"
import style from './Nav.module.css'
import { HandySvg } from 'handy-svg'
import Plus from '../../../img/plus.svg'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.box}>
                <div className={style.myBoardsWrapper}>
                    <div className={style.myBoards}>
                        <a href="/#">Мои доски</a>
                    </div>
                    <div className={style.plus}>
                        <HandySvg src={Plus} width='15' height='15' />
                    </div>
                </div>
                <div className={style.board}>
                    <div className={style.preview}></div>
                    <div className={style.boardName}><a href="/#">доска 1</a></div>
                </div>
            </div>
            <div>2</div>
            <div>3</div>
        </nav>
    )
}

export default Nav
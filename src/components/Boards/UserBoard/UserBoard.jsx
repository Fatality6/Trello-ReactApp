import React, { useState } from "react"
import style from './UserBoard.module.css'
import { HandySvg } from 'handy-svg'
import Plus from '../../../img/plus.svg'
import { Dialog } from "@headlessui/react"

const UserBoard = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <div>
 
            <Dialog open={isOpenModal} onClose={() => { setIsOpenModal(false) }}>
                <div className={style.bgModal}>
                    <Dialog.Panel className={style.popup}>
                        <button className={style.btnX} onClick={() => { setIsOpenModal(false) }} >X</button>
                        <div className={style.headerModal}>
                            <div><h2>логику сервера</h2></div>
                            <div>
                                <p>в колонке <a href="/#" >Нужно сделать</a></p>
                            </div>
                        </div>
                        <button>подписаться</button>
                        <div className={style.discriptionModal}>
                            <h3>Описание</h3>
                            <div>
                                <p>Настроить server.js</p>
                            </div>
                        </div>
                        <div className={style.commentModal}>
                            <h3>Действия</h3>
                            <div>
                                <textarea placeholder="напишите комментарий"></textarea>
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>

            <div className={style.userBoardWrapper}>
                <div className={style.boardName}>доскa 1</div>
                <div className={style.cards}>
                    <div className={style.card}>Нужно сделать
                        <div className={style.cardItem}>
                            <div className={style.addCardWrapper} onClick={() => { setIsOpenModal(true) }}>
                                <span className={style.itemText}>логику сервера</span>
                            </div>
                        </div>
                        <div className={style.cardItem}>
                            <div className={style.addCardWrapper}>
                                <span className={style.itemText}>логику приложения</span>
                            </div>
                        </div>
                        <div className={style.addCard}>
                            <div className={style.addCardWrapper}>
                                <span><HandySvg src={Plus} className={style.plus} width='15' height='15' /></span>
                                <span className={style.addCardText}>Добавить карточку</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.card}>В процессе</div>

                    <div className={style.card}>Готово</div>
                </div>
            </div>
        </div>
    )
}

export default UserBoard
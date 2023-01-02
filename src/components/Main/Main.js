import React from 'react'
import style from './main.module.css'
import logo from './../../img/logo.png'
import { NavLink } from 'react-router-dom'

export default function Main() {

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (<>
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img src={logo} alt='logo' />
        </div>
        <div className={style.href}>Возможности</div>
        <div className={style.href}>Решения</div>
        <div className={style.href}>Планы</div>
        <div className={style.href}>Цены</div>
        <div className={style.href}>Ресурсы</div>
        <div className={style.href} onClick={logout}>Выйти</div>
        <NavLink to='/boards'>
        <button className={style.btn}>Перейти к вашим доскам</button>
        </NavLink>
      </div>
    </div>
    <div className={style.bg}>
      <div className={style.content}>
        <div className={style.text}>
          <h1>Trello помогает собрать всех сотрудников, задачи и инструменты в одном месте</h1>
          <p>Объедините все в одном месте, даже если участники вашей команды рассеяны по миру.</p>
        </div>
      </div>
    </div>
    <div className={style.footer}>FOOTER</div>
  </>
  );
}
import React from 'react'
import style from './boards.module.css'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import UserBoard from './UserBoard/UserBoard'


const Boards = () => {
  return (<div className={style.appWrapper}>
    <Header />
    <Nav />
    <div className={style.appContent}>
      <UserBoard />
    </div>
  </div>
  );
}

export default Boards
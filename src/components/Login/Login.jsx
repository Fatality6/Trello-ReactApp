import React, { useState } from 'react'
import { ApiLogin } from './API'
import style from './login.module.css'
import logo from './../../img/logo.png'
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await ApiLogin({ username, password })
    if (response.resultCode === '0') {
      setToken(response.token)
      window.location.reload()
    } else {
      alert(response.message)
    }
  }

  return (
    <div className={style.login}>
      <div className={style.logo}>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Ник</p>
            <input name='nik' type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Пароль</p>
            <input name='pass' type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div className={style.submit}>
            <button type="submit">Войти</button>
          </div>
        </form>
        <div className={style.submit}>
            <button className={style.registration} onClick={()=>navigate("/registration")}>Регистрация</button>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { ApiRegistration } from './API'
import style from './login.module.css'
import logo from './../../img/logo.png'
import { useNavigate } from "react-router-dom";

export default function Registration() {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await ApiRegistration({ username, password })
        if (response.resultCode === '0') {
            alert('Вы успешно зарегистрированы, выполните вход')
            navigate('/')
        } else {
            alert(response.message)
        }
    }

    return (
        <div className={style.login}>
            <div className={style.logo}>
                <img src={logo} alt='logo' />
            </div>
            <span><h2>Регистрация</h2></span>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Введите имя</p>
                        <input name='nik' type="text" onChange={e => setUserName(e.target.value)} />
                    </label>
                    <label>
                        <p>Придумайте пароль</p>
                        <input name='pass' type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div className={style.submit}>
                        <button type="submit">Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
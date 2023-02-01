import React from 'react';

export default function Login() {
    return(
    <div className='container4'>
        <div className='login-container'>
            <div className='login-header'>
                <p className='plogin'>Вход в аккаунт</p>
                <img src='./assets/photos/rectangle.svg'/>
            </div>
            <div className='login-inputs'>
                <input className='login-input1' placeholder='Телефон'/>
                <input className='login-input2' placeholder='Пароль'/>
            </div>
            <div className='login-buttons'>
                <button className='login-btn1'><p className='plogin-button1'>Зарегистрироваться</p></button>
                <button className='login-btn2'><p className='plogin-button2'>Войти в аккаунт</p></button>
            </div>
        </div> 
    </div>
    )
}
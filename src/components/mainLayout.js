import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Main() {
  let navigate = useNavigate();
  let [showLink, setShowLink] = useState(true)
  let [showLogin, setShowLogin] = useState(true)


  function navigateToLogin() {
    navigate('/login')
  }

  function navigateToAdmin() {
    navigate('/admin')
  }

  function navigateOnMain() {
    navigate('/')
  }

  function navigateToRegister() {
    navigate('/register')
  }

  function navigateToCard2() {
    navigate('/secondcard')
  }

  function navigateToCard3() {
    navigate('/thirdcard')
  }

  function navigateToCard4() {
    navigate('/fourthcard')
  }

  function navigateToCard5() {
    navigate('/fifthcard')
  }

  function navigateToCard6() {
    navigate('/sixthcard')
  }

  function clickHandler(e) {
    e.preventDefault()
    setShowLink(!showLink)
  }

  function clickHandler2(e) {
    e.preventDefault()
    setShowLogin(!showLogin)
  }



  return (
    <div>
      <header>
        <div className='container flex'>
          <div className='header_lefside'>
            <img className='logo' src="./assets/photos/Logo.png" alt='foto' onClick={navigateOnMain}/>
            <nav>
              <div className='firstLinks'>
                <a href='' className='LinkNav1' onClick={clickHandler}>Каталог</a>
                <img className='navvector' src='./assets/photos/catalog vector.svg'/>
                {showLink}
                {!showLink && 
                <div className='subLinks'>
                  <a className='link1' href='' onClick={navigateToCard6}>Готовые миксы</a>
                  <a className='link2' href='' onClick={navigateToCard3}>Отдельные виды кормов</a>
                  <a className='link3' href='' onClick={navigateToCard2}>Кормушки</a>
                  <a className='link4' href='' onClick={navigateToCard4}>Готовые комплекты</a>
                  <a className='link5' href='' onClick={navigateToCard5}>Аксессуары и другое</a>
                </div>}
              </div>
              <a href='' className='LinkNav2'>О проекте</a>
              <a href='' className='LinkNav3'>Птицы</a>
              <a href=''className='LinkNav4'>Пожертвования</a>
            </nav>
          </div>
          <div className='header_rightside'>
              <div className='header_rightside_up'>
                <img src='./assets/photos/phone vector.svg'/>
                <p className='telnumber'>8 920 999 43 50</p>
                <img className='vectorheaderleftside' src='./assets/photos/Buy.svg' onClick={navigateToAdmin}/>
                <img onClick={clickHandler2} className='click-on-login' src='./assets/photos/account.svg'/>
                {showLogin}
                {!showLogin &&
                <div className='loginLinks'>
                  <button className='loginButton' onClick={navigateToLogin}><p className='p-go-login'>Войти в аккаунт</p></button>
                  <button className='registerButton' onClick={navigateToRegister}><p className='p-go-register'>Зарегистрироваться</p></button>
                </div>}
              </div>
              <div className='header_rightside_down'>
                <input className='inputheader' placeholder='Поиск'/>
                <img className='vectorheaderrightside' src='/assets/photos/Search.svg'/>
              </div>
          </div>  
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
      

      <div className='likefooter'>
        <div className='container2 flex'>
          <div className='likefooter_leftside'>
            <h1 className='donate'>Пожертвуйте на благо проекта</h1>
            <div className='checkboxandtexts'>
              <input className='checkboxfooter' type='checkbox'/>
              <p className='pcheckbox'>Единоразовая выплата</p>
              <input className='checkboxfooter' type='checkbox'/>
              <p className='pcheckbox'>Ежемесячные выплаты</p>
            </div>
            <div className='inputandbutton'>
              <input className='inputfooter' placeholder='Введите сумму'/>
              <button className='buttonfooter'>Пожертвовать</button>
            </div>
          </div>
          <div className='likefooter_rightside'>
            <img className='footerimg' src='./assets/photos/iphone.png'/>
          </div>
        </div>

      </div>

      <footer>
        <div className='container3'>
          <p className='pfooter'>Оплата</p>
          <p className='pfooter2'>Доставка</p>
          <img className='footersvg1' src='./assets/photos/Vk.svg'/>
          <img className='footersvg2' src='./assets/photos/insta.svg'/>
          <img className='footersvg3' src='./assets/photos/whitephonefooter.svg'/>
          <p className='footerphone'>8 920 999 43 50</p>
        </div>
      </footer>
    </div>
  );
}

export default Main;
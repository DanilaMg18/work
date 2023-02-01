import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Main() {
  let navigate = useNavigate();

  function navigateToLogin() {
    navigate('/login')
  }

  return (
    <div>
      <header>
        <div className='container flex'>
          <div className='header_lefside'>
            <img className='logo' src="./assets/photos/Logo.png" alt='foto'/>
            <nav>
              <Link className='LinkNav1'>Каталог</Link>
              <img className='navvector' src='./assets/photos/catalog vector.svg'/>
              <Link className='LinkNav2'>О проекте</Link>
              <Link className='LinkNav3'>Птицы</Link>
              <Link className='LinkNav4'>Пожертвования</Link>
            </nav>
          </div>
          <div className='header_rightside'>
              <div className='header_rightside_up'>
                <img src='./assets/photos/phone vector.svg'/>
                <p className='telnumber'>8 920 999 43 50</p>
                <img className='vectorheaderleftside' src='./assets/photos/Buy.svg'/>
                <img onClick={navigateToLogin} className='click-on-login' src='./assets/photos/account.svg'/>
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
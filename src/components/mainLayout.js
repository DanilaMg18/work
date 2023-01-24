import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Main() {
  return (
    <div>
      <header>
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
              <img src='./assets/photos/account.svg'/>
            </div>
            <div className='header_rightside_down'>
              <input className='inputheader' placeholder='Поиск'/>
              <img className='vectorheaderrightside' src='/assets/photos/Search.svg'/>
            </div>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>

      <div className='likefooter'>
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

        </div>
      </div>

      <footer>

      </footer>
    </div>
  );
}

export default Main;
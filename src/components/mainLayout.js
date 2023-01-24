import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <header>
        <div className='header_lefside'>
          <img src="./photos/Logo.png" alt='foto'/>
          <nav>
            <Link className='LinkNav'>Каталог</Link>
            <Link className='LinkNav'>О проекте</Link>
            <Link className='LinkNav'>Птицы</Link>
            <Link className='LinkNav'>Пожертвования</Link>
          </nav>
        </div>
        <div className='header_rightside'>
            <div className='header_rightside_up'>
              <img src='./photos/phone vector.svg'/>
              <p>8 920 999 43 50</p>
            </div>
        </div>
      </header>
      <main>
        
      </main>
      <footer></footer>
    </div>
  );
}

export default Main;
import { Link } from "react-router-dom"

export default function Donate() {
    return(
        <div className="container6">
            <div className="donate-go-back">
                <img src="./assets/photos/Card2vectorback.svg"/>
                <Link className='goBack' to='/'>Назад</Link>
            </div>
            <div className="block1donate">
                <p className="donatep1">Пожертвуйте в наш фонд</p>
                <div className="donate-checkboxes">
                    <input className="checkboxDonate1" type='checkbox'/>
                    <p className='donatep2'>Единоразовая выплата</p>
                    <input className="checkboxDonate2" type='checkbox'/>
                    <p className='donatep2'>Ежемесячные выплаты</p>
                </div>
                <div className="donate-input-btn">
                    <input className="inputDonate1" placeholder="Введите сумму"/>
                    <button className="btnDonate1"><p className="pbtndonate">Пожертвовать</p></button>
                </div>
            </div>
            <div className="block2donate">
                <p className="donatepblock2">О нашем фонде</p>
                <p className="donatep2block2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Amet risus nullam eget felis eget nunc lobortis. Tortor condimentum lacinia quis vel eros donec
                ac odio. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Blandit turpis cursus in hac habitasse
                platea dictumst. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan lacus vel facilisis volutpat est
                velit. Lacus vel facilisis volutpat est velit egestas dui id. Mi ipsum faucibus vitae aliquet. Lorem ipsum dolor sit amet
                consectetur adipiscing elit. Sed odio morbi quis commodo. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus
                est. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Faucibus a pellentesque sit amet. Adipiscing
                bibendum est ultricies integer quis auctor elit sed vulputate.</p>
            </div>
        </div>
    )
}
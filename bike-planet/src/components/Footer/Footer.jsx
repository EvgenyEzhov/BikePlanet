import './Footer.less';
import Tg from './images/telegramm.png';
import Vk from './images/vk.png';
import Inst from './images/instagram.png';
import Ws from './images/whatsapp.png';
import Arrow from './images/arrow.png'; 


function Footer() {

    return(
        <div className='footer'>
            <div className='footerLogo'>BIKE PLANET</div>
            <div className='footerNav'>
                <ul className='footerMenu'><p className='headline'>Магазин Bike Planet</p>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>Акции</li>
                        <li>Доставка</li>
                        <li>Контакты</li>
                </ul>
                <ul className='socialNetwork'><p className='headline'>Мы в социальных сетях</p>
                        <li><img src={Tg} alt='Telegram'></img>Telegram</li>
                        <li><img src={Vk} alt=''></img> Вконтакте</li>
                        <li><img src={Inst} alt=''></img> Instagram</li>
                        <li><img src={Ws} alt=''></img> WhatsApp</li>
                </ul>
            </div>
            <a className='backButton' href='#header'><img src={Arrow} alt=''></img></a>
            <div className='footerInfo'>
                <input type="button" className='orderCall' value="Заказать звонок"/>
                <p className='phone'>+98 (765) 432-10-98</p>
                <p>bike-planet-site.ru</p>
            </div>
        </div>
    );
}

export default Footer;
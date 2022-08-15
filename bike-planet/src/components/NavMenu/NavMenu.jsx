import './NavMenu.less'

function NavMenu() {
    return (
        <div className='navItems'>
            <div className='iconMenu'></div>
                <nav>
                    <ul className='navMenu'>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Акции</li>
                    <li>Доставка</li>
                    <li>Контакты</li>
                    </ul>
                </nav>
            <div className='search'>
                <input type='text' placeholder='Поиск по товарам' className='searchButton'></input>
            </div>
            <div className='navIcon'>
                <div className='heart'></div>
                <div className='bag'></div>
                <div className='account'></div>
            </div>
        </div>
    );
}

export default NavMenu;
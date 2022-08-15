import './Header.less';

function Header() {

  return (
    <div id="header" className="header">
        <div className="logo">BIKE PLANET</div>
        <div className="logoContact">
          <div className="logoPhone">+98 (765) 432-10-98</div>
          <input type="button" className='buttonInHeader'  value="Связаться"/>        
        </div>     
    </div>
  );
}

export default Header;
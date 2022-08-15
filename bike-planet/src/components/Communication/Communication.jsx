import './Communication.less'

function Communication() {

    return(
        <div className='mainBlock'>
            <div className='mainInfo'>
                <div className='subscribeBlock'>
                    <input type='text' placeholder='Введите e-mail' className='emailButton'></input>
                    <input type="button" className='subscribeButton'  value="Подписаться"/>
                </div>
                <div className='subscribeInfo'>
                    <h2>Подпишись на рассылку</h2>
                    <p>узнай первым о новинках и скидках</p>
                </div>
            </div>
        </div>
    );
}

export default Communication;
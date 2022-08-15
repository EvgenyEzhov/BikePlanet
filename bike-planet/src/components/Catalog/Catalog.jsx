import './Catalog.less';

function Catalog() {

    return(
        <div id='productPrewiev' className='productPrewiev'>
            <h2 className='productCategory'>Категории товаров</h2>
            <div className='productItems'>
                <div className='productRow1'>
                    <div className='bikes'>
                        <input type="button" className='buttonProduct'  value="Велосипеды"/>
                    </div>
                </div>
                <div className='productRow2'>
                    <div className='accessories'>
                        <input type="button" className='buttonProduct'  value="Аксессуары"/>
                    </div>
                    <div className='equipment'>
                        <input type="button" className='buttonProduct'  value="Экипировка"/>
                    </div>
                </div>
                <div className='productRow3'>
                    <div className='backpacks'>
                        <input type="button" className='buttonProduct'  value="Рюкзаки"/>
                    </div>
                    <div className='sportswear'>
                        <input type="button" className='buttonProduct'  value="Спортивная одежда"/>
                    </div>
                </div>              
            </div>
        </div>
    );
}

export default Catalog;
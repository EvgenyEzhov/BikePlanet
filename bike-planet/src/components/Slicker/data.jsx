import Cube from './images/cube.png'
import Merida from './images/merida.jpeg'
import Stels from './images/stels.jpeg'

export const dataSpecialBike = [
    {
        id: 1,
        title: 'Cube aim pro 29',
        description:'Проверенная временем трансмиссия Shimano с 24-мя передачами, облегченная рама из алюминиевого сплава, жесткие и надежные колёса на двойных ободах, а также дисковые гидравлические тормоза – всё это работает в любых условиях и гарантирует безопасное вождение в любую погоду. Теперь данная модель и в нашем магазине!',
        product_description: 'Велосипед Cube Aim Pro 29 (2021) Green',
        image: <img src={Cube} alt=''/>,
        old_price: '52 590',
        new_prise: '49 900'             
    },
    {
        id: 2,
        title: 'REACTO TRACK',
        description:'REACTO TRACK получил признание как недорогой и крайне эффективный билет в мир трековых гонок и зимних тренировок на велотреке. Рама имеет в основе конструкцию, во многом повторяющую завоевавший множество наград и совершивший революцию в аэродинамике REACTO III, адаптированную под нужды трековых дисциплин. ',
        product_description: 'Велосипед REACTO TRACK LIMITED Black (2021)',
        image: <img src={Merida} alt=''/>,
        old_price: '120 899',
        new_prise: '105 990'                                  
    },
    {
        id: 3,
        title: 'Adrenalin D 27.5" V010',
        description:'Хардтейл на широких покрышках для езды в стиле кросс-кантри с оборудованием любительского класса Shimano, 24 скорости, легкая алюминиевая рама, амортизационная вилка SR Suntour XCM HLO, двойные алюминиевые обода, дисковые гидравлические тормоза Shimano. Подходит для активной езды по различным дорогам и пересеченной местности.',
        product_description: 'Adrenalin D 27.5" V010 Gray (2021)',
        image: <img src={Stels} alt='' />,
        old_price: '45 990',
        new_prise: '39 999'                                    
    }
];


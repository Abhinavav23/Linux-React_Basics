import { Mobile } from "../Mobile"

export const ProductList = (props) => {

    // api call
    const mobileList = [
        {
            company: 'apple',
            model: 'iphone 14',
            price: 80000,
            color: 'black',
            screenSize: '6.6',
            ram: ['4gb', '6gb'],
            rating: '4.7',
            inStock: true
        },
        {
            company: 'apple',
            model: 'iphone 13',
            price: 60000,
            color: 'white',
            screenSize: '6.2',
            ram: ['3gb', '4gb'],
            rating: '4.6',
            inStock: false
        },
        {
            company: 'samsung',
            model: 'galaxy',
            price: 50000,
            color: 'gold',
            screenSize: '6.75',
            ram: ['4gb', '6gb'],
            rating: '4.5',
            inStock: true
        },
        {
            company: 'apple',
            model: 'iphone 13',
            price: 60000,
            color: 'white',
            screenSize: '6.2',
            ram: ['3gb', '4gb'],
            rating: '4.6',
            inStock: false
        },
        {
            company: 'samsung',
            model: 'galaxy',
            price: 50000,
            color: 'gold',
            screenSize: '6.75',
            ram: ['4gb', '6gb'],
            rating: '4.5',
            inStock: true
        },
        {
            company: 'apple',
            model: 'iphone 13',
            price: 60000,
            color: 'white',
            screenSize: '6.2',
            ram: ['3gb', '4gb'],
            rating: '4.6',
            inStock: false
        },
        {
            company: 'samsung',
            model: 'galaxy',
            price: 50000,
            color: 'gold',
            screenSize: '6.75',
            ram: ['4gb', '6gb'],
            rating: '4.5',
            inStock: true
        },
        {
            company: 'apple',
            model: 'iphone 13',
            price: 60000,
            color: 'white',
            screenSize: '6.2',
            ram: ['3gb', '4gb'],
            rating: '4.6',
            inStock: false
        },
        {
            company: 'samsung',
            model: 'galaxy',
            price: 50000,
            color: 'gold',
            screenSize: '6.75',
            ram: ['4gb', '6gb'],
            rating: '4.5',
            inStock: true
        }
    ]
    // console.log(props.direction);
    // const dir = props.direction === 'col' ? 'column' : 'row';

    let no= Math.random();
    console.log(no);

    
    const listStyle = {
        display: 'flex', 
        flexDirection: props.direction === 'col' ? 'column' : 'row', 
        justifyContent:'center',
        flexWrap: 'wrap'
    }

    
    // className = 'main spacing'
    return(<div className={`${props.section} spacing`}>
    <h3 style={{textAlign: 'center', color: '#fff'}}>Mobile</h3>
        <div style={listStyle}>
           {
            mobileList.map((mobile, no) => {
                return <Mobile 
                company={mobile.company}
                model={mobile.model}
                price={mobile.price}
                color={mobile.color}
                rating={mobile.rating}
                inStock={mobile.inStock}
                ram={mobile.ram}
                theme={ no%2? 'dark' : 'light'}
                />
            })
           }
        </div>
    
    </div>)
}

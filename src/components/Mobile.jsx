

export function Mobile(props){
    console.log(props);
    // const firstRam = props.ram[0]
    let value;

    if(props.instock){
        value = 'available'
    } else{
        value = 'not available'
    }
    
    return (
        <section>
            <h3>Company: {props.company}</h3>
            <div>Model: {props.model}</div>
            <div>Screen Size: 6.5 inch</div>
            <div>Price: {props.price}</div>
            <div>Color: {props.color}</div>
            <div>Rating: {props.rating}</div>
            <div>In Stock: {props.instock ? 'available': 'Not available' } </div>
            <div>Ram: {props.ram}</div>
            {/* <div>SellerName: {props.sellerInfo.name}</div>
            <div>Seller Address: {props.sellerInfo.address.city}</div>
            <div>Seller Address: {props.name}</div> */}
            <hr />
        </section>
    )
}


// props: arguments passed to a react component

// function add(a,b){
//     return a+b
// }

// let a = 2
// add(a,3) //---> 5
// add(4,5) // ---> 9


// const calculate = function(){

// }

// const calculate1 = () => {

// }

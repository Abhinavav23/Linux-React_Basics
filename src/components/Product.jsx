export function Product(){
    let product;
    let chosenProduct ='appliances';

    // conditional rendering of element in JSX
    // using if else conditions
    // switch case statements 
    // ternary 

    if(chosenProduct === 'clothing'){
        product = <h3>this is a clothing product</h3>
    } else if(chosenProduct === 'appliances'){
        product = <h3>this is a appliance product</h3>
    } else{
        product = <h3>Nothing choosed</h3>
    }

    console.log('product', product);
    console.log('chosenProduct', chosenProduct);

    let name = 'Abhinav'
    return (
        <div>
            <h3>Product</h3>
            {product}
        </div>
    )
}

// diff between '==' and '==='
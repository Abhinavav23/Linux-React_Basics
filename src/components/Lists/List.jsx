export function List(){
    // let arr = []
    // for(let i = 0; i<10; i++){
    //     arr.push( <div>This is product {i}</div>)
    // }
    // console.log(arr);

    const arr = [10,2,3,4,5,6,7];
    // fetch('https://someApi.com')
    return (
        // <ul>
        //     <li></li>
        // </ul>


        <div>
            {
                arr.map((ele) => {
                   return <div>{ele+100}</div>
                })

            }
            {arr}
        </div>
        
    )
}

// for loop
// foreach --> loops through an Array
// map --> loops through an array and returns a new array

// [1,2,3,4,5,6]\


// function test(a,b){

// }

// let test = function(){

// }

// IIFE


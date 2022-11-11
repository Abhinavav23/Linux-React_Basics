export const AppV2 = () => {
    const printName = (name) => {
        console.log('calling inner');
        console.log(`my name is ${name}`);
    }
    return (
        <div>
            <h2>App version 2.0</h2>
            <button onClick={() => {
                console.log('calling outer');
                printName('abhinav')
            }}>click</button>
            <button onClick={printName}>click</button>
        </div>
    )
}


// () => {
//     printName('Abhinav')
// }
// printName
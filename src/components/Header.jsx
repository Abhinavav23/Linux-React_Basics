// export default Header;
// named export
import './Header.css'
export function Header() {
    const myStyle = {backgroundColor: '#3d3d3d', padding: '0.5rem'}
    return (
        <div>
        {/* <header className='dark'> <h1 className='text-white'> This is a header</h1> </header> */}
        <header style={myStyle}> 
            <h1 className='text-white'> This is a header</h1>
         </header>
        </div>
    )
}

// export function Header2() {
//     return (
//         <header> <h1> This is a header 2</h1> </header>
//     )
// }



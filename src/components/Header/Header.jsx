// export default Header;
// named export
import style from './Header.module.css';
import { Login } from './Login';
import { SearchBar } from './SearchBar';

export function Header() {
    const myStyle = {
        backgroundColor: '#3d3d3d', 
        padding: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
    return (
        <div className={style.dark}>
        {/* <header className='dark'> <h1 className='text-white'> This is a header</h1> </header> */}
        <header > 
            <h1 className={style.textWhite}>Linux</h1>
         </header>
         <button className='loginButton'>test</button>
         <SearchBar/>
         <Login/>
        </div>
    )
}

// export function Header2() {
//     return (
//         <header> <h1> This is a header 2</h1> </header>
//     )
// }
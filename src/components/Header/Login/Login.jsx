import React, {Fragment} from 'react';
import style from './Login.module.css';

export function Login(){
    return (
        <Fragment>
           <button className={style.dark}>Login button</button> 
            {/* <div>this is button</div> */}
        </Fragment>
    //     <>
    //     <button className={style.dark}>Login</button>
    //     <div>this is button</div>
    //     </>
    // <React.Fragment>
//         <button className={style.dark}>Login</button>
//         <div>this is button</div>
    //   </React.Fragment>
    )
}
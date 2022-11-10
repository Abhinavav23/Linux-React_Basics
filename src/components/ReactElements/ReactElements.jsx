import React from "react"
import { Login } from "../Header/Login/Login";
export const ReactElements = () => {
    console.log(<div>test</div>);
    return (
        // <div className="element">
        //    <div>
        //      <label>username</label>
        //      <input type="text" />
        //    </div>
        //    <Login role='admin' name='abhinav'/>
        // </div>

        // 1.tag, 2. attribute 3. content inside tag
        React.createElement('div', {className:'element', id: 'test'}, 
            React.createElement('div', null, 
                React.createElement('label', null, 'test'),
                React.createElement('input', {type: 'text'}),
                React.createElement(Login, {name: 'abhinav', role: 'user'})
            )
        )
    )
}

// export function ReactElements(){

// }

// React.createElement calls




import React from "react"
export const ReactElements = () => {
    console.log(<div>test</div>);
    return (
        // <div className="element">
        //    <div>
        //      <label>test</label>
        //      <input type="text" />
        //    </div>
        // </div>

        // 1.tag, 2. attribute 3. content inside tag
        React.createElement('div', {className:'element', id: 'test'}, 
            React.createElement('div', null, 
                React.createElement('label', null, 'test'),
                React.createElement('input', {type: 'text'})
            )
        )
    )
}

// export function ReactElements(){

// }

// React.createElement calls




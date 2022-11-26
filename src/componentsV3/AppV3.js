import React, { createContext, useState } from 'react'
import { CompB } from './LeftTree/CompB'
import { LeftParent } from './LeftTree/LeftParent'
import { PlayerProvider } from './ProviderComp/PlayerProvider';
import { Parent } from './ProviderComp/Parent';
import { CompY } from './RightTree/CompY';
import { RightParent } from './RightTree/RightParent'
import { ParentV2 } from './ProviderComp/ParentV2';

// step 1. create a context

// const nameContext = React.createContext()
export const NameContext = createContext();


export const AppV3 = () => {
    // let name = 'Abhinav';
    // let role = 'Instructor';

    // let userInfo = {
    //     name: 'default', 
    //     role: 'default', 
    //     batch: 'default'
    // }

    const [userInfo, setUserInfo] = useState({
        name: 'default', 
        role: 'default', 
        batch: 'default'
    })

    const setContextValue = () => {
        // userInfo = {
        //     name: 'Abhinav', 
        //     role: 'default', 
        //     batch: 'default'
        // }
        console.log(userInfo);

        setUserInfo({...userInfo, name: 'Abhinav'})

        console.log(userInfo);
    }

  return (
   <>
    <h1>AppV3</h1>
    

    {/* step 2. provide the context  with value*/}
    {/* <NameContext.Provider value={userInfo}>
        <RightParent/>
        <LeftParent/>
    </NameContext.Provider> */}

    {/* take input from here and update in context */}
    {/* <input/>
    <input/>
    <input/> */}

    {/* <button onClick={setContextValue}>setContext</button> */}


    {/* <CompB name ={name}/> */}

    <PlayerProvider myValue='Rohit Sharma'>
        <Parent/>
    </PlayerProvider>
    
    <br/>

    <PlayerProvider myValue={{game: 'Cricket', playerName: 'Surya KY'}}>
        <ParentV2/>
    </PlayerProvider>
    
   </>
  )
}

// {
//     name: name
//     role: role
// }

// export a = 10
// test = {
//     a: 10
// }
// export default test

// {
//     key: value
// }
import React from 'react'
import { CompA } from './CompA'
import { CompB } from './CompB'

export const LeftParent = (props) => {
  return (
   <>
    <h2>LeftParent</h2>
    <CompA name={props.name}/>
   </>
  )
}

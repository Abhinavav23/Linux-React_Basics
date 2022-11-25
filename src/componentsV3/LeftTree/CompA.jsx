import React from 'react'
import { CompB } from './CompB'

export const CompA = (props) => {
  return (
    <>
        <h3>CompA</h3>
        <CompB name={props.name}/>
    </>
  )
}

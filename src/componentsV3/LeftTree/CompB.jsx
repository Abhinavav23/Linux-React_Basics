import React from 'react'
import { useContext } from 'react'
import { NameContext } from '../AppV3'

export const CompB = () => {
  const nameValue = useContext(NameContext)
  return (
    <>
    <div>CompB</div>
    <div>Name - context - {nameValue.name}</div>
    <div>Role- props|drilling - {nameValue.role}</div>
    <div>Batch Name - {nameValue.batch}</div>
    </>
  )
}

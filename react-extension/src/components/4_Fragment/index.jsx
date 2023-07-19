import React, { Fragment } from 'react'

export default function Demo({name}) {  
  return (
    <Fragment>
        <h1>{name}</h1>
        <h2>Fragment</h2>
        <input type="text" />
        <input type="text" />
    </Fragment>
  )
}

import React from 'react'

export default function MultipleReturn(props) {
  if(props.segment === 'grocery'){
    return (
      <main>
        <h1>Grocery</h1>
        <h2>Vegetables</h2>
        <h2>Toothpaste</h2>
        <h2>Dry fruits</h2>
      </main>
    )
  } else{
    return(
      <section>
        <h1>Basic</h1>
        <h3>Mobile</h3>
        <h3>Clothing</h3>
        <h3>TV & Appliances</h3>
        <h3>Electronics</h3>
      </section>
    )
  }
}


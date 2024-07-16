import React from 'react'

const Props = (props) => {
  return (
    <div>
        <img src={props.image} alt="" />
        <h1>{props.text}</h1>
        <h1>{props.title}</h1>
        <p>{props.cont}</p>
        <p>{props.release}</p>

    </div>

  )
}

export default Props
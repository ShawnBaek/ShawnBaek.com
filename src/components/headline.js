import React from 'react'
import "../styles/main.scss"

const Headline = ({ title, subTitle }) => (
    <div className="headline">
        <h1>{title}</h1>
        <h4>{subTitle}</h4>
    </div>
  )
  
export default Headline
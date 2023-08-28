import React from "react"
import "./style.css"

const Button = ({ title = "Nothing" }) => (
    <button className="button">{title}</button>
)

export default Button
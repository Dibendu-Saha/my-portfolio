import React from "react";

export const Button = ({ title, type }) => {
  return (
    <a href
      className={
        `btn ${type === "primary"
          ? "btn--primary"
          : "btn--secondary"}`
      }
    >
      {title}
    </a>
  )
}

Button.defaultProps = {
  title: "Button",
  type: "secondary"
}

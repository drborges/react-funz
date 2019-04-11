import React from "react"

import styles from "./Toggle.module.css"

const Toggle = ({ onToggle }) => {
  return (
    <div className={styles.toggle} onClick={onToggle}>
      <span />
      <span />
      <span />
    </div>
  )
}

export default Toggle

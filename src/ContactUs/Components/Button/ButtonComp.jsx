import React from 'react'

import styles from './ButtonComp.module.css'
const ButtonComp = (props) => {
  return (
    <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
      <props.icon fontSize={24}/>
      {props.text}
    </button>

  )
}

export default ButtonComp

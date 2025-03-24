import React from 'react'
import styles from './Button.module.scss'
import BaseButton, { ButtonBaseProps } from './BaseButton'

function HighlightButton({...props}: ButtonBaseProps) {
  return <BaseButton {...props} customClass={styles.highlightButton} />;
}

export default HighlightButton
import React from 'react'
import styles from './WebBody.module.scss'

type Props = {
  children: React.ReactNode
}

function WebBody({children}: Props) {
  return (
    <div className={`web_layout_comp ${styles.container}`}>
      <div className={`web_layout_comp_block ${styles.block}`}>
        {children}
      </div>
    </div>
  );
}

export default WebBody
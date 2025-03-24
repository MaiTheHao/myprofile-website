import React from 'react'

type Props = {
  children: React.ReactNode
}

function WebLayoutCmp({children}: Props) {
  return <div className={`web_layout_comp`}>
    {children}
  </div>;
}

export default WebLayoutCmp
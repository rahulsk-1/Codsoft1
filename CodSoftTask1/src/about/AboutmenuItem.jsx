import React from 'react'
import classNames from 'classnames'
import '../styles/app.css'
import '../styles/aboutMenu.css'

const AboutmenuItem = ({title, active, onClick}) => {
  return (
    <div className={classNames('item',{active})} onClick={onClick}>
      <h2 className='title'>{title}</h2>
      
    </div>
  )
}

export default AboutmenuItem

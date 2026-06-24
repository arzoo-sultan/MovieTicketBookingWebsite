import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <h1 className='font-medium text-2xl'>
        <span >{text1}</span>
        <span className='underline pl-2 text-primary'>{text2}</span>
    </h1>
  )
}

export default Title
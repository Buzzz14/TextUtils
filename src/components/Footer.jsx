import React from 'react'

function Footer({mode}) {
  return (
    <div className='text-center'>
      <p className={mode==="dark"? "text-white":"text-black"}>&copy; 2023 Text-Master. All rights reserved!</p>
    </div>
  )
}

export default Footer

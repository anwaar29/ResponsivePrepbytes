import React from 'react'
import img1 from './Images/bgcircle.png'
import sam from './Images/sam.jpg'
import amazon from './Images/amazon.jpg'
import linkedin from './Images/linkedin.jpg'
import mamta from './Images/mamta.png'
import aditya from './Images/aditya.png'
import p1 from './Images/p1.jpg'
import p2 from './Images/pp.png'
import AM from './AM'
const AMPARENT = () => {
  return (
    <>
    <div className='ambox'>
          <AM
            img1={img1}
            mamta={mamta}
            img3={linkedin}
            name="Mamta Kumari"
            s1={amazon}
            s2={sam}

          />

          <AM
            img1={img1}
            mamta={aditya}
            img3={linkedin}
            name="Aditya Verma"
            s1={p1} className
            s2={p2}

          />
        </div>
    </>
  )
}

export default AMPARENT
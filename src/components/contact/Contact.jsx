import React from 'react'
import ContactInfo from './ContactInfo'
import Socials from './Socials'

const Contact = () => {
return (
    <div className='flex flex-col gap-2 '>
        <ContactInfo />
        <Socials />
    </div>
)
}

export default Contact
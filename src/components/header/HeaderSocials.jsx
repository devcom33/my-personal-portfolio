import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mouad-elbouchraoui/" target='_blank'><BsLinkedin/></a>
        <a href="https://twitter.com" target='_blank'><BsTwitter/></a>
        <a href="https://github.com/devcom33" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
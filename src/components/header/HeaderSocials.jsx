import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" targer="_blank"><BsLinkedin size={70}/></a>
        <a href="https://github.com" targer="_blank"><FaGithub size={70}/></a>
    </div>
  )
}

export default HeaderSocials
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <MdOutlineHomeRepairService className='about__icon'/>
              <h5>Completed</h5>
              <small>5+ Projects</small>
            </article>
            <article className='about__card'>
              <BiSupport className='about__icon'/>
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>
          </div>
          <p>
          Welcome to my portfolio! I'm MOUAD ELBOUCHRAOUI, a software engineer specializing in developing efficient and user-friendly web applications. With a strong background in various technologies, I have successfully completed several projects that demonstrate my skills and dedication to delivering high-quality software solutions.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
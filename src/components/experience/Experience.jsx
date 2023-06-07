import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* <div className="experience"> */}
              <div className='experience__webdev'>
                  <h3>Web Developement</h3>
                  <div className="experience__content">
                    <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <div><h4>HTML</h4>
                      <small className='text-light'>Intermediate</small></div>
                    </article>
                    <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <div><h4>CSS</h4>
                      <small className='text-light'>Basic</small></div>
                    </article>
                    <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <div><h4>Bootstrap</h4>
                      <small className='text-light'>Basic</small></div>
                    </article>
                    <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <div><h4>PHP</h4>
                      <small className='text-light'>Intermediate</small></div>
                    </article>
                    <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <div><h4>Laravel</h4>
                      <small className='text-light'>Intermediate</small></div>
                    </article>
                    <article className='experience__details'>
                      <BsPatchCheckFill className="experience__details-icon"/>
                      <div><h4>Mysql</h4>
                      <small className='text-light'>Intermediate</small></div>
                    </article>
                  </div>
              </div>
          <div className='experience__others'>
            <h3>Other Skills</h3>
            <div className="experience__content">
                        <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                          <div><h4>Algorithms</h4>
                          <small className='text-light'>Intermediate</small></div>
                        </article>
                        <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                          <div><h4>Data Structures</h4>
                          <small className='text-light'>Basic</small></div>
                        </article>
                        <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                          <div><h4>Problem Solving</h4>
                          <small className='text-light'>Basic</small></div>
                        </article>
                        <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                          <div><h4>Linux</h4>
                          <small className='text-light'>Basic</small></div>
                        </article>
                        <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                          <div><h4>Git</h4>
                          <small className='text-light'>Basic</small></div>
                        </article>
                        <article className='experience__details'>
                          <BsPatchCheckFill className="experience__details-icon"/>
                          <div><h4>Adobe Photoshop</h4>
                          <small className='text-light'>Intermediate</small></div>
                        </article>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}

export default Experience
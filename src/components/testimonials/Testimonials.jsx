import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: AVTR1,
    title: 'Avatar One',
    client: 'Elon Musk',
    review: 'Working with MOUAD on our Dental Management System was a fantastic experience. They demonstrated exceptional technical skills and attention to detail throughout the development process.  I highly recommend MOUAD for any software development project.'
  },
  {
    id: 2,
    image: AVTR2,
    title: 'Avatar Two',
    client: 'Jeff Bezos',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum voluptatibus at, ipsam exercitationem dolores quam, praesentium voluptate hic quae nisi velit dicta sunt qui itaque et facilis perspiciatis ea!'
  },
  {
    id: 3,
    image: AVTR3,
    title: 'Avatar Three',
    client: 'Bill Gates',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum voluptatibus at, ipsam exercitationem dolores quam, praesentium voluptate hic quae nisi velit dicta sunt qui itaque et facilis perspiciatis ea!'
  },
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container container__testimonials"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        
        {
        data.map(({id, image, title, client, review}) => {
          return (
        <SwiperSlide key = {id} className="testimonial">
          <div className="client__avatar">
            <img src={image} alt={title} />
          </div>
          <h5 className='client__name'>{client}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
          )
      })}
      </Swiper>
    </section>
  )
}

export default Testimonials
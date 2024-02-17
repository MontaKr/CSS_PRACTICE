import React from 'react'
import { GlobalStyle, Wrap } from './styles'
import { Star,StarHalfOutline } from 'react-ionicons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay} from 'swiper/modules';
import 'swiper/css';

const App = () => {

  const array = [{src : "../asset/1.jpg", cost : "from $230 per group", h1 : "Walking Tour in Florence", review : "138 reviews" },
  {src : "../asset/2.jpg", cost : "from $380 per group", h1 : "Edinburgh Guided Tour", review : "307 reviews" },
  {src : "../asset/3.jpg", cost : "from $100 per adult", h1 : "New York Sightseeing Tour", review : "199 reviews" },
  {src : "../asset/4.jpg", cost : "from $117 per adult", h1 : "Japan Panoramic Tour", review : "619 reviews" }]

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <section>
          <div className="content">
            <h1>Let's Travel The World Together!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero non quisquam aspernatur dolorum quia quae fugit laborum officiis id cumque aliquam consequatur ratione est, nulla molestiae libero incidunt mollitia.
            </p>
            <button>Explore Tours</button>
          </div>
          <Swiper
            className='swiper'
            modules={[EffectCube, Autoplay]}
            effect="cube"
            grabCursor={true}
            loop={true}
            speed={1000}
            cubeEffect={{
              shadow: false,
              slideShadows: true,
              shadowOffset: 10,
              shadowScale: 0.94
            }}
            autoplay={{
              delay: 2600,
              pauseOnMouseEnter: true
            }}>
              <div className="swiper__wrapper">
                {
                  array.map((value,index)=>{
                    return (
                      <SwiperSlide className='swiper__wrapper__slide' key={index}>
                        <img src={value.src} alt="CityImage" />
                        <div className="wrapper__cost">{value.cost}</div>
                        <div className="wrapper__overlay">
                          <h1>{value.h1}</h1>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatem accusantium nobis ut amet quod, consectetur vel officiis unde. Ab voluptatum quaerat obcaecati pariatur ut quidem. Perspiciatis laudantium obcaecati rem!</p>
                          <div className="wrapper__ratings">
                            <div className="wrapper__stars">
                              <Star className="star"/>
                              <Star className="star"/>
                              <Star className="star"/>
                              <Star className="star"/>
                              <StarHalfOutline className="star"/>
                            </div>
                            <span>{value.review}</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </div>
          </Swiper>
          
        </section>
      </Wrap>
    </>
  )
}

export default App
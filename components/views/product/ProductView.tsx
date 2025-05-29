'use client'

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function ProductView() {
  const products = [
    { src: '/product/abu-batu-0-5-mm.jpg', alt: 'Abu Batu 0-5 mm' },
    { src: '/product/batu-split-10-20.jpg', alt: 'Batu Split 10–20 mm' },
    { src: '/product/batu-split-20-30.jpg', alt: 'Batu Split 20–30 mm' },
    { src: '/product/screening-5-10.jpg', alt: 'Screening 5–10 mm' },
    { src: '/product/agregat-a.jpg', alt: 'Agregat A, B DAN C' },
    { src: '/product/sirtu.jpg', alt: 'Sirtu' }
  ]

  return (
    <div className="h-screen w-full px-4 py-20 bg-background">
      <h1 
       className={`relative mx-auto text-center w-fit text-size-1 font-bold text-text block after:absolute after:block after:content-[""] after:h-[3px] after:bg-primary after:w-full`}
      >
        Product
      </h1>

      <div className="mt-16">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
        //   pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={400}
                  height={400}
                  className="rounded-xl shadow-md  h-[500px] w-[500px]"
                />
                <p className="text-center mt-4 text-text text-2xl font-bold">{product.alt}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductView

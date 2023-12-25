"use client";
import { FreeMode, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { testimonialData } from "@/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="max-container padding-container py-10 xl:py-32">
      <div className="text-center mb-[5rem]">
        <h3 className="h3">
          Testimoni<span className="text-secondary">als</span>
        </h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta
          numquam alias voluptatum esse odit optio dolor.
        </p>
      </div>

      <div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            860: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          spaceBetween={50}
          slidesPerView={3}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="h-[380px] sm:h-[333px] text-center"
        >
          {testimonialData.map((testimonial, i) => (
            <SwiperSlide className="!max-h-[300px]" key={i}>
              <div className="shadow-lg bg-[#fafafa] rounded-xl p-8">
                <p className="italic regular-16">{testimonial.message}</p>
                <div className="flexCenter gap-3 mt-8">
                  <Image
                    src={testimonial.url}
                    alt="person"
                    height={77}
                    width={77}
                    className="rounded-full border-4 border-secondary"
                  />
                  <div className="medium-18">{testimonial.name}</div>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

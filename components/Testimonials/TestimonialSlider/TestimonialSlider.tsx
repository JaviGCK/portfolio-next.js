import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from "swiper/modules";
import { testimonialsData } from "./TestimonialsSlider.data";
import Image from "next/image";

export function TestimonialSlider() {
    return (
        <div>
            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="h-[580px] md:h-[500px] w-full md:w-[750px] max-w-screen-md mx-auto"
            >
                {testimonialsData.map(({ id, name, testimonial, image }) => (
                    <SwiperSlide key={id}>
                        <Image src={`/assets/${image}`} alt={name} width="180" height="180" className="mx-auto rounded-full" />
                        <h4 className="text-center mt-2">{name}</h4>
                        <div className="mt-3 text-center" style={{ maxHeight: '315px', overflowY: 'auto' }}>
                            {testimonial}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

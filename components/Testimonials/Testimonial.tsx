"use client"
import { motion } from 'framer-motion'
import { TestimonialSlider } from './TestimonialSlider'
import { fadeIn } from '@/app/utils/motionTransitions'

export function Testimonial() {
    return (
        <div className='h-screen mt-8' >
            <div className="flex flex-col justify-center min-h-screen ">
                <motion.h1
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="my-5 text-3xl text-center md:my-10"
                >
                    Algunos testimonios de<br /><span className="text-secondary"> personas con las que he trabajado.</span>
                </motion.h1>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <TestimonialSlider />
                </motion.div>
            </div>
        </div>
    )
}

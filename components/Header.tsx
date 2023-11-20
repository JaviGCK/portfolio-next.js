"use client"

import { fadeIn } from '@/app/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'


export function Header() {
    return (
        <div className='absolute z-20 inline-block w-full top-5 md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container justify-between mx-auto md:flex">

                    <h1 className="my-4 text-5xl text-center text-white md:text-lef px-5">J
                        <span className="text-secondary">C</span>
                        <span className="text-secondary">A</span>
                    </h1>


                </div>
            </motion.div>
        </div>
    )
}

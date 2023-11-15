"use client"

import { fadeIn } from '@/app/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'


export function Header() {
    return (
        <div className='absolute z-20 inline-block w-full top-5 md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container justify-between mx-auto md:flex">

                    <h1 className="my-4 text-4xl text-center text-white md:text-lef px-5">Javi
                        <span className="text-secondary">Code</span>
                        <span className="text-secondary">Art</span>
                    </h1>


                </div>
            </motion.div>
        </div>
    )
}

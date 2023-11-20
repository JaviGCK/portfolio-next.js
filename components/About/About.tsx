'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiLeftArrow, BiUpArrow } from 'react-icons/bi';
import { motionTransitionsAbout } from '@/app/utils/motionTransitions';
import { dataAboutSkills } from './About.data';

export function About() {
    const [index, setIndex] = useState(0);

    const handleItemClick = (itemIndex: any) => {
        setIndex(itemIndex);
    };

    return (
        <div>
            <motion.div
                initial={motionTransitionsAbout.initial}
                animate={motionTransitionsAbout.animate}
                transition={{ ...motionTransitionsAbout.transition, duration: 3 }}
            >
                <motion.div
                    className="w-3/4 mx-auto mt-36 bg-secondary/20 rounded-xl"
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    style={{ maxHeight: '60vh', overflowY: 'auto' }}
                >
                    {dataAboutSkills[index].skills[0].title}
                </motion.div>
            </motion.div>

            <motion.div
                className="flex flex-col mt-10 md:flex-row justify-evenly md:mt-8 md:mb-5 fixed bottom-0 left-0 right-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {dataAboutSkills.map((dataText, itemIndex) => (
                    <motion.div
                        key={dataText.id}
                        className={`${index === itemIndex ? 'text-secondary duration-300 transition-all border-secondary' : 'border-white'} 
                          cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                        onClick={() => handleItemClick(itemIndex)}
                    >
                        <p className="mr-4 text-md md:text-lg">{dataText.text}</p>
                        {index === itemIndex ? <BiUpArrow /> : <BiLeftArrow />}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiLeftArrow, BiUpArrow } from 'react-icons/bi';
import { motionTransitionsAbout } from '@/app/utils/motionTransitions';
import { dataAbout } from './About.data';
import { BiUser, BiCog, BiCodeAlt, BiBriefcase, BiBook } from 'react-icons/bi';

const sectionIcons = [BiUser, BiCog, BiCodeAlt, BiBriefcase, BiBook];

export function About() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleItemClick = (index: any) => {
        setSelectedIndex(index);
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
                    key={selectedIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    style={{ maxHeight: '60vh', overflowY: 'auto' }}
                >
                    {dataAbout[selectedIndex].content.map((item, index) => (
                        <div key={index}>{item.title}</div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className={`flex flex-row mt-10 md:flex-row justify-evenly md:mt-8 fixed bottom-0 left-0 right-0 w-4/5 mx-auto mb-24 md:mb-0`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {dataAbout.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`border-${selectedIndex === index ? 'gray-300' : 'yellow-500'} text-secondary duration-300 transition-all 
  cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3 hover:bg-yellow-500`}
                        onClick={() => handleItemClick(index)}
                    >
                        {window.innerWidth > 768 ? (
                            <>
                                <p className="mr-4 text-md md:text-lg">{item.title}</p>
                                {selectedIndex === index ? <BiUpArrow size={12} /> : <BiLeftArrow size={12} />}
                            </>
                        ) : (
                            <div className="flex items-center">
                                {sectionIcons[index] && React.createElement(sectionIcons[index], { size: 20 })}
                                {selectedIndex === index ? <BiUpArrow size={12} /> : <BiLeftArrow size={12} />}
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}


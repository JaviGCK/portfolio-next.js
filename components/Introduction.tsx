import { useState } from 'react';
import { fadeIn } from '@/app/utils/motionTransitions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Introduction() {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const handleContactButtonClick = () => {
        setShowContactInfo(!showContactInfo);
    };

    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div
                        className="hidden w-auto h-auto mx-auto mt-28 md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/javiport.jpeg" priority width="450" height="100" alt="img-javi" />
                    </motion.div>

                    <motion.div
                        className="w-auto h-auto mx-auto md:block px-10"
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {showContactInfo ? (

                            <div className="flex flex-col items-start w-auto gap-5 mb-10 px-10 text-lg">
                                <a href="tel:+34663033843" className="flex items-center text-secondary mb-2">
                                    <FaPhone size={16} className="mr-2" />
                                    +34 663 033 843
                                </a>
                                <a href="mailto:javigcpgr@gmail.com" className="flex items-center text-secondary mb-2">
                                    <FaEnvelope size={16} className="mr-2" />
                                    javigcpgr@gmail.com
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/javier-garc%C3%ADa-cabello-b97367267/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-secondary mb-2"
                                >
                                    <FaLinkedin size={16} className="mr-2" />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/JaviGCK"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-secondary"
                                >
                                    <FaGithub size={16} className="mr-2" />
                                    GitHub
                                </a>
                            </div>

                        ) : (

                            <div>
                                <h1 className="text-4xl leading-tight md:mb-6">
                                    Si puedes pensarlo, <br />
                                    <span className="text-secondary">puedes programarlo</span>
                                </h1>
                                <p className="max-w-sm mb-6 text-xl md:max-w-2xl md:mx-0 md:mb-12 md:text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero dolor, aliquam eu
                                    interdum sed, dignissim placerat nulla.
                                </p>
                            </div>
                        )}


                        <div className="flex items-center justify-center">
                            <button
                                onClick={handleContactButtonClick}
                                className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-white/50"
                            >
                                {showContactInfo ? 'Volver atrás' : 'Contáctame'}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div >
        </div >
    );
}

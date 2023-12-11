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
        <div className="w-full z-10">
            <div className="w-full h-full">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div
                        className="hidden w-auto h-auto mx-auto mt-28 md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image
                            src="/assets/javip-modified.jpg"
                            priority width="450" height="100"
                            alt="img-javi"
                            style={{ borderRadius: '15px', border: '5px solid #FFD700' }} />
                    </motion.div>

                    <motion.div
                        className="w-auto h-auto mx-auto md:block"
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {showContactInfo ? (

                            <div className="flex flex-col items-start w-auto gap-5 mb-10 px-10 text-lg">
                                <a href="tel:+34663033843" className="flex items-center text-secondary mb-2">
                                    <FaPhone size={16} className="mr-2 text-yellow-500" />
                                    +34 663 033 843
                                </a>
                                <a href="mailto:javigcpgr@gmail.com" className="flex items-center text-secondary mb-2">
                                    <FaEnvelope size={16} className="mr-2 text-yellow-500" />
                                    javigcpgr@gmail.com
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/javier-garc%C3%ADa-cabello-b97367267/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-secondary mb-2"
                                >
                                    <FaLinkedin size={16} className="mr-2 text-yellow-500" />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/JaviGCK"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-secondary"
                                >
                                    <FaGithub size={16} className="mr-2 text-yellow-500" />
                                    GitHub
                                </a>
                            </div>

                        ) : (

                            <div className='md:pr-20'>

                                <h1 className="text-4xl leading-tight md:mb-6">
                                    Creando en
                                    <span className="text-secondary text-yellow-500"> Bits</span>
                                </h1>
                                <p className="w-full mb-6 text-xl md:max-w-2xl md:mx-0 md:mb-12 md:text-xl"
                                >
                                    Como desarrollador web, cada proyecto es una fusión de creatividad y precisión, donde mi código se convierte en la firma distintiva. Explora conmigo la arquitectura digital, donde la originalidad y la funcionalidad convergen, y cada sitio cuenta su propia historia en este inmenso universo en línea.
                                </p>
                            </div>
                        )}


                        <div className="flex items-center justify-center md:pr-20">
                            <button
                                onClick={handleContactButtonClick}
                                className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-yellow-500 rounded-xl hover:bg-yellow-500 hover:border-yellow-500 hover:shadow-md"
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

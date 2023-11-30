'use client'
import { motion } from 'framer-motion';
import { cardContent } from "./Work.data";
import { useState } from "react";
import { fadeIn } from '@/app/utils/motionTransitions';

export function Work() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [isAnyCardExpanded, setIsAnyCardExpanded] = useState<boolean>(false);

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    const handleCardAnimationComplete = () => {
        if (expandedIndex !== null) {
            setIsAnyCardExpanded(true);
        } else {
            setIsAnyCardExpanded(false);
        }
    };

    const cardVariants: any = {
        expanded: {
            width: '500px',
            height: '600px',
            opacity: 1,
            zIndex: 2,
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        collapsed: {
            width: '200px',
            opacity: isAnyCardExpanded ? 0.2 : 0.8,
            zIndex: 1,
            position: 'static',
            top: 'auto',
            left: 'auto',
            transform: 'none',
        },
    };


    return (
        <div className="h-screen relative">
            <div className="grid pb-32 md:min-h-screen mt-28 md:mt-0 place-items-center">
                <div>
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mt-28 mb-12 text-3xl text-center md:text-4-xl"
                    >
                        Mis últimos <span className="text-secondary text-yellow-500">trabajos</span><span className='text-secondary'> realizados.</span>
                    </motion.h1>
                    <motion.div
                        className={`flex flex-col items-center h-full gap-10 px-2 md:flex-row md:grid md:grid-cols-4 ${isAnyCardExpanded ? 'grid-expanded' : ''}`}
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {cardContent.map(({ id, title, imageUrl, description, skills }) => (
                            <motion.div
                                key={id}
                                className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex ? 'expanded' : ''}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleClick(id)}
                                onAnimationComplete={handleCardAnimationComplete}
                                style={{
                                    backgroundImage: `url(/assets/${imageUrl})`,
                                    backgroundSize: 'cover',
                                    pointerEvents: expandedIndex !== null && expandedIndex !== id ? 'none' : 'auto',
                                }}
                            >
                                <div className="flex flex-col justify-end h-full">
                                    <div className="card-footer rounded-b-[20px] bg-gray-100 min-h-[100px] flex flex-col items-center justify-center p-3">
                                        <h2 className="text-xl font-semibold text-center text-black">{title}</h2>
                                        {id === expandedIndex && (
                                            <>
                                                <p className='text-black'>{description}</p>
                                                <div className="flex gap-5 mt-3 text-black">
                                                    {skills.map((data, index) => (
                                                        <p key={index}>{data.icon}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Work;

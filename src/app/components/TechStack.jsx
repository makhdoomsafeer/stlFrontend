'use client'
import { useState, useRef } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function TechStackSection() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const [hookedYPostion, setHookedYPosition] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setHookedYPosition(latest);
    })

    return (
        <>
            <section className="
                w-full bg-[#131319] flex flex-col justify-between items-center flex-wrap overflow-hidden
                md:flex-row
                px-[20px] py-0
                lg:px-[30px] lg:py-14
            ">
                <div className='
                    h-full flex flex-col gap-[24px] justify-center
                    w-full
                    lg:w-1/2
                '>
                    <h1 className='
                        text-white font-bold leading-4xl
                        text-center w-full h-full text-[30px]
                        lg:w-[400px] lg:h-[125px] lg:text-[42px] lg:text-left
                    '>
                        We Use Top Notch 100% Technologies
                    </h1>
                    <p className='
                        text-white font-normal leading-2xl
                        text-center w-full h-full text-[16px]
                        lg-w-[620px] lg-h-[120px] lg:text-[20px] lg:text-left
                    '>
                        We leverage cutting-edge, 100% reliable technologies to deliver robust, high-performance solutions. Our focus on innovation ensures you get the best tools and systems tailored to your needs, driving success and efficiency.
                    </p>
                </div>
                <div className='
                    h-full flex justify-center items-center
                    w-full scale-75
                    lg:w-1/2 lg:scale-100
                '>
                    <div className='w-[597px] h-[597px] border border-solid border-white/[0.18] rounded-full flex justify-center items-center relative'>
                        <motion.div
                            ref={ref}
                            style={{ rotate: `${hookedYPostion * -60}deg` }}
                            className='w-[597px] h-[597px] rounded-full absolute'
                        >
                            <motion.img
                                ref={ref}
                                style={{ rotate: `${hookedYPostion * 60}deg` }}
                                className='w-[67px] h-[69px] absolute left-[159px] top-[-15px] rounded-[15px] bg-[#00D8FF] shadow-[0_6px_0_0] shadow-[#009fbc]'
                                src={'/react.png'}
                                alt="" />

                        </motion.div>
                        <motion.div
                            ref={ref}
                            style={{ rotate: `${hookedYPostion * -60}deg` }}
                            className='w-[597px] h-[597px] rounded-full absolute'
                        >
                            <motion.img
                                ref={ref}
                                style={{ rotate: `${hookedYPostion * 60}deg` }}
                                className='w-[67px] h-[69px] absolute left-[404px] bottom-[0px] rounded-[15px] bg-[#1766CB] shadow-[0_6px_0_0] shadow-[#003982]'
                                src={'/arrow.png'} alt="" />
                        </motion.div>

                        <div className='w-[467px] h-[467px] border border-solid border-white/[0.18] rounded-full flex justify-center items-center relative'>
                            <motion.div
                                ref={ref}
                                style={{ rotate: `${hookedYPostion * 75}deg` }}
                                className='w-[467px] h-[467px] rounded-full absolute'
                            >
                                <motion.img
                                    ref={ref}
                                    style={{ rotate: `${hookedYPostion * -75}deg` }}
                                    className='w-[67px] h-[69px] absolute top-[312px] left-[0px] rounded-[15px] shadow-[0_6px_0_0] shadow-[#003E8D]'
                                    src={'/c+.png'} alt="" />

                            </motion.div>
                            <motion.div
                                ref={ref}
                                style={{ rotate: `${hookedYPostion * 15}deg` }}
                                className='w-[467px] h-[467px] rounded-full absolute'
                            >
                                <motion.img
                                    ref={ref}
                                    style={{ rotate: `${hookedYPostion * -15}deg` }}
                                    className='w-[67px] h-[69px] absolute left-[218px] bottom-[-34px] rounded-[15px] bg-[#016EF8] shadow-[0_6px_0_0] shadow-[#00396B]'
                                    src={'/w.png'} alt="" />
                            </motion.div>

                            <div className='w-[337px] h-[337px] border border-solid border-white/[0.18] rounded-full flex justify-center items-center relative'>
                                <motion.div
                                    ref={ref}
                                    style={{ rotate: `${hookedYPostion * 45}deg` }}
                                    className='w-[337px] h-[337px] rounded-full absolute'
                                >
                                    <motion.img
                                        ref={ref}
                                        style={{ rotate: `${hookedYPostion * -45}deg` }}
                                        className='w-[67px] h-[69px] absolute top-[50%] right-[-32px] rounded-[15px] shadow-[0_6px_0_0] shadow-[#960021]'
                                        src={'/angular.png'} alt="Angular" />
                                </motion.div>
                                <h2 className="w-[200px] text-[30px] font-medium leading[40px] text-center bg-clip-text text-transparent bg-gradient-to-r to-[white] from-[#D04C54]">
                                    Saylani Tech Limited
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechStackSection;
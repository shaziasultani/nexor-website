import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#f8f7f4] px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-24"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* Left Side: Hero Text */}
                <motion.div
                    className="max-w-xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="mb-6 text-[10px] font-bold rounded-md uppercase bg-white w-32 h-6 flex items-center justify-center gap-2 tracking-[0.15em] text-[#686b63]">
                        <span className="text-sm text-[#20231f]">●</span>
                        WE ARE NEXOR
                    </p>

                    <h1 className="text-4xl leading-[1.12] tracking-[-0.05em] text-[#20231f] sm:text-5xl lg:text-6xl xl:text-7xl">
                        Your trusted — partner in growing business success
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-7 text-[#686b63] sm:text-lg sm:leading-8">
                        We help ambitious businesses grow with strategic thinking,
                        creative solutions, and the right tools to turn their vision
                        into lasting success.
                    </p>

                    {/* btn */}
                    <motion.a
                        href="#book-meeting"
                        className="inline-flex items-center justify-center translate-y-[40px] px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-black rounded-lg shadow-lg hover:bg-black/85 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Book Free Meeting
                        <svg
                            className="w-4 h-4 ml-2 animate-pulse"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://w3.org"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            ></path>
                        </svg>
                    </motion.a>

                    {/* Client Avatars */}
                    <motion.div
                        className="mt-30 items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <div className="flex -space-x-3">
                            <img
                                src="https://i.pravatar.cc/80?img=47"
                                alt="Client"
                                className="h-11 w-11 rounded-full border-2 border-[#f8f7f4] object-cover"
                            />
                            <img
                                src="https://i.pravatar.cc/80?img=12"
                                alt="Client"
                                className="h-11 w-11 rounded-full border-2 border-[#f8f7f4] object-cover"
                            />
                            <img
                                src="https://i.pravatar.cc/80?img=44"
                                alt="Client"
                                className="h-11 w-11 rounded-full border-2 border-[#f8f7f4] object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-lg pt-3 text-[#20231f]">
                                Trusted by 500+ clients (4.9/5)
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Image and Testimonial */}
                <motion.div
                    className="relative mx-auto w-full max-w-xl pb-24 lg:max-w-none"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                >

                    {/* Main Hero Image */}
                    <motion.img
                        src="https://framerusercontent.com/images/BE7VCotPpNw2L10oFX72bDR4gMU.png?height=2012&width=2252"
                        alt="Nexor business consultation"
                        className="relative z-10 h-[380px] w-full rounded-2xl object-cover sm:h-[480px] lg:h-[540px]"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                    />

                    {/* Animated Colorful Background */}
                    <motion.div
                        className="animate-color-flow absolute translate-y-[15px] left-0 right-0 z-20 translate-y-1/2 rounded-2xl p-3 sm:p-4"
                        style={{
                            backgroundImage:
                                "url('https://framerusercontent.com/images/kbDbKuAG2zzC47fb54QIbzSuc4.jpg?height=1186&width=2000')",
                            backgroundSize: '200% 200%',
                            backgroundPosition: '0% 50%',
                        }}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {/* White Testimonial Card */}
                        <motion.div
                            className="rounded-xl bg-white p-5 shadow-lg sm:p-6"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                        >

                            {/* Stars inside the white box */}
                            <div className="-translate-y-2 flex items-center justify-between">
                                <div className="text-5xl font-bold -translate-y-4">
                                    ,,
                                </div>

                                <div className="flex items-center font-bold gap-1 -translate-x-56 text-black">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} aria-hidden="true">
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                                <div className="shrink-0">
                                    <p className="font-semibold text-[#20231f]">
                                        Emma Clark
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Head of Operations, Klea
                                    </p>
                                </div>

                                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                    <p className="text-sm leading-6 text-gray-600">
                                        “Nexor replaced three tools and finally gave our teams a
                                        shared understanding of what’s happening.”
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
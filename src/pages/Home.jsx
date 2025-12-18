import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Home = () => {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative pt-12 lg:pt-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                        Smart Illumination <br />
                        <span className="text-primary">That Adapts To You.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        AI-Driven Ergonomics for the Modern Workspace.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button className="bg-primary text-white hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                            View Prototype <ArrowRight size={20} />
                        </button>
                        <button className="bg-transparent border-2 border-primary text-primary hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                            Watch Video <Play size={20} />
                        </button>
                    </div>
                </motion.div>

                {/* Visual Dashboard */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50"
                >
                    <img
                        src="/HCI_Website_Assets/Home Dashboard.png"
                        alt="AI-Light Dashboard Interface"
                        className="w-full h-auto object-cover"
                    />
                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </motion.div>
            </section>

            {/* The Hook */}
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-blue-50 border border-blue-100 rounded-2xl p-8 lg:p-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            "70% of professionals suffer from Digital Eye Strain."
                        </h2>
                        <p className="text-lg text-primary font-medium">
                            AI-Light fixes this invisibly.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;

import { motion } from 'framer-motion';
import { Target, TrendingUp } from 'lucide-react';

const Impact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Impact & Future</h1>
            </header>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Impact */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-blue-600 rounded-3xl p-10 text-white shadow-xl flex flex-col justify-center"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                            <TrendingUp size={32} />
                        </div>
                        <h2 className="text-2xl font-bold">Project Impact</h2>
                    </div>
                    <p className="text-xl leading-relaxed text-blue-50 font-medium">
                        "Reduces Digital Eye Strain (DES) and improves focus without workflow disruption."
                    </p>
                </motion.div>

                {/* Future */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-3xl p-10 border border-gray-100 shadow-lg flex flex-col justify-center"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                            <Target size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Future Roadmap</h2>
                    </div>
                    <p className="text-xl leading-relaxed text-gray-600 font-medium">
                        "Integration with Philips Hue and Smart Home Ecosystems."
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Impact;

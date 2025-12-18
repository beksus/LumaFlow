import { motion } from 'framer-motion';

const Process = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
            <header className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Design Process</h1>
                <p className="text-gray-600">From initial sketches to a refined, user-centric solution.</p>
            </header>

            {/* Phase 1: Sketches */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">Phase 1</span>
                    <h2 className="text-2xl font-bold text-gray-900">Sketches & Ideation</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
                        <div className="text-center text-gray-400">
                            <p className="font-medium text-lg text-gray-500 mb-2">Design A (Smart Lamp)</p>
                            <p className="text-sm">Sketch Placeholder</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
                        <div className="text-center text-gray-400">
                            <p className="font-medium text-lg text-gray-500 mb-2">Design B (Room System)</p>
                            <p className="text-sm">Sketch Placeholder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Phase 2: Paper Prototype */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                    <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-bold">Phase 2</span>
                    <h2 className="text-2xl font-bold text-gray-900">Paper Prototype</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                    "Included intrusive Pop-up Alerts for posture."
                </p>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200 inline-block">
                    <span className="text-sm text-gray-500 italic">Initial Concept Note</span>
                </div>
            </section>

            {/* Phase 3: The Pivot */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <span className="bg-orange-100 text-alert px-3 py-1 rounded-full text-sm font-bold">Phase 3</span>
                    <h2 className="text-2xl font-bold text-gray-900">The Pivot (Reflection)</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-red-50 p-8 rounded-2xl border border-red-100"
                    >
                        <h3 className="text-xl font-bold text-red-700 mb-4">The Problem</h3>
                        <p className="text-gray-800 text-lg">
                            "Testing revealed pop-ups were annoying and interrupted flow."
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-green-50 p-8 rounded-2xl border border-green-100"
                    >
                        <h3 className="text-xl font-bold text-green-700 mb-4">The Solution</h3>
                        <p className="text-gray-800 text-lg">
                            "Replaced with subtle Toast Notifications and added a Grace Period."
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Process;

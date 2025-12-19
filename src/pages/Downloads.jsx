import { useState } from 'react';
import { FileText, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Downloads = () => {
    const [showPoster, setShowPoster] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Resources</h1>
                <p className="text-gray-600">Download project documentation and assets.</p>
            </header>

            <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {/* Poster Link */}
                    <button
                        onClick={() => setShowPoster(!showPoster)}
                        className="flex-1 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all group text-left w-full md:w-auto"
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div className="bg-orange-50 p-3 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                <FileText size={32} />
                            </div>
                            {showPoster ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">A0 Poster</h3>
                        <p className="text-gray-500 text-sm">Click to Preview</p>
                    </button>

                    {/* Report Link */}
                    <a
                        href="/HCI_Website_Assets/Milestone 3 final report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all group"
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div className="bg-blue-50 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <FileText size={32} />
                            </div>
                            <Download className="text-gray-400 group-hover:text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Read Full Report</h3>
                        <p className="text-gray-500 text-sm">Milestone 3 (PDF)</p>
                    </a>
                </div>

                {/* Poster Preview Section */}
                <AnimatePresence>
                    {showPoster && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg"
                        >
                            <div className="p-8 flex flex-col items-center">
                                <div className="flex justify-between items-center w-full mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">Poster Preview</h3>
                                    <a
                                        href="/HCI_Website_Assets/HCI_Poster_A0.jpg"
                                        download="AI-Light_Poster_A0.jpg"
                                        className="bg-primary text-white hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                                    >
                                        <Download size={20} /> Download JPG
                                    </a>
                                </div>
                                <img
                                    src="/HCI_Website_Assets/HCI_Poster_A0.jpg"
                                    alt="A0 Poster Preview"
                                    className="w-full h-auto rounded-lg shadow-sm"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Downloads;

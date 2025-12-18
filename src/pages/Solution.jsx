import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sun, Shield, Lock } from 'lucide-react';

const Solution = () => {
    const images = [
        { src: "/HCI_Website_Assets/Auto Mode.png", label: "Auto Mode Interface" },
        { src: "/HCI_Website_Assets/Manual Mode Control.png", label: "Manual Mode Control" },
        { src: "/HCI_Website_Assets/Notification.png", label: "Smart Notifications" }
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Final Solution</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    A comprehensive system blending automation with user control.
                </p>
            </header>

            {/* Core Features Grid */}
            <section className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Auto Mode",
                        desc: "Adjusts based on 450 lux target and Time of Day.",
                        icon: Sun,
                        color: "text-orange-500 bg-orange-50"
                    },
                    {
                        title: "Privacy-First",
                        desc: "Webcam usage restricted to local posture detection.",
                        icon: Lock,
                        color: "text-green-500 bg-green-50"
                    },
                    {
                        title: "Smart Intervention",
                        desc: "Dims lights slightly to encourage breaks.",
                        icon: Shield,
                        color: "text-blue-500 bg-blue-50"
                    }
                ].map((feature, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                        <div className={`p-3 rounded-lg w-fit mb-4 ${feature.color}`}>
                            <feature.icon size={24} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                    </div>
                ))}
            </section>

            {/* Gallery Slider */}
            <section className="bg-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden text-center">
                <h2 className="text-2xl font-bold text-white mb-8">Interface Gallery</h2>

                <div className="relative max-w-4xl mx-auto aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImage}
                            src={images[currentImage].src}
                            alt={images[currentImage].label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-contain bg-black"
                        />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white backdrop-blur-sm transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white backdrop-blur-sm transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Caption */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-white text-sm backdrop-blur-md">
                        {images[currentImage].label}
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${currentImage === idx ? 'bg-primary' : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Solution;

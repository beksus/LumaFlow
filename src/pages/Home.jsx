import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Home = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(1);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
            if (newVolume > 0 && isMuted) {
                videoRef.current.muted = false;
                setIsMuted(false);
            }
        }
    };

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
                        <Link
                            to="/process"
                            className="bg-primary text-white hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                        >
                            View Prototype <ArrowRight size={20} />
                        </Link>

                    </div>
                </motion.div>

                {/* Visual Dashboard */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50"
                >
                    <div className="relative group">
                        <video
                            ref={videoRef}
                            src="/HCI_Website_Assets/Introducing AI Light.mp4"
                            className="w-full h-auto object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            onClick={togglePlay}
                        />

                        {/* Custom Controls Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-2 flex items-center gap-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlay}
                                className="text-white hover:text-primary transition-colors p-1"
                            >
                                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                            </button>

                            {/* Volume Controls */}
                            <div className="flex items-center gap-2 group/volume ml-auto">
                                <button
                                    onClick={toggleMute}
                                    className="text-white hover:text-primary transition-colors p-1"
                                >
                                    {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                </button>

                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.05"
                                    value={isMuted ? 0 : volume}
                                    onChange={handleVolumeChange}
                                    className="w-20 h-1 bg-gray-400 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                        </div>
                    </div>
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

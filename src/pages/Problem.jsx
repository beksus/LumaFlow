import { motion } from 'framer-motion';
import { Users, AlertTriangle, Zap, CheckCircle2 } from 'lucide-react';

const Problem = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
            {/* The Insight */}
            <section className="text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 bg-blue-50 rounded-2xl border border-blue-100"
                >
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">The Insight</h1>
                    <p className="text-xl text-primary font-medium">
                        "Users rarely adjust manual lighting due to inconvenience."
                    </p>
                </motion.div>
            </section>

            {/* User Research Themes */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">User Research Themes</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Comfort Through Adaptation",
                            desc: "\"Users seek effortless transitions matching their energy.\"",
                            icon: Zap,
                            color: "bg-yellow-100 text-yellow-700"
                        },
                        {
                            title: "Simplicity & Trust",
                            desc: "\"Automation must be transparent and reliable.\"",
                            icon: CheckCircle2,
                            color: "bg-green-100 text-green-700"
                        },
                        {
                            title: "AI as Comfort Enabler",
                            desc: "\"Intelligent detection supports healthy habits.\"",
                            icon: Users,
                            color: "bg-blue-100 text-blue-700"
                        }
                    ].map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className={`p-3 rounded-lg w-fit mb-4 ${card.color}`}>
                                <card.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-3">{card.title}</h3>
                            <p className="text-gray-600 italic">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Demographics */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Demographics</h2>
                <div className="space-y-6 max-w-3xl">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-700">University Students</span>
                            <span className="font-bold text-primary">6</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '60%' }}
                                transition={{ duration: 1 }}
                                className="h-full bg-primary rounded-full"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-700">Office Professionals</span>
                            <span className="font-bold text-primary">4</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '40%' }}
                                transition={{ duration: 1 }}
                                className="h-full bg-blue-300 rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Problem;

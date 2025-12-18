import { motion } from 'framer-motion';

const members = [
    { name: "Mohammad Shaan", role: "Lead Heuristic Eval" },
    { name: "Izzat Zulqarnain", role: "Usability Testing" },
    { name: "Gavindra Ramadhansyah", role: "Digital Mockup" },
    { name: "Beksultan Kirgizbaev", role: "Internal Review" },
    { name: "Dennis Choi", role: "Design Concepts" },
    { name: "Daryl Tan", role: "Scenarios & Report" }
];

const Team = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Meet The Team</h1>
                <p className="text-gray-600">The minds behind AI-Light.</p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all text-center group"
                    >
                        <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-gray-400 group-hover:bg-blue-50 group-hover:text-primary transition-colors">
                            {member.name.charAt(0)}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-sm text-primary font-medium uppercase tracking-wide">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;

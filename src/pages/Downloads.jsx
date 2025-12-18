import { FileText, Download } from 'lucide-react';

const Downloads = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Resources</h1>
                <p className="text-gray-600">Download project documentation and assets.</p>
            </header>

            <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
                {/* Poster Link */}
                <a
                    href="#"
                    className="flex-1 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all group"
                >
                    <div className="flex items-start justify-between mb-8">
                        <div className="bg-orange-50 p-3 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            <FileText size={32} />
                        </div>
                        <Download className="text-gray-400 group-hover:text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">A0 Poster</h3>
                    <p className="text-gray-500 text-sm">PDF Format</p>
                </a>

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
        </div>
    );
};

export default Downloads;

import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />
            <main className="pt-16 min-h-[calc(100vh-4rem)]">
                {children}
            </main>
            <footer className="bg-white border-t border-gray-200 py-6 mt-12">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
                    © 2024 AI-Light Project. HCI Milestone 3.
                </div>
            </footer>
        </div>
    );
};

export default Layout;

import { Link, useForm } from '@inertiajs/react';
import { Toaster } from 'react-hot-toast';

export default function AuthenticatedLayout({ auth, header, children }) {
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <div className="min-h-screen bg-white">
            <Toaster position="top-right" />
            <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
                <div className="container mx-auto flex justify-between">
                    <div className="flex space-x-4">
                        <Link href="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                        <Link href={route('dashboard')} className="text-white hover:text-gray-300">
                            Dashboard
                        </Link>
                        <Link href={route('posts.create')} className="text-white hover:text-gray-300">
                            Create
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-white">{auth.user.name}</span>
                        <button
                            onClick={handleLogout}
                            className="text-white hover:text-gray-300"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <header className="bg-white shadow mt-16">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>
            <main className="mt-4">{children}</main>
        </div>
    );
} 
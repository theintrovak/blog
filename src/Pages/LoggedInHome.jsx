// src/Pages/Home.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, User, FileText, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import authservice from "@/Appwrite/Auth";
import { useEffect, useState } from "react";

export default function Home() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        const loadUser = async () => {
            const userData = await authservice.getCurrentUser()
            setUserData(userData)
        }
        loadUser()
    }, [])






    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
            {/* Top Navbar */}
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <Button variant="destructive" className="flex items-center gap-2">
                    <LogOut size={20} />
                    LOGOUT
                </Button>
            </header>

            {/* Welcome Section */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <User size={20} /> Welcome Back, <span className="text-purple-400">{userData?.name}</span> 👋
                </h2>
                <p className="text-gray-400 mt-2">
                    Manage your posts, media, and profile here.
                </p>
            </section>

            {/* Dashboard Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-purple-500/20 transition">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText size={20} /> My Posts
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400 mb-4">View and manage all your blog posts.</p>
                        <Button variant="secondary" className="w-full">Go to Posts</Button>
                    </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-purple-500/20 transition">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Image size={20} /> Media Library
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400 mb-4">Upload and manage your images.</p>
                        <Button variant="secondary" className="w-full">Go to Media</Button>
                    </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-purple-500/20 transition">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User size={20} /> Profile
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400 mb-4">Edit your personal info and settings.</p>
                        <Button variant="secondary" className="w-full">Go to Profile</Button>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}

// src/Pages/Home.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, User, FileText, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";
import authservice from "@/Appwrite/Auth";
import { useEffect, useState } from "react";
import { BarChart2 } from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export default function Home() {
    const analyticsData = [
        { day: "Mon", views: 400 },
        { day: "Tue", views: 300 },
        { day: "Wed", views: 200 },
        { day: "Thu", views: 500 },
        { day: "Fri", views: 400 },
        { day: "Sat", views: 300 },
        { day: "Sun", views: 200 },
    ];
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
                        <Button variant="secondary" className="w-full" onClick={() => navigate("/all-posts")}>Go to Posts</Button>
                    </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-purple-500/20 transition">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart2 size={20} /> Analytics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400 mb-4">View weekly page views and engagement.</p>
                        <Button variant="secondary" className="w-full" onClick={() => navigate("/analytics")} >View Analytics</Button>
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
                        <Button variant="secondary" onClick={() => navigate("/profile")} className="w-full">Go to Profile</Button>
                    </CardContent>
                </Card>




            </section>
            <div className="min-h-screen bg-gray-900 text-white p-6">
                <h1 className="text-2xl font-bold mb-6">Analytics</h1>

                <section className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <BarChart2 size={20} /> Weekly Blog Views
                    </h2>

                    <div className="w-full h-80 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={analyticsData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                                <XAxis dataKey="day" stroke="#aaa" />
                                <YAxis stroke="#aaa" />
                                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none" }} />
                                <Bar dataKey="views" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </section>
            </div>

        </div>

    );
}

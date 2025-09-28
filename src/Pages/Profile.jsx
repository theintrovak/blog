// src/Pages/Profile.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { User, Mail, Key, Edit3 } from "lucide-react";

export default function Profile() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 flex items-center justify-center">
            <Card className="w-full max-w-3xl bg-gray-800 border-gray-700 shadow-lg">
                {/* Header */}
                <CardHeader className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold">My Profile</CardTitle>
                    <Button variant="secondary" size="sm" className="flex items-center gap-2">
                        <Edit3 size={16} /> Edit Profile
                    </Button>
                </CardHeader>

                <CardContent>
                    {/* Profile Avatar + Name */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                        <Avatar className="w-24 h-24 border-2 border-purple-500 shadow-lg">
                            <AvatarImage src="https://via.placeholder.com/150" alt="Profile" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
                                <User size={20} /> John Doe
                            </h2>
                            <p className="text-gray-400">Frontend Developer</p>
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                            <p className="text-gray-400 flex items-center gap-2 mb-1">
                                <Mail size={18} /> Email
                            </p>
                            <p className="text-lg font-medium">johndoe@example.com</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                            <p className="text-gray-400 flex items-center gap-2 mb-1">
                                <Key size={18} /> Member Since
                            </p>
                            <p className="text-lg font-medium">Jan 15, 2024</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col md:flex-row gap-4">
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                            Update Password
                        </Button>
                        <Button variant="destructive" className="flex-1">
                            Delete Account
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

import React, { useEffect, useState } from 'react'
import services from '../Appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state?.auth?.status)
    useEffect(() => {
        services.getPosts([]).then((post) => {
            if (post) {
                setPosts(post.documents)
            }
        })
    }, [])
    return (

        <div className="min-h-screen flex flex-col items-center bg-cover bg-center justify-center  px-8 py-20"
            style={{ backgroundImage: 'url("/download.jpg")' }}
        >

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Welcome to SNAZAPEX
            </h1>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
                {/* Card 1 */}
                <div className="bg-[#ffffff32] hover:scale-105 transition duration-300 ease-in-out shadow-lg rounded-2xl p-6 text-center ">
                    <h2 className="text-xl font-semibold mb-2">Share Your Stories</h2>
                    <p className="text-gray-950">
                        Publish blogs easily with our rich editor — your voice, your style.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#ffffff32] hover:scale-105 transition duration-300 ease-in-out shadow-lg rounded-2xl p-6 text-center">
                    <h2 className="text-xl font-semibold mb-2">Explore New Ideas</h2>
                    <p className="text-gray-950">
                        Read posts from diverse creators across tech, lifestyle, and more.
                    </p>
                </div>


                <div className="bg-[#ffffff32] hover:scale-105 transition duration-300 ease-in-out shadow-lg rounded-2xl p-6 text-center">
                    <h2 className="text-xl font-semibold mb-2">Join the Community</h2>
                    <p className="text-gray-950">
                        Comment, like, and connect with writers who inspire you.
                    </p>
                </div>
            </div>


            <button className="mt-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-3 transition-all"
                onClick={() => authStatus ? navigate("/all-posts") : navigate("/login")}
            >
                Get Started
            </button>
        </div>

    )
}

export default Home
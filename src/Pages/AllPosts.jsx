import React, { useEffect, useState } from 'react'
import { Container, Card } from '../Components/index'
import services from '../Appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    services.getPosts([]).then((post) => {
        if (post) {
            setPosts(post.documents)
        }
    })
    return (
        <div className="w-full py-8 bg-gradient-to-bl from-gray-900 via-gray-800 to-black">

            <h2 className="text-2xl font-bold mb-6 text-white">Latest Posts</h2>

            <div className="
      grid gap-6
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5
    ">
                {posts.map((post) => (
                    <div
                        key={post.$id}
                        className="transform transition duration-300 ease-in-out 
                     hover:scale-105 hover:shadow-xl "
                    >
                        <Card {...post} />
                    </div>
                ))}
            </div>

        </div>

    )
}

export default AllPosts
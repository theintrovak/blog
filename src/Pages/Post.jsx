import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import services from "../Appwrite/config";
import { Button, Container } from "../Components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            services.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        services.deletePost(post.$id).then((status) => {
            if (status) {
                services.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-10 max-w-4xl bg-gradient-to-tl from-gray-900 via-gray-800 to-black mx-auto px-4">
            {/* Featured Image */}
            <div className="relative w-full mb-8">
                <img
                    src={services.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />

                {/* Edit/Delete Buttons for Author */}
                {isAuthor && (
                    <div className="absolute right-4 top-4 flex gap-2">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow">
                                Edit
                            </Button>
                        </Link>
                        <Button
                            onClick={deletePost}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow"
                        >
                            Delete
                        </Button>
                    </div>
                )}
            </div>

            {/* Post Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-snug">
                {post.title}
            </h1>

            {/* Post Content */}
            <article className="prose prose-invert prose-lg max-w-none text-gray-300">
                {parse(post.content)}
            </article>
        </div>

    ) : null;
}
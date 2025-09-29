import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { login } from '../Store/authSlice'
import { Input, Button, Logo } from './index'
import { useDispatch } from 'react-redux'
import authservice from '../Appwrite/Auth'
import { useForm } from 'react-hook-form'

function LoginBox() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { isSubmitting } } = useForm()
    const [error, setError] = useState("")
    const handleLogin = async (data) => {
        setError("")
        try {
            const session = await authservice.login(data)
            if (session) {
                const userData = await authservice.getCurrentUser()
                if (userData) {
                    dispatch(login({ userData }))
                    navigate("/")
                }
            }
        } catch (err) {
            setError(err?.message || "Something went wrong")

        }
    }
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-500 via-gray-700 to-black overflow-hidden">
            {/* Background SVGs */}
            <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" fill="none" viewBox="0 0 1440 320">
                <path fill="rgba(255,255,255,0.05)" d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,122.7C672,139,768,213,864,245.3C960,277,1056,267,1152,256C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

            <svg className="absolute bottom-0 right-0 w-1/3 opacity-20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L15.09 8H24L17.45 12.97L20.54 21L12 16.03L3.46 21L6.55 12.97L0 8H8.91L12 0Z"></path>
            </svg>

            <div className="relative z-10 w-full max-w-3xl mx-auto p-6 md:p-12 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Logo width="120" />
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-2">Sign In To Your Account</h2>
                <p className="text-center text-base text-gray-700 mb-6">
                    Don’t have an account?{' '}
                    <Link to="/signup" className="font-medium text-indigo-600 hover:underline">Sign Up</Link>
                </p>

                {/* Error */}
                {error && <span className="text-red-500 block text-center mb-4">{error}</span>}

                {/* Form */}
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6" noValidate>
                    <div className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            label="Email:"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Email Address is Invalid"
                                }
                            })}
                            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                        />

                        <Input
                            type="password"
                            placeholder="Enter your password"
                            label="Password:"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                    message: "Password is Invalid"
                                }
                            })}
                            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        children={isSubmitting ? "Loading..." : "Login"}
                        className="w-full py-3 bg-[#10A4B0] hover:bg-[#03737d] text-white font-semibold rounded-lg shadow-md transition-all duration-300"
                    />
                </form>

                {/* Additional SVG Decoration */}
                <svg className="absolute top-0 right-0 w-48 h-48 opacity-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 200 200">
                    <path d="M57.5,-45.6C73.6,-24.1,80.6,7.4,71.7,35.1C62.8,62.8,37,86.7,9.7,85.7C-17.6,84.7,-35.2,58.7,-48.5,32.3C-61.8,5.9,-70.8,-20.9,-61.6,-42.4C-52.3,-63.8,-24.9,-79.8,2.8,-80.9C30.4,-82,60.7,-68.9,57.5,-45.6Z" transform="translate(100 100)" />
                </svg>
            </div>
        </div>

    )
}

export default LoginBox
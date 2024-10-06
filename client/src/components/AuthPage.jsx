
import React, { useState } from 'react'

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('student')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const navigateTo = (path) => {
        window.location.href = path
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const url = isLogin
            ? `${import.meta.env.VITE_BACKEND_URL}/api/user/login`
            : `${import.meta.env.VITE_BACKEND_URL}/api/user/register`

        const body = isLogin
            ? { email, password }
            : { name, email, password, role }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })

            const data = await response.json()

            if (data.success) {
                setSuccess(data.message)
                console.log('Token:', data.data.token)
                localStorage.setItem('token', data.data.token)
                localStorage.setItem('user', JSON.stringify(data.data.user))
                navigateTo(`/${data.data.user.role}`)

            } else {
                setError(data.message || 'An error occurred')
            }
        } catch (err) {
            setError('An error occurred. Please try again.')
        }
    }

    return (
        <div className="min-h-screen bg-blue-100 flex items-center justify-center relative overflow-hidden">
            {/* Background animation */}


            <div className="bg-white p-8 rounded-lg shadow-md w-96 z-10">
                <div className="flex justify-center mb-6">
                    <img src="./logo.svg" alt="NIST Logo" width={150} height={50} />
                </div>
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {!isLogin && (
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Role</label>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="student"
                                        checked={role === 'student'}
                                        onChange={() => setRole('student')}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">Student</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="alumni"
                                        checked={role === 'alumni'}
                                        onChange={() => setRole('alumni')}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">Alumni</span>
                                </label>
                            </div>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-200"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
                {success && <p className="mt-4 text-green-500 text-center">{success}</p>}
                <p className="mt-4 text-center text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="ml-1 text-blue-600 hover:underline focus:outline-none"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    )
}
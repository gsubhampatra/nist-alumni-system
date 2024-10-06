import React, { useState } from 'react'

export default function AdminProfile() {
    const [admin, setAdmin] = useState({
        name: 'Admin User',
        email: 'admin@nist.edu',
        role: 'System Administrator',
        department: 'IT Department',
        profilePhoto: '/placeholder.svg?height=200&width=200',
        managedSystems: ['Student Management', 'Alumni Network', 'Event Management'],
        recentActions: [
            { action: 'Updated user permissions', timestamp: '2024-10-06 14:30:00' },
            { action: 'Approved new alumni account', timestamp: '2024-10-06 11:15:00' },
            { action: 'Generated monthly report', timestamp: '2024-10-05 09:00:00' },
        ],
    })

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-blue-700 text-white p-4">
                    <h1 className="text-2xl font-bold">Admin Profile</h1>
                </div>
                <div className="p-6">
                    <div className="flex items-center mb-6">
                        <img
                            src={admin.profilePhoto}
                            alt={admin.name}
                            width={100}
                            height={100}
                            className="rounded-full mr-4"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{admin.name}</h2>
                            <p className="text-gray-600">{admin.email}</p>
                            <p className="text-gray-600">{admin.role} - {admin.department}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Managed Systems</h3>
                            <ul className="list-disc pl-5">
                                {admin.managedSystems.map((system, index) => (
                                    <li key={index}>{system}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Recent Actions</h3>
                            <ul className="space-y-2">
                                {admin.recentActions.map((action, index) => (
                                    <li key={index} className="border-b pb-2">
                                        <p className="font-medium">{action.action}</p>
                                        <p className="text-sm text-gray-500">{action.timestamp}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Admin Tools</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                                User Management
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                                System Settings
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                                Reports
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                                Event Management
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
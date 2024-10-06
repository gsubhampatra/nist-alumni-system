import React, { useEffect, useState } from 'react'

export default function StudentProfile() {
    const [student, setStudent] = useState({
        name: 'John Doe',
        email: 'john.doe@nist.edu',
        course: 'Computer Science',
        year: '3rd Year',
        githubUsername: '',
        linkedinUrl: '',
        profilePhoto: 'https://avatars.githubusercontent.com/u/96821893?v=4',
        projects: [],
        skills: [],
    })

    //get user data from local storage and update the user state
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setStudent({ ...student, ...user })
        }
    }, [])

    const importGithubData = async () => {
        // Implement GitHub API call to fetch user data
        console.log('Importing GitHub data...')
    }

    const importLinkedinData = async () => {
        // Implement LinkedIn API call to fetch user data
        console.log('Importing LinkedIn data...')
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-blue-700 text-white p-4">
                    <h1 className="text-2xl font-bold">Student Profile</h1>
                </div>
                <div className="p-6">
                    <div className="flex items-center mb-6">
                        <img
                            src={student.profilePhoto}
                            alt={student.name}
                            width={100}
                            height={100}
                            className="rounded-full mr-4"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{student.name}</h2>
                            <p className="text-gray-600">{student.email}</p>
                            <p className="text-gray-600">{student.course} - {student.year}</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Import Data</h3>
                        <div className="flex space-x-4">
                            <button
                                onClick={importGithubData}
                                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                            >
                                Import from GitHub
                            </button>
                            <button
                                onClick={importLinkedinData}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                            >
                                Import from LinkedIn
                            </button>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Projects</h3>
                        {student.projects.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {student.projects.map((project, index) => (
                                    <li key={index}>{project}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">No projects added yet.</p>
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Skills</h3>
                        {student.skills.length > 0 ? (
                            <div className="flex flex-wrap">
                                {student.skills.map((skill, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 mb-2">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">No skills added yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
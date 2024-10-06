import React, { useState } from 'react'

export default function AlumniProfile() {
  const [alumni, setAlumni] = useState({
    name: 'Jane Smith',
    email: 'jane.smith@alumni.nist.edu',
    graduationYear: '2018',
    course: 'Electrical Engineering',
    githubUsername: '',
    linkedinUrl: '',
    profilePhoto: '/placeholder.svg?height=200&width=200',
    connections: [],
    experience: [],
    projects: [],
    events: [],
    achievements: [],
  })

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
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-700 text-white p-4">
          <h1 className="text-2xl font-bold">Alumni Profile</h1>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <img
              src={alumni.profilePhoto}
              alt={alumni.name}
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{alumni.name}</h2>
              <p className="text-gray-600">{alumni.email}</p>
              <p className="text-gray-600">{alumni.course} - Class of {alumni.graduationYear}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              {alumni.experience.length > 0 ? (
                <ul className="space-y-2">
                  {alumni.experience.map((exp, index) => (
                    <li key={index} className="border-b pb-2">
                      <h4 className="font-medium">{exp.title}</h4>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No experience added yet.</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Projects</h3>
              {alumni.projects.length > 0 ? (
                <ul className="list-disc pl-5">
                  {alumni.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No projects added yet.</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
            {alumni.achievements.length > 0 ? (
              <ul className="list-disc pl-5">
                {alumni.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No achievements added yet.</p>
            )}
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Events Attended</h3>
            {alumni.events.length > 0 ? (
              <ul className="space-y-2">
                {alumni.events.map((event, index) => (
                  <li key={index} className="border-b pb-2">
                    <h4 className="font-medium">{event.name}</h4>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No events attended yet.</p>
            )}
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Connections</h3>
            {alumni.connections.length > 0 ? (
              <div className="flex flex-wrap">
                {alumni.connections.map((connection, index) => (
                  <div key={index} className="mr-4 mb-4 text-center">
                    <Image
                      src={connection.photo || '/placeholder.svg?height=50&width=50'}
                      alt={connection.name}
                      width={50}
                      height={50}
                      className="rounded-full mx-auto"
                    />
                    <p className="text-sm mt-1">{connection.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No connections added yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
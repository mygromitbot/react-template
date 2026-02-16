import { Link } from 'react-router-dom'

export function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p className="mb-8 text-gray-600">This is a React 19 template built with OpenCode</p>
      
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>React 19</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>React Router v7</li>
          <li>Zustand</li>
          <li>Vitest + React Testing Library</li>
          <li>pnpm</li>
        </ul>
      </div>

      <Link to="/" className="mt-8 text-blue-500 hover:underline">
        ← Back to Home
      </Link>
    </div>
  )
}

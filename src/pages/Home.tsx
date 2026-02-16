import { Link } from 'react-router-dom'
import { useCounterStore } from '../store/counter'

export function Home() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">React Template</h1>
      <p className="mb-8 text-gray-600">A React 19 + TypeScript + Tailwind + React Router v7 + Zustand template</p>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Counter (Zustand)</h2>
        <p className="text-6xl text-center mb-6 font-mono">{count}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>

      <Link to="/about" className="mt-8 text-blue-500 hover:underline">
        Go to About →
      </Link>
    </div>
  )
}

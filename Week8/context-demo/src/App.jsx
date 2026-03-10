import A from './components/A.jsx'
import B from './components/B.jsx'
import C from './components/C.jsx'

function App() {
  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
    <A />
    <B />
    <C />
  </div>
</div>
  )
}

export default App
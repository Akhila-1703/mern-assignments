import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { useTest } from '../store/TestStore.js'

function A() {
    //const {y,incrementY}=useTest()
    let y = useTest((state) => state.y)
    let incrementY=useTest((state)=>state.incrementY)
    let { counter1, counter2, changeCounter1, changeCounter2 } = useContext(CounterContext)
    console.log("Component B rendered")
    return (
        <div className='text-center shadow-2xl p-10'>
            <p className='text-2xl'>Componenet B</p>
            <p className='text-lg mt-5'>Counter1:{counter1}</p>
            <p className='text-lg mt-5'>Counter2:{counter2}</p>
            <p className='text-lg text-red-500 mt-5'>Y:{y}</p>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
            <button onClick={incrementY} className='bg-blue-400 p-2 '>Increment Y</button>
            <button onClick={changeCounter1} className='bg-blue-400 p-2'>Change Counter1</button>
            <button onClick={changeCounter2} className='bg-blue-400 p-2 '>Change Counter2</button></div>
    </div>
    )
}

export default A
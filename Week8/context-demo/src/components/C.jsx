import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'
import { useTest } from '../store/TestStore.js'

function C() {
    //get state from zustand store
    //const { x, incrementX, decrementX } = useTest(state => ({ state.x, state, incrementX }))
    let x = useTest((state) => state.x)
    let user=useTest((state)=>state.user)
    let incrementX = useTest((state) => state.incrementX)
    let updateUser = useTest((state) => state.updateUser)
    //const x = useTest(state => state.x)
    let { counter1, counter2, changeCounter1, changeCounter2 } = useContext(CounterContext)
    console.log("Component C rendered")
    return (
        <div className='text-center shadow-2xl p-10'>
            <p className='text-2xl'>Componenet C</p>
            <p className='text-lg mt-5'>Counter1:{counter1}</p>
            <p className='text-lg mt-5'>Counter2:{counter2}</p>
            <p className='text-lg text-red-500 mt-5'>x:{x}</p>
            <p className='text-lg text-red-500 mt-5'>user name:{user.name}</p>
            <p className='text-lg text-red-500 mt-5'>user age:{user.age}</p>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
            <button onClick={incrementX} className='bg-blue-400 p-2 '>Increment x</button>
            <button onClick={updateUser} className='bg-blue-400 p-2 '>update user</button>
            <button onClick={changeCounter1} className='bg-blue-400 p-2 '>Change Counter1</button>
            <button onClick={changeCounter2} className='bg-blue-400 p-2 '>Change Counter2</button></div>
    </div>
    )
}

export default C
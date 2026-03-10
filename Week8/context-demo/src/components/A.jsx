import { useContext,useRef,useEffect } from 'react'
import { CounterContext } from '../contexts/CounterContext.js'
import { UserContext } from '../contexts/UserContext.js'

function A() {
    let inputRef = useRef(null)
    let { counter1, counter2, changeCounter1, changeCounter2 } = useContext(CounterContext)
    let { user, updatingUser } = useContext(UserContext)
    console.log("Component A rendered")
    useEffect(() => {
        //side effect
        inputRef.current.focus()
    },[])
    return (
        <div className='text-center shadow-2xl p-10'>
            <p className='text-2xl'>Componenet A</p>
            <p className='text-lg mt-5'>Counter1:{counter1}</p>
            <p className='text-lg mt-5'>Counter2:{counter2}</p>
            <p className='text-lg mt-5'>Name:{user.name}</p>
            <p className='text-lg mt-5'>Email:{user.email}</p>
            <p className='text-lg mt-5'>Age:{user.age}</p>
            <p className='text-lg mt-5'>City: {user.city ? user.city : "Not added"}</p>  
            <div className="flex flex-wrap gap-3 justify-center mt-4">
            <button onClick={changeCounter1} className='bg-blue-400 p-2 '>Change Counter1</button>
            <button onClick={changeCounter2} className='bg-blue-400 p-2 '>Change Counter2</button>
            <button onClick={updatingUser} className='bg-blue-400 p-2 '>update user</button>
            <input ref={inputRef} type="text" className="border border-gray-400 rounded px-2 text-sm w-40 h-6 mt-1.5" /></div>
    </div>
    )
}

export default A
import React,{useCallback,useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {

    const [Value, setValue] = useState();
    const navigate=useNavigate();

    const handleroom = useCallback(()=>{
        navigate(`/room/${Value}`);
    },[navigate,Value])

  return (
    <div>
      <h1>hello</h1>

        <input value={Value} onChange={e=>setValue(e.target.value)} type="text" placeholder='room id'/>
        <button onClick={handleroom}>Join Room</button>

    </div>
  )
}

export default Home

import { useState, useEffect } from 'react'
import './App.css'
import { useNavigate, Link } from 'react-router-dom'

function AllStates() {
  const [states, setStates] = useState([])
  const [searchState, setSearchState] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    async function getData(){
      try {
        const response = await fetch ("/api/states.json")
        const res = await response.json()
        console.log(res)
        setStates(res.states)

      } catch (error) {
        console.log(error)
      }


    }
    getData()
  },[])

  const filteredStates = states.filter((state)=>
    state.label.toLowerCase().includes(searchState.toLowerCase())
)

  return (
    <>
        <label className="search">
            <strong>Search States :  </strong>
                    <input 
                    name="searchState" 
                    onChange={(event)=> setSearchState(event.target.value)} 
                    value = {searchState}
                    />
        </label>
        <div className = "container">
        {
          filteredStates.map((state)=>
            <div className="stateCard" key={state.label} onClick={()=>navigate(`/state/${state.value}`)} >
              <h2>{state.label}</h2>
              <p>{state.emoji}</p>
            </div>
          )
        }
        </div>
    </>
  )


}

export default AllStates
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function StateDetails({}){
    const [stateData, setStateData] = useState(null)
    const {abbreviation} = useParams()

    useEffect(()=>{
        async function getStateData(){
            try {
                const response = await fetch(`/api/states/${abbreviation}.json`)
                const res = await response.json()
                console.log(res)
                setStateData(res)

            } catch (error) {
                console.log(error)
            }

        }
        getStateData()
    },[])
    
    return (
        <>
        { 
            stateData && (
                <div className="stateDetails">
                    <h2><strong>{stateData.label}</strong></h2>
                </div>
            )
        }
        
        </>    
    )
}
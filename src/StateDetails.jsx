import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

export default function StateDetails({}){
    const [stateData, setStateData] = useState(null)
    const {abbreviation} = useParams()
    const navigate = useNavigate()

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

    function formatDate(dateString) {
        const year = dateString.slice(0, 4);
        const month = dateString.slice(4, 6);
        const day = dateString.slice(6, 8);
        const date = new Date(`${year}-${month}-${day}`);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
    
    return (
        <>
        { 
            stateData && (
                <div className="stateDetails">
                    <h2><strong>{stateData.label}</strong></h2>
                    <p>{stateData.emoji}</p>
                    <p><strong>General Election Voter Registration Deadline: </strong></p>
                    <p>{formatDate(stateData.deadline)}</p>
                    <p><strong>Primary Election Date: </strong></p>
                    <p>{formatDate(stateData.primaryDate)}</p>
                    <p><strong>Primary Voter Registration Deadline: </strong></p>
                    <p>{formatDate(stateData.primaryDeadline)}</p>
                    <a
                        href={stateData.url}
                        target="_blank"
                        >
                        REGISTER TO VOTE HERE
                    </a>
                    <br />
                    <br />
                    <button onClick={() => navigate("/")}>
                        Back to all states
                    </button>
                </div>
            )
        }
        
        </>    
    )
}
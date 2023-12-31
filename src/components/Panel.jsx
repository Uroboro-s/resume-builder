import { useState } from "react";
import Editor from "./Editor";
//import CV from1 "./CV";
import CVDisplay from "./CV";



function Panel() {
    const detailObject = {
        name: "",
        email: "",
        number: "",
        linkedin: "",
        github: "",
        languages: [
            "",
        ],
        hobbies: [
            "", ""
        ],
        skills: [
            "", ""
        ],
        education: [
            {
                institute: "",
        degree: "",
        startDate: "",
        endDate: "",
            },
        ],
        experience: [
            {
                company: "",
                position: "",
                role: "",
                startDateJob: "",
                endDateJob: "",
            },
        ],
        projects: [
            {
                domain: "",
                title: "",
                description: "",
                technology: "",
                links: "",
                team: 0,
                role: "",
                startDate: "",
                endDate: "",
            }
        ]
        
        
    };
    const [details, setDetails] = useState(detailObject);
    const [isActive, setActive] = useState(true);

    const result = () => {
        if(isActive){
            return (<Editor
                details = {details}
                toggleFunction={()=>setActive(false)}
                updateDetails={(value)=>setDetails(value)}/>
                )
        }
        else{
            return (<CVDisplay
                details={details}
                toggleFunction={()=>setActive(true)}
                />
                )
        }
    }

    return (
        <>
            {result()}
        </>
    )
    
    
}

export default Panel;
"use client"

import { useRouter } from "next/navigation";

const About =()=>{
    const router = useRouter();
    return(
        <div>
        <p>About page </p>
        <button onClick={()=>router.push("/about/team")}>Team page</button>
        </div>
        
    )
}

export default About;
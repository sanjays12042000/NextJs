import Link from "next/link";
 const Team =()=>{
    return(
        <div>
        <p>Team page </p>
        <Link href="/about">
            <button>About Page</button>
        </Link>
        </div>
    )
}

export default Team;
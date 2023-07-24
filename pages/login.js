import { useSession, signIn, signOut } from "next-auth/react"

export default function Protected(){
    const {data: session} = useSession()
    if(session){
        return(
            <div>
                <h1>Welcome</h1>
                <button onClick={() => signOut()}>Signout</button>
            </div>
        )
    }

    return(
        <div className="mt-24">
            <h1 className="text-center font-bold mt-12 text-3xl">Auth With Github</h1>
            <button className="mt-6 h-10 px-6 font-semibold rounded-md bg-green-500 text-white" type="submit" onClick={() => signIn()}>Signin</button>
        </div>
    )
}
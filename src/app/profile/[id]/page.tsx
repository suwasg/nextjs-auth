export default function UserProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl text-red-700 font-bold">profile page <span className="p-2 rounded bg-orange-300">{params.id}</span></p>
        </div>
    )
}
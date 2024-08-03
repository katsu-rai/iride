import {auth} from "../../auth";
import {redirect} from "next/navigation";


export default async function Page() {

    const session = await auth()

    if (!session?.user) {
        console.log("User is not logged in")
        redirect("/api/auth/signin?callbackUrl=/")
    }

    return (
        <>
            <h1>{JSON.stringify(session)}</h1>
            <h1>I - Ride</h1>
            <h2>Welcome to our project</h2>
            <p>
                Our project is about a carpooling application that helps you
                find a ride to your destination. You can also offer a ride to others.
            </p>

            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </>
    );
}
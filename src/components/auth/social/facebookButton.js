import { signIn } from "../../../lib/auth"

const handleFacebookLogin = async () => {
    "use server"
    await signIn("facebook")
}

export default function FacebookButton() {
    return (
        <form action={handleFacebookLogin}>
            <button className="w-full flex justify-center py-2 px-4 border border-black rounded-2xl shadow-sm text-sm font-medium text-black hover:text-white bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Iniciar sesión con Facebook</button>
        </form>
    )
}

import { signIn } from "../../../lib/auth"

const handleGoogleLogin = async () => {
    "use server"
    await signIn("google")
}

export default function GoogleButton() {
    return (
        <form action={handleGoogleLogin}>
            <button className="w-full flex justify-center py-2 px-4 border border-black rounded-2xl shadow-sm text-sm font-medium text-black hover:text-white bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Iniciar sesión con Google</button>
        </form>
    )
}

export default function Desktop() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 rounded-lg shadow-lg">

            <h1 className="text-5xl font-extrabold mb-6 text-purple-600">Welcome Back!</h1>
            <form className="flex flex-col items-center w-1/2">
                <div className="mb-4 p-2 border border-gray-300 rounded w-full bg-white text-center">
                    <span className="text-gray-500">Username</span>
                </div>
                <div className="mb-4 p-2 border border-gray-300 rounded w-full bg-white text-center">
                    <span className="text-gray-500">Password</span>
                </div>
                <button 
                    type="button" 
                    className="bg-purple-500 text-white p-2 rounded w-full hover:bg-purple-600 transition duration-300"
                >
                    🎉 Let's Go!
                </button>
            </form>
        </div>
    )

}
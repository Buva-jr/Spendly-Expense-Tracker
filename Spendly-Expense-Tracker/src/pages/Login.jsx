
function Login({onLogin}){

    return(
        <>
        <div className=" min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 w-96">
            <h1 className="text-3xl font-bold text-white mb-2">Spendly.</h1>
            <p className="t-sm text-gray-400 mb-6">Your Personal Finance Dashboard</p>
            <label htmlFor="mail" className="text-white"> Email </label>
            <input className="w-full bg-gray-800 text-white rounded-xl  py-1 outline-none border-gray-700 mb-3 text-center text-sm"  type="text" placeholder="Enter your email" />
            <label htmlFor="password" className="text-white"> Password </label>
            <input className="w-full bg-gray-800 text-white rounded-xl  py-1 outline-none border-gray-700 mb-3 text-center text-sm" type="password"  placeholder="Enter your password"/>
            <button className="w-full bg-violet-600 text-white font-bold py-2 rounded-xl mt-4 text-base " onClick={onLogin}> Sign In</button>
        </div>
        </div> 
        </>
    );
}

export default Login;
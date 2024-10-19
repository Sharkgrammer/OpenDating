function LoginPage() {


    return (
        <div className="h-screen w-screen bg-light flex justify-center items-center p-5">

            <div
                className="w-full h-fit md:max-w-2/3 md:max-h-2/3 xl:max-w-1/2 border-2 border-primary rounded-2xl p-5">

                <h1 className="text-center">Login to OpenDating</h1>

                <div className="flex flex-col gap-2 p-5">
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Password" type="password"/>
                </div>

                <div className="px-5 flex justify-end">
                    <button>Login</button>
                </div>


            </div>

        </div>
    )
}

export default LoginPage

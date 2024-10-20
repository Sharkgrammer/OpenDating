import {useRef} from "react";
import * as network from "../assets/ts/network.ts";
import {setLocalUID} from "../assets/ts/utility.ts";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    async function login() {
        let user = {
            email: emailRef.current ? emailRef.current.value : "",
            password: passwordRef.current ? passwordRef.current.value : ""
        }

        let success: any = await network.login(user);

        if (success) {

            let params = {
                login: true
            }

            let data: any = await network.NetworkRequest("user", "GET", null, params, true)

            if (data) {
                setLocalUID(data.uid);

                navigate("/", {replace: true});
            }

        } else {
            // Failed to login
        }
    }

    return (
        <div className="h-screen w-screen bg-light flex justify-center items-center p-5">

            <div
                className="w-full h-fit md:max-w-2/3 md:max-h-2/3 xl:max-w-1/2 border-2 border-primary rounded-2xl p-5">

                <h1 className="text-center">Login to OpenDating</h1>

                <div className="flex flex-col gap-2 p-5">
                    <input placeholder="Email" type="email" id="email" name="email" ref={emailRef}/>
                    <input placeholder="Password" type="password" id="password" name="password" ref={passwordRef}/>
                </div>

                <div className="px-5 flex justify-end">
                    <button onClick={login}>Login</button>
                </div>


            </div>

        </div>
    )
}

export default LoginPage

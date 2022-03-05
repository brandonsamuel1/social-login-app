import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div class="min-h-screen flex justify-center items-center">
            <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Sign in to your Account</h1>
                </div>
                <div class="space-y-4">
                    <input type="text" placeholder="Email Addres" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input type="text" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                </div>
                <div class="text-center mt-6">
                    <button class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">LOGIN</button>
                    <p class="mt-4 text-sm">Dont Have An Account? <Link to='/register'><span class="underline cursor-pointer"> Register</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
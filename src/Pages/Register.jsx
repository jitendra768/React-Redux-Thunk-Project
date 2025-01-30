/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{ useState } from "react"

const Register = ({onSubmit}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit({email,password,confirmPassword})
        alert({email,password,confirmPassword})
    }
  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="javascript:void(0)"><img
            src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40 inline-block' />
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input name="email" data-testid='email-input' value={email}  onChange={(e)=>setEmail(e.target.value)} type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" data-testid='password-input' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input name="confirmPassword" data-testid='confirmPassword-input' type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div className="!mt-8">
            <button type="submit" data-testid="register-button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
        </form>
      </div>
    </div>
  )
}

export default Register
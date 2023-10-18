import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignUP = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        setRegisterError('')
        setSuccess('')


        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            setRegisterError("Your Password must contain one numeric, one Uppercase Character,  one Special Character and should be 6 at least characters long")
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                //update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
                Navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered relative"
                                    required />
                                <span className="absolute mt-12 ml-56 pt-1 " onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-600 font-bold mt-4" >{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600 font-bold">{success}</p>
                        }
                        <div className="mb-4 p-4 text-center">
                            <p>Already have an account? Please <span className="font-bold"><Link to='/login'>Login</Link> </span> </p>
                            <p className="text-center mb-2">--- OR ---</p>
                            <button className="btn bg-gray-200 capitalize " onClick={handleGoogleSignIn}>Sign In with Google</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;
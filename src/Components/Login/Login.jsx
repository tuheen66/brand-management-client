import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const { googleSignIn, signIn } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        setError('')

        signIn(email, password)
            .then((res) => {
                console.log(res.user)
                event.target.reset()

                navigate(location?.state ? location.state : ('/'))

                Swal.fire({
                    title: 'Success!',
                    text: 'you have logged in successfully',
                    icon: 'info',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(err => {
                setError(err.message)
            })

    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);

                navigate(location?.state ? location.state : ('/'))
                
                Swal.fire({
                    title: 'Success!',
                    text: 'you have logged in successfully',
                    icon: 'info',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="w-10/12 mx-auto">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Log In!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <p className="text-red-400 bg-red-900">{error}</p>
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="mb-4 p-4 text-center">
                            <p>New here? Please <span className="font-bold"><Link to='/signup'>SignUp</Link></span> </p>
                            <p className="text-center mb-2">--- OR ---</p>
                            <button className="btn bg-gray-200 capitalize " onClick={handleGoogleSignIn}>Sign In with Google</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
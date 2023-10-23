/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(res => {
                Swal.fire({
                    title: 'Logout!',
                    text: 'you have been logged out',
                    icon: 'info',
                    confirmButtonText: 'OK'
                })
            })
            .catch(error => {
                console.error(error)
            })
    }


    const navLinks = <>
        <li><NavLink to={('/')}>Home</NavLink></li>
        <li><NavLink to={('/addProduct')}>Add Product</NavLink></li>
        <li><NavLink to={('/myCart')}>My Cart</NavLink></li>
        <li> <NavLink to={('/login')}>Login</NavLink></li>

    </>


    return (
        <div>
            <div className=" mx-auto flex flex-col  md:flex-row  navbar bg-gray-300">
                <div className="md:navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="w-12 rounded-full">
                        <img className="rounded-full" src="https://i.ibb.co/pwYJkw4/logo.png" alt="" />
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-extrabold">Elysian Motorway</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>


                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <p>{user.displayName}</p>
                                <img className="w-8 lg:w-10 md:mx-2 rounded-full" src={user.photoURL} alt="" />
                                <button onClick={handleSignOut} className="btn bg-gray-200 capitalize">Logout</button>
                            </>
                            :
                            <Link to="/login"><button className="btn btn-secondary btn-sm Lg:btn-md capitalize">Login</button></Link>
                    }



                </div>
            </div>


        </div>
    );
};

export default Header;
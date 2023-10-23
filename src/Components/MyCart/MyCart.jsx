import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {

    const cartItems = useLoaderData()

    const [carts, setCarts] = useState(cartItems)

    const handleRemove = _id => {
        console.log(_id)
        fetch(`https://brand-management-server.vercel.app/products/cart/${_id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product removed from cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                    const remaining = carts.filter(cart => cart._id !== _id)
                    setCarts(remaining)
                }
            })

    }

    return (
        <div className=" mx-auto">
            {
                carts.map(cart =>
                    <div key={cart._id} className="grid md:justify-between md:grid-cols-2 mt-12">

                        <div className="lg:mr-12">
                            <img src={cart.image} alt="" />
                        </div>
                        <div className="md:ml-12 lg:space-y-4">
                            <h2 className="text-4xl">Brand: {cart.brand}</h2>
                            <h2 className="text-3xl">Name: {cart.name}</h2>
                            <p className="text-2xl"> Type: {cart.type}</p>
                            <p className="text-2xl font-bold"> Price: {cart.price}</p>


                            <button onClick={() => handleRemove(cart._id)} className=" btn btn-sm btn-primary">Remove</button>

                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default MyCart;
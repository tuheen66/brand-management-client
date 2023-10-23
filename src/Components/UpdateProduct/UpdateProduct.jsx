import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateProduct = () => {
    const product = useLoaderData()

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDes = form.shortDes.value;
        const rating = form.rating.value;

        const updatedProduct = { image, name, brandName, type, price, shortDes, rating }
        console.log(updatedProduct)


        // sending data to server

        fetch(`https://brand-management-server.vercel.app/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }

    console.log(product)
    return (
        <div className="my-12 md:w-4/5 mx-auto bg-gray-400 p-8">
            <h2 className="text-center font-semibold text-3xl my-8">Update Product : {product.name} </h2>
            <form onSubmit={handleUpdateProduct} >
                {/* image row */}
                <div className="md:flex gap-8 mb-8  ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={product.image} placeholder="Enter image URL"
                                name="image"
                                className=" input border 
                                input-bordered w-full" />
                        </label>
                    </div>

                </div>

                {/*  name and brand name row */}
                <div className="md:flex gap-8 mb-8 justify-center ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={product.name} placeholder="Name"
                                name="name"
                                className="input border  
                                input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={product.brandName} placeholder="Brand name"
                                name="brandName"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                {/* form type and price row */}
                <div className="md:flex gap-8 mb-8 justify-center ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type </span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={product.type} placeholder="Type"
                                name="type"
                                className="input border  
                                input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={product.price} placeholder="Price"
                                name="price"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                {/* form short description row */}
                <div className="md:flex gap-8 mb-8 justify-center ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={product.shortDes} placeholder="Short description"
                                name="shortDes"
                                className="input border  
                                input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* rating and add product button row */}
                <div className=" justify-between">
                    <div className="md:flex gap-8 mb-8 justify-center w-full  ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text w-full">Rating: <br /> Low: 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 :High</span>
                            </label>
                            <label className="input-group">

                                <input type="text" defaultValue={product.rating} placeholder="rating"
                                    name="rating"
                                    className="input input-bordered w-1/3" />
                            </label>
                        </div>

                    </div>

                    <input className=" mt-8 justify-end btn btn-accent" type="submit" value="Update Product" />
                </div>

            </form>
        </div>
    );
};

export default UpdateProduct;
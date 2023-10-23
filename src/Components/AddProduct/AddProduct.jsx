import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDes = form.shortDes.value;
        const rating = form.rating.value;

        const newProduct = { image, name, brandName, type, price, shortDes, rating }
        console.log(newProduct)

        // sending data to server

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="my-12  md:w-4/5 mx-auto bg-gray-400 p-8">
            <h2 className="text-center font-semibold text-3xl my-8">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* image row */}
                <div className="md:flex gap-8 mb-8  ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Enter image URL"
                                name="image"
                                className=" input border 
                                input-bordered w-full" />
                        </label>
                    </div>

                </div>

                {/*  name and brand name row */}
                <div className=" md:flex  gap-8 mb-8 justify-center ">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Name"
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

                            <input type="text" placeholder="Brand name"
                                name="brandName"
                                className="input input-bordered w-full md:w-full" />
                        </label>
                    </div>

                </div>

                {/* form type and price row */}
                <div className="md:flex gap-8 mb-8 justify-center ">
                    <div className="form-control w-full  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type </span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Type"
                                name="type"
                                className="input border  
                                input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Price"
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

                            <input type="text" placeholder="Short description"
                                name="shortDes"
                                className="input border  
                                input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* rating and add product button row */}
                <div className=" justify-between">

                    <div className="gap-8 mb-8 justify-center w-full  ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text w-full">Rating: <br /> Low: 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 :High</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="rating"
                                    name="rating"
                                    className="input input-bordered  w-full md:w-1/3" />
                            </label>
                        </div>

                    </div>

                    <input className="text-center mt-8 md:justify-end btn btn-accent" type="submit" value="Add Product" />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;
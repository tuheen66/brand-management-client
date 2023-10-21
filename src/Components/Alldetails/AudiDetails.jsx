import { Link, useLoaderData, useParams } from "react-router-dom";


const AudiDetails = () => {

    const audiDetails = useLoaderData();
    const { name } = useParams()
    const product = audiDetails.find(product => product.name == name)

    const handleAddToCart = () => {
        const image = document.getElementById('image').src;
        const brand = document.getElementById('brand').innerText
        const name = document.getElementById('name').innerText
        const type = document.getElementById('type').innerText
        const price = document.getElementById('price').innerText
        const cart = { image, brand, name, type, price, }
        console.log(cart)

        fetch('http://localhost:5000/products/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }



    return (
        <div>
            <div className="mx-auto w-10/12 mb-8">

                <img id="image" src={product.image} alt="" />
            </div>
            <div>
                <div className="text-start ml-20 mb-12 ">
                    <h2 className="text-4xl font-bold">Brand Name: <span id="brand" >{product.brandName}</span> </h2>
                    <h2 className="text-3xl">Name : <span id="name">{product.name}</span> </h2>
                    <h2 className="text-xl">Type : <span id="type" >{product.type}</span> </h2>
                    <h2 >Price : $ <span id="price">{product.price}</span> </h2>
                    <p>Rating :  {product.rating} / 10 </p>
                    <p className="font-semibold">Short Description : {product.shortDes}</p>


                    <Link><button onClick={handleAddToCart} className="btn btn-secondary mt-8">Add to cart</button></Link>
                </div>
            </div>

        </div>
    );
};

export default AudiDetails;

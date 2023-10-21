import { useLoaderData, useParams } from "react-router-dom";

const HondaDetails = () => {

    const hondaDetails = useLoaderData();
    const { name } = useParams()
    const product = hondaDetails.find(product => product.name == name)

    return (
        <div>
            <div className="mx-auto w-10/12 mb-8">

                <img src={product.image} alt="" />
            </div>
            <div>
                <div className="text-start ml-20 mb-12 ">
                    <h2 className="text-3xl">Name : {product.name}</h2>
                    <h2 className="text-xl">Type : {product.type}</h2>
                    <h2>Price : $ {product.price}</h2>
                    <p>Rating :  {product.rating} / 10 </p>
                    <p className="font-semibold">Short Description : {product.shortDes}</p>
                </div>
            </div>


        </div>
    );
};

export default HondaDetails;
import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {

    const productDetails = useLoaderData();
    const { _id } = useParams();
    const detail = productDetails.find(detail => detail.id === _id)
    console.log(detail)

    return (
        <div>
           
            <img src={detail.image} alt="" />
            <h2>Name : {detail.name}</h2>
            <p>{detail._id}</p>

        </div>
    );
};

export default BrandDetails;
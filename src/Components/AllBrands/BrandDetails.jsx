import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {

    const details = useLoaderData();
    const { id } = useParams();
    const detail = details.find(detail => detail.id == id)
    console.log(details)

    return (
        <div>
            <img src={detail.image} alt="" />
            <h2>Name : {detail.name}</h2>

        </div>
    );
};

export default BrandDetails;
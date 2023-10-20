import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const product = useLoaderData()
    // eslint-disable-next-line no-unused-vars
    const { _id, image, name, brandName, type, price, shortDes, rating } = product

    return (
        <div>
            <h2>Update product : {name}</h2>
        </div>
    );
};

export default UpdateProduct;
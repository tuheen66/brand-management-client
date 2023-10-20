/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CarCard = ({ product }) => {

    // eslint-disable-next-line no-unused-vars
    const { image, name, brandName, type, price, shortDes, rating } = product
    return (
        <div>
            <Link to={brandName}>
                <div className="card text-center bg-gray-300 shadow-xl">
                    <figure><img className="h-2/3" src={image} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">{brandName}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CarCard;
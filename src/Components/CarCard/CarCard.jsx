/* eslint-disable react/prop-types */


const CarCard = ({ product }) => {

    // eslint-disable-next-line no-unused-vars
    const { image, name, brandName, type, price, shortDes, rating } = product
    return (
        <div>
            <div className="card text-center bg-gray-300 shadow-xl">
                <figure><img className="h-2/3" src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{brandName}</h2>


                </div>
            </div>
        </div>
    );
};

export default CarCard;
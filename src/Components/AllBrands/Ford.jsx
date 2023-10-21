import { Link, useLoaderData } from "react-router-dom";


const Ford = () => {
    const fordsProduct = useLoaderData()

    const fords = fordsProduct.filter(fordProduct => fordProduct.brandName == "Ford")

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={fords[0].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={fords[1].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={fords[2].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>


            <div>
                {
                    fords.map(ford =>
                        <div key={ford._id} className="w-4/5 mx-auto my-12 bg-gray-300 py-8 ">
                            <img className="mx-auto" src={ford.image} alt="" />

                            <div className="flex items-center justify-between mt-8">
                                <div className="text-start ml-20 ">
                                    <h2 className="text-3xl">Name : {ford.name}</h2>
                                    <h2 className="text-xl">Type : {ford.type}</h2>
                                    <h2>Price : $ {ford.price}</h2>
                                    <p>Rating :  {ford.rating} / 10 </p>
                                </div>
                                <div className="flex flex-col gap-8 mr-20 mt-4">
                                    <Link to={`/fordDetails/${ford.name}`}>
                                        <button className="btn btn-accent">Details</button>
                                    </Link>
                                    <Link to={`/updateProduct/${ford._id}`}>
                                        <button className=" btn btn-primary">Update</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>







        </div>
    );
};

export default Ford;
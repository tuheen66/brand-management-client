import { Link, useLoaderData } from "react-router-dom";


const Honda = () => {

    const hondasProduct = useLoaderData()
    const hondas = hondasProduct.filter(hondaProduct => hondaProduct.brandName == 'Honda')

    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={hondas[0].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={hondas[1].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={hondas[2].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>


            </div>

            <div>
                {
                    hondas.map(honda =>

                        <div key={honda._id} className="md:w-4/5 mx-auto my-12 bg-gray-300 py-8 ">
                            <img className="mx-auto" src={honda.image} alt="" />

                            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between mt-8">
                                <div className="text-start md:ml-20 ">
                                    <h2 className="text-3xl">Name : {honda.name}</h2>
                                    <h2 className="text-xl">Type : {honda.type}</h2>
                                    <h2>Price : $ {honda.price}</h2>
                                    <p>Rating :  {honda.rating} / 10 </p>
                                </div>
                                <div className="flex flex-row md:flex-col  gap-8 md:mr-20 mt-4">
                                    <Link to={`/hondaDetails/${honda.name}`}>
                                        <button className="btn btn-accent">Details</button>
                                    </Link>
                                    <Link to={`/updateProduct/${honda._id}`}>
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

export default Honda;
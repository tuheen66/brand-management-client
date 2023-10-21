import { Link, useLoaderData } from "react-router-dom";

const BMW = () => {


    const products = useLoaderData();

    const bmws = products.filter(product => product.brandName == "BMW")

    console.log(bmws)
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bmws[0].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bmws[1].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bmws[2].image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div>
                {
                    bmws.map(bmw =>
                        <div key={bmw._id} className="w-4/5 mx-auto my-12 bg-gray-300 py-8 ">
                            <img className="mx-auto" src={bmw.image} alt="" />

                            <div className="flex items-center justify-between mt-8">
                                <div className="text-start ml-20 ">
                                    <h2 className="text-3xl">Name : {bmw.name}</h2>
                                    <h2 className="text-xl">Type : {bmw.type}</h2>
                                    <h2>Price : $ {bmw.price}</h2>
                                    <p>Rating :  {bmw.rating} / 10 </p>
                                    <p>{bmw._id}</p>
                                </div>
                                <div className="flex flex-col gap-8 mr-20 mt-4">

                                    <Link to={`/bmwDetails/${bmw.name}`}><button className="btn btn-accent">Details</button></Link>

                                    <button className=" btn btn-primary">Update</button>

                                </div>
                            </div>
                        </div>
                    )
                }

                
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BMW;
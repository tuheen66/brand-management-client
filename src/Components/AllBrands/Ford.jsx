import { useLoaderData } from "react-router-dom";


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

                <div className="w-4/5 mx-auto my-12 bg-gray-300 py-8 ">
                    <img className="mx-auto" src={fords[2].image} alt="" />

                    <div className="flex items-center justify-between mt-8">
                        <div className="text-start ml-20 ">
                            <h2 className="text-3xl">Name : {fords[2].name}</h2>
                            <h2 className="text-xl">Type : {fords[2].type}</h2>
                            <h2>Price : $ {fords[2].price}</h2>
                            <p>Rating :  {fords[2].rating} / 10 </p>
                        </div>
                        <div className="flex flex-col gap-8 mr-20 mt-4">
                            <button className="btn btn-accent">Details</button>
                            <button className=" btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
                <div className="w-4/5 mx-auto my-12 bg-gray-300 py-8 ">
                    <img className="mx-auto" src={fords[1].image} alt="" />

                    <div className="flex items-center justify-between mt-8">
                        <div className="text-start ml-20 ">
                            <h2 className="text-3xl">Name : {fords[1].name}</h2>
                            <h2 className="text-xl">Type : {fords[1].type}</h2>
                            <h2>Price : $ {fords[1].price}</h2>
                            <p>Rating :  {fords[1].rating} / 10 </p>
                        </div>
                        <div className="flex flex-col gap-8 mr-20 mt-4">
                            <button className="btn btn-accent">Details</button>
                            <button className=" btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="w-4/5 mx-auto my-12 bg-gray-300 py-8 ">
                    <img className="mx-auto" src={fords[3].image} alt="" />

                    <div className="flex items-center justify-between mt-8">
                        <div className="text-start ml-20 ">
                            <h2 className="text-3xl">Name : {fords[3].name}</h2>
                            <h2 className="text-xl">Type : {fords[3].type}</h2>
                            <h2>Price : $ {fords[3].price}</h2>
                            <p>Rating :  {fords[3].rating} / 10 </p>
                        </div>
                        <div className="flex flex-col gap-8 mr-20 mt-4">
                            <button className="btn btn-accent">Details</button>
                            <button className=" btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
                <div className="w-4/5 mx-auto my-12 bg-gray-300 py-8 ">
                    <img className="mx-auto" src={fords[0].image} alt="" />

                    <div className="flex items-center justify-between mt-8">
                        <div className="text-start ml-20 ">
                            <h2 className="text-3xl">Name : {fords[0].name}</h2>
                            <h2 className="text-xl">Type : {fords[0].type}</h2>
                            <h2>Price : $ {fords[0].price}</h2>
                            <p>Rating :  {fords[0].rating} / 10 </p>
                        </div>
                        <div className="flex flex-col gap-8 mr-20 mt-4">
                            <button className="btn btn-accent">Details</button>
                            <button className=" btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default Ford;
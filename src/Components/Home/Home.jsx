import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import CarCard from "../CarCard/CarCard";
import Slider from "../Slider/Slider";


const Home = () => {

    const products = useLoaderData()

    const loadCars = async () => {
        const cars = await fetch('https://brand-management-server.vercel.app/products')
        const data = await cars.json()
        console.log(data)
    }

    loadCars()

    return (

        <div className="">

            <Banner></Banner>
            <img className="w-8/12 mx-auto mt-8" src="https://i.ibb.co/qY1RDqM/about.png" alt="" />
            <h2 className="text-2xl font-semi-bold">About Us</h2>
            <p className="text-justify">
                At Elysian Motorway, we are more than just a car dealership; we are your ultimate destination for exceptional automobiles. With a passion for excellence and a commitment to serving our customers, we bring you the finest selection of branded cars, including BMW, Audi, Ford, Tesla, Toyota, Honda, and more.
            </p>
            <br />
            <p className="text-justify">
                Our mission is to redefine the car buying experience, ensuring that every visit to our showroom is an unforgettable journey. We offer a carefully curated inventory of top-quality vehicles, each meticulously inspected to meet the highest standards. Whether you are in pursuit of German engineering, American muscle, eco-friendly innovation, or Japanese reliability, we have the perfect vehicle to match your aspirations.
            </p>
            <br />
            <p className="text-justify">
                Our dedicated and knowledgeable team of automotive enthusiasts is here to assist you every step of the way. We understand that buying a car is a significant decision, and we are here to provide expert guidance, answer your questions, and make the process as seamless as possible.
            </p>
            <br />


            <h2 className="text-4xl font-bold text-center mt-8 uppercase">Our car collection</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {products.map(product => <CarCard key={product.id} product={product}></CarCard>
                )}
            </div>

            <Slider></Slider>


            <Footer></Footer>

        </div>
    );
};

export default Home;
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slider = () => {
    return (
        <div>
            <Carousel responsive={responsive}>
                <div className="w-3/4"><img src="https://i.ibb.co/HNqx0XC/Audi.png" alt="" /></div>
                <div className="w-3/4"><img src="https://i.ibb.co/JcpQ7xz/Toyota.png" alt="" /></div>
                <div className="w-3/4"><img src="https://i.ibb.co/LpMzfj0/Ford.png" alt="" /></div>
                <div className="w-3/4"><img src="https://i.ibb.co/Wx3g2cY/Tesla.png" alt="" /></div>
                <div className="w-3/4"><img src="https://i.ibb.co/zRCW6Bk/Honda.png" alt="" /></div>
                <div className="w-3/4"><img src="https://i.ibb.co/72q5MjK/bmw.png" alt="" /></div>
            </Carousel>
        </div>
    );
};

export default Slider;
import videoHomePage from "../../assets/homepageVideo.mp4";
import "./Home.scss";

const Home = () => {
    return (
        <>
            <div id="container-home" >
                <div className="container">
                    <h1>Home</h1>
                    <video autoPlay muted loop width="600px">
                        <source src={videoHomePage} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    );
};

export default Home;

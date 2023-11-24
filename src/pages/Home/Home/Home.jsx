import { Helmet } from "react-helmet-async";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";
import ContactCard from "../ContactCard/ContactCard";


const Home = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>Doc House | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />

            </Helmet>
            < Hero ></Hero >
            <Service></Service>
            <ContactCard></ContactCard>
        </div >
    );
};

export default Home;
import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.css'


const projects = [{
    _id: 1, name: "Digital Device Servicings", live_site: " https://digital-device-servicing.web.app/", github: "https://github.com/Md-Kais/digital-device_servicing_client", description: `• A website for Technician store where user can repair their electronic devices.\n• Users and Admin can sign up and log in to this website using google.Anyone cannot go to some pages without login, which is developed by React Router.\n• There are dashboards for User and Admin.\n• Admin can check their work progress and user check their order progress.\n• Front - end Technology: Material Ui, React.js, HTML5, CSS3. \n• Back - end Technology: NODE.js, Express.js, MongoDB \n`, img: "https://i.ibb.co/3Rzt52n/servicing.png", category: "MERN",
}

    , {
    _id: 2, name: "Dhaka Fresh Foods", description: `• A website for Dhaka Fresh Food Lovers,where user can find Best foods,they can Order them
and buy them.Website will remember user’s previous cart. \n • Users and Admin can sign up and log in to this website using google. Anyone cannot go to some pages without login, which is developed by React Router. \n • Admin can manage their food items for the store, they can add and delete products from the store. \n • Front-end Technology : Material Ui, React.js , HTML5 , CSS3. \n • Back-end Technology : NODE.js , Express.js, MongoDB.\n`, live_site: "https://dhakafreshfoods.web.app/", github: "https://github.com/Md-Kais/dhaka_fresh_foods_client", img: "https://i.ibb.co/pWX8ZL5/fresh.png", category: "React Js",
}

    , {
        _id: 3, name: "Football Hub", description: `• A website for knowing 20 different football league names across the world.\n • Click Explore to explore about specific league information.\n• Go to their Facebook, website, Twitter, YouTube channel through the provided button at the bottom of the page.\n• Front-end Technology : Material Ui, React.js , HTML5 , CSS3.\n`, live_site: "https://objective-babbage-e50248.netlify.app/", github: "https://github.com/Md-Kais/Football_Hub", img: "https://i.ibb.co/km94KvB/football.png", category: "Javascript",
}

    , {
        _id: 4, name: "Dhaka Riders", description: `• A website for checking where how many transport available for going one place to another.\n • Users can sign up and log in to this website using google. Anyone cannot go to sopages without login, which is developed by React Router.\n • User can check available transport and their price by using google map.\n• Front-end Technology : Material Ui, React.js , HTML5 , CSS3.\n • Back-end Technology : NODE.js , Express.js, MongoDB\n`, live_site: " https://auth-test-b6ee2.web.app/", github: "https://github.com/Md-Kais/Dhaka-Riders", img: "https://i.ibb.co/pfbZVY3/riders.png", category: "MERN",
}

];
const ProjectCard = () => {
    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center">
                    {
                        projects.map((e) => {
                            return (
                                <>
                                    <div className="col-lg-7 ">
                                        <img className="img-fluid" src={e.img} alt={e.name} width="98%" height="auto" style={{ borderRadius: "20px" }} />
                                    </div>
                                    <div className=" col-lg-5 mt-2">
                                        <Card style={{ width: '100%', borderRadius: "20px" }}>

                                            <Card.Body className="DarkDark" style={{ borderRadius: "20px" }}>

                                                <div className="d-flex mb-2" >


                                                    <div style={{ margin: 'auto 0' }}>
                                                        <h1 className=" boldText" style={{ color: 'rgb(110,173,118)' }}>
                                                            {e.name}

                                                        </h1>


                                                    </div>


                                                </div>
                                                <Card.Text className="mb-4">
                                                    <h6 className="boldText mainTextCol">{e.highlightedText}</h6>
                                                    <small className="text-secondary new-line">{e.description}
                                                    </small>
                                                </Card.Text>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <button className='submit-btn' onClick={() => window.open(e.live_site, "_blank")}>Live site</button>
                                                    <br />
                                                    <button className='submit-btn' onClick={() => window.open(e.github, "_blank")}>Github</button>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                        <br />
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
            <div className="marginProjectName">

                <h1 className="mainTextCol mb-4" style={{ color: "#fff" }}>&lt;/Project&gt;</h1>
            </div>

        </>

    );
};

export default ProjectCard;

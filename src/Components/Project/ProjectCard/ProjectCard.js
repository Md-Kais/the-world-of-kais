import React from 'react';
import { Card } from 'react-bootstrap';
const projects = [{
    _id: 1, name: "Digital Device Servicings", live_site: " https://digital-device-servicing.web.app/", github: " https://github.com/Md-Kais/digital_device_servicing_server", description: "A website for Technician store where user can repair their electronic devices.", img: "https://i.ibb.co/P4TQmHj/digital-Device.png", category: "MERN",
}

    , {
        _id: 2, name: "Dhaka Fresh Foods", description: "A website for Dhaka Fresh Food Lovers, where users can find the Best foods, they can Order them and buy them. The website will remember the user’s previous cart.", live_site: " dhakafreshfoods.web.app/", github: "https://github.com/Md-Kais/dhaka_fresh_foods_client", img: "https://i.ibb.co/bdXrkHm/freshfoods.jpg", category: "React Js",
}

    , {
    _id: 3, name: "Football Hub", description: "A website for knowing 20 different football league names across the world.This site is developed by html,css and javascript and rest api. Click Explore to explore about specific league information.", live_site: "https://objective-babbage-e50248.netlify.app/", github: "https://github.com/Md-Kais/Football_Hub", img: "https://i.ibb.co/DQSb1b0/football.jpg", category: "Javascript",
}

    , {
    _id: 4, name: "Dhaka Riders", description: "A website for checking where how many transports available for going one place to another.", live_site: " https://auth-test-b6ee2.web.app/", github: "https://github.com/Md-Kais/Dhaka-Riders", img: "https://i.ibb.co/KwvMs9P/riders.jpg", category: "MERN",
}

];
const ProjectCard = () => {
    return (
        <div className="container">
            <div className="row ms-auto me-auto">
                {
                    projects.map((e) => {
                        return (
                            <div className="col-md-12 col-lg-4 mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                <Card className="borderDark" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <div>
                                            <img src={e.img} alt={e.name} width="100%" height="250px" />
                                        </div>
                                        <div className="d-flex mb-2" >
                                           
                                            
                                            <div style={{ margin: 'auto 0' }}>
                                                <h1 className="text-primary boldText" >
                                                    {e.name}
                                                   
                                                </h1>


                                            </div>


                                        </div>
                                        <Card.Text className="mb-4">
                                            <h6 className="boldText mainTextCol">{e.highlightedText}</h6>
                                            <small className="text-secondary">Some quick example text to build on the card title and make up the bulk
                                       </small>
                                        </Card.Text>
                                        <button className='submit-btn' onClick={() => window.open(e.live_site, "_blank")}>Live site</button>
                                        <br/>
                                        <button className='submit-btn' onClick={() => window.open(e.github, "_blank")}>Github</button>

                                    </Card.Body>
                                </Card>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProjectCard;

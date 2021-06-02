import React from 'react';
import { Card } from 'react-bootstrap';
import './BlogCard.css'
const cardInfo = [

    {
        'name': 'medium.com',
        'highlightedText': 'All Fundamentals About JavaScript',
        'date': '6 May,2021',
        'image': 'https://i.ibb.co/h2b8hwp/Ellipse-1.png',
        'description':'JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape.JavaScript was first released with Netscape 2 early in 1996. It was originally going to be called...',
        'link':'https://mdkais3.medium.com/all-fundamentals-about-javascript-21217754de7a'
    },
    {
        'name': 'dev.com',
        'highlightedText': 'Basic Idea about Block Bindings and Function In JavaScript',
        'date': '7 May,2021',
        'image': 'https://i.ibb.co/W2srk0X/Ellipse-2.png',
        'link':'https://mdkais3.medium.com/basic-idea-about-block-bindings-and-function-in-javascript-250a4b8a6700',
        'description':'This blog I wanna tell about basic idea about block Bindings, mean that , binding variable in the scope and little bit idea about Function and hoisting.Let ...'
    },
    {
        'name': 'Kais.com',
        'highlightedText': 'No Idea about React.JS?',
        'date': '8 May,2021',
        'link':'https://mdkais3.medium.com/no-idea-about-react-js-c84136f5952f',
        'description':'Before we start we assume that , you have a basic about HTML5, CSS , JavaScript and Document Object Model(DOM API) and JSX. Let’s deep dive into this topic. If don\'t have enough pr...',
        'image': 'https://i.ibb.co/D5M2vd7/Ellipse-3.png'
    }
]
const BlogCard = () => {
    let i=0;
    return (
        <>
            <div className="container">
                <div className="row ms-auto me-auto">
                    {
                        cardInfo.map((e) => {
                            return (
                                <div className="col-md-12 col-lg-4 mt-3" style={{ display: 'flex', justifyContent: 'center' }} key={i}>
                                    
                                    <Card className="borderDark" style={{ width: '100%' }}>

                                        <Card.Body className="blog-back">
                                         
                                            <Card.Text className="mb-4">
                                                <h3 className="boldText mainTextCol">{e.highlightedText}</h3>
                                                <h6 style={{ color:'hsla(0,0%,100%,0.5)'}}>{e.date}</h6>
                                                <p className="text-secondary">{e.description}
                                       </p>
                                            </Card.Text>
                                            <button className='submit-btn' onClick={() => window.open(e.link, "_blank")}>Read more</button>

                                        </Card.Body>
                                    </Card>
                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="marginProjectName mt-5">

                <h1 className="mainTextCol mb-4 mt-5" style={{ color: "#fff" }}>&lt;/Blog&gt;</h1>
            </div>
        </>
    );
};

export default BlogCard;

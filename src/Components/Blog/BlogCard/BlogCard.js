import React from 'react';
import { Card } from 'react-bootstrap';
const cardInfo = [

    {
        'name': 'medium.com',
        'highlightedText': 'Use AMD for better work efficiency',
        'date': '29 February,2020',
        'image': 'https://i.ibb.co/h2b8hwp/Ellipse-1.png'
    },
    {
        'name': 'dev.com',
        'highlightedText': 'AMD is better than INTEL and Why?',
        'date': '9 February,2020',
        'image': 'https://i.ibb.co/W2srk0X/Ellipse-2.png'
    },
    {
        'name': 'Kais.com',
        'highlightedText': 'How to manage phone Drop',
        'date': '2 February,2020',
        'image': 'https://i.ibb.co/D5M2vd7/Ellipse-3.png'
    }
]
const BlogCard = () => {
    return (
        <div className="container">
            <div className="row ms-auto me-auto">
                {
                    cardInfo.map((e) => {
                        return (
                            <div className="col-md-12 col-lg-4 mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                <Card className="borderDark" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <div className="d-flex mb-2" >
                                           
                                            <div style={{ margin: 'auto 0' }}>
                                                <small className="text-primary boldText" >
                                                    {e.name}
                                                    <br /> <p className="text-secondary" style={{ fontSize: "6px", fontWeight: '100' }}>
                                                        {e.date}
                                                    </p>
                                                </small>


                                            </div>


                                        </div>
                                        <Card.Text className="mb-4">
                                            <h6 className="boldText mainTextCol">{e.highlightedText}</h6>
                                            <small className="text-secondary">Some quick example text to build on the card title and make up the bulk
                                       </small>
                                        </Card.Text>
                                        <button className='submit-btn'>Read more</button>

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

export default BlogCard;

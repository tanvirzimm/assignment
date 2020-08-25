import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faBriefcase, faToolbox } from '@fortawesome/free-solid-svg-icons'


import './Home.css'

const Home = () => {
    return (

        <div>
            <div className="banner">
                <h1 className='greet'>WELCOME</h1>

                <p className='under-greet'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, id laudantium. Id incidunt vitae, voluptatum numquam inventore accusantium! Quaerat delectus deserunt aliquam expedita placeat sed dignissimos nam veritatis vel a?
        </p>
                <button className="contact">CONTACT US</button>
            </div>
            <div className='container'>


                <div className="service" style={{ paddingTop: "70px" }}>
                    <h1 style={{ textAlign: "center", color: "#6EB6DC", fontSize: "35px", fontFamily: "arial" }}>Our Services</h1>

                    <p style={{ maxWidth: "400px", margin: "30px auto", textAlign: "center" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, id laudantium. Id incidunt vitae
                </p>
                    <div className="row">
                        <div className="col-md-4" style={{ textAlign: "center" }}>
                            <FontAwesomeIcon icon={faChartPie} style={{ color: "#6EB6DC", fontSize: "80px" }} />
                            <h4 style={{ color: "#6EB6DC", margin: "20px 0" }}>Service 1</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae reprehenderit quis, a, ipsum doloribus nisi molestias voluptas quam fuga itaque. Ut autem atque laboriosam illo, excepturi id. Fuga, repellendus!</p>
                        </div>
                        <div className="col-md-4" style={{ textAlign: "center" }}>
                            <FontAwesomeIcon icon={faBriefcase} style={{ color: "#6EB6DC", fontSize: "80px" }} />
                            <h4 style={{ color: "#6EB6DC", margin: "20px 0" }}>Service 2</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae reprehenderit quis, a, ipsum doloribus nisi molestias voluptas quam fuga itaque. Ut autem atque laboriosam illo, excepturi id. Fuga, repellendus!</p>
                        </div>
                        <div className="col-md-4" style={{ textAlign: "center" }}>
                            <FontAwesomeIcon icon={faToolbox} style={{ color: "#6EB6DC", fontSize: "80px" }} />
                            <h4 style={{ color: "#6EB6DC", margin: "20px 0" }}>Service 3</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae reprehenderit quis, a, ipsum doloribus nisi molestias voluptas quam fuga itaque. Ut autem atque laboriosam illo, excepturi id. Fuga, repellendus!</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
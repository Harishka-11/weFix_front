import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import about2 from '../images/about2.jpeg';

const AppAbout = () => {
  return (
    <section id="about" className='block about-block'>
        <Container fluid>
            <div className='title-holder'>
                 <h2>About Us</h2>
                    <div className='subtitle'>
                       learn more about us
                    </div>
            </div>
            <Row>
               <Col sm={6}>
                 <Image src={about2}/>
               </Col>
               <Col sm={6}>
                 <p><b>
                 Welcome to We Fix
                 </b></p>
                 <p>Your premier destination for expert computer parts repair. With a dedicated team of skilled technicians, we specialize in diagnosing and fixing a wide range of hardware issues, from malfunctioning motherboards to damaged screens. Our commitment to excellence is reflected in our transparent pricing, honest assessments, and unwavering focus on customer satisfaction. Backed by years of experience in the industry, we ensure that your devices are in capable hands. Whether it's a minor repair or a major overhaul, trust us to provide reliable solutions that get your technology back to optimal performance. Choose We Fix for all your computer parts repair needs and experience the difference firsthand.
                 
                 </p>
               </Col>
            </Row>
         </Container>
    </section>
  )
}

export default AppAbout
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../images/recovery.jpg'),
    title: 'Data Recovery Service',
    subtitle: 'Rescuing Your Valuable Data'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../images/clean.webp'),
    title: 'Cleanup & Tuning Service',
    subtitle: 'Optimize Your System'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../images/hardware.jpg'),
    title: 'Hardware Repairing Service',
    subtitle: 'Restoring Functionality, One Component at a Time'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../images/virus.webp'),
    title: 'Virus & Spyware Removal Service',
    subtitle: 'Protecting Your Digital Domain'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../images/screen.webp'),
    title: 'Screen Repair/Replacement Service',
    subtitle: 'Restore Clarity'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../images/network.webp'),
    title: 'Networking Service',
    subtitle: 'Connecting You Seamlessly'
  }
]


function AppServices() {
    return (
      <section id="services" className="block works-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our Services</h2>
            <div className="subtitle">experts solution </div>
          </div>
          <Row className='portfoliolist'>
            {
              worksData.map(works => {
                return (
                  <Col sm={4} key={works.id}>
                    <div className='portfolio-wrapper'>
                      <a href={works.link}>
                        <div className="image-container"> {/* Add a container for the image */}
                          <Image src={works.image} className="img-fluid" /> {/* Add img-fluid class */}
                        </div>
                        <div className='label text-center'>
                          <h3>{works.title}</h3>
                          <p>{works.subtitle}</p>
                        </div>
                      </a>
                    </div>
                  </Col>
                );
              })
            }
          </Row>
          
        </Container>  
      </section>
    );
  }
  


export default AppServices
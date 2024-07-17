import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



const AppContact = () => {
  return (
    <section id='contact' className='block contact-block'>
        <Container fluid>
        <div className='title-holder'>
            <h2>Contact Us</h2>
              <div className='subtitle'>get connected with us</div>
        </div>
        <Form className='contact-form'>
      <Row>
        <Col sm={4}>
          <Form.Control type="text" placeholder="Enter your full name" required/>
        </Col>
        
        <Col sm={4}>
          <Form.Control type="email" placeholder="Enter your email id" required />
        </Col>
        <Col sm={4}>
          <Form.Control type="tel" placeholder="Enter your contact no" required />
        </Col>
      </Row>
      <Row>
      <Col sm={12}>
          <Form.Control as="textarea" placeholder="Enter your message" required/>
        </Col>
      </Row>

      <div className='btn-holder'>
        <Button type='submit'>Submit</Button>
      </div>
    </Form>
        </Container>
        <Container fluid>
           <div className='contact-info'>
              <ul>
                <li>
                <i className="fas fa-envelope"></i>
                weFix2001@gmail.com
                </li>

                <li>
                <i className="fas fa-phone"></i>
                    +94777200020
                </li>

                <li>
                <i className="fas fa-map-marker-alt"></i>
                Wattala,Sri Lanka
                </li>

              </ul>
           </div>
        </Container>
    </section>
  )
}

export default AppContact
import React from 'react'
import Container from 'react-bootstrap/Container';


const AppFooter = () => {
  return (
  <Container fluid>
      <div className='copyright'>© 2001 Wefix. All Right Reserved.</div>
      <div className='socials'>
      <ul>
      
      <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
      <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>


      </ul>
      </div>
      
  </Container>
)
}

export default AppFooter
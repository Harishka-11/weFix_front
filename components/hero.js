import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../images/repair.jpg'),
    title: 'The repairing Universe',
    description: 'encapsulates our ethos of restoration, renewal, and resilience. In a world filled with constant change and challenges, our website stands as a beacon of hope and possibility!',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../images/repair1.webp'),
    title: 'We Keep Your Digital World Running Smoothly',
    description: 'Embrace seamless digital experiences with our expert solutions. From maintaining your online presence to optimizing performance, we ensure your digital world operates effortlessly, empowering you to focus on what matters most!',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../images/repair3.jpg'),
    title: 'WeFix Where Computers Get Back on Track ',
    description: ' With our expert team and tailored solutions, we aim to restore your devices to optimal performance, offering peace of mind and efficiency in every repair. Trust WeFix to navigate your technological challenges and bring your devices back to life with precision and care!',
    link: 'https://www.twitter.com'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2 className='hero title'>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;
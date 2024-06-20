import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2><hr></hr>
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                
                                <h5>Programming Languages</h5><br></br>
                                <p>C ,C++,Python,HTML,<br></br>CSS,Javascript,<br></br>Bootstrap,Tailwind CSS  </p>                            </div>
                            <div className="item">
                                <h5>Frameworks and Libraries</h5><br></br>
                                <p>React, Node.js</p>
                            </div>
                            <div className="item">

                                <h5>Database</h5><br></br>
                                <p>MySQL , PostgreSQL,<br></br>Firebase</p>
                            </div>
                            <div className="item">
                                
                                <h5>Tools</h5><br></br>
                                <p>Git, Canva</p>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

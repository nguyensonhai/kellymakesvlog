import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/kelly/qs/1.jpg";
import image2 from "assets/img/kelly/qs/2.jpg";
import image3 from "assets/img/kelly/qs/3.jpg";
import image4 from "assets/img/kelly/qs/4.jpg";
import image5 from "assets/img/kelly/qs/5.jpg";
import image6 from "assets/img/kelly/qs/6.jpg";
import image7 from "assets/img/kelly/qs/7.jpg";
import image8 from "assets/img/kelly/qs/8.jpg";
import image9 from "assets/img/kelly/qs/9.jpg";
import image10 from "assets/img/kelly/qs/10.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  {/* <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div> */}
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image4} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image5} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image6} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image7} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image8} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img src={image9} alt="Third slide" className="slick-image" />
                </div>
                <div>
                  <img
                    src={image10}
                    alt="Third slide"
                    className="slick-image"
                  />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

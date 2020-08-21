import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Image } from "react-bootstrap";
import YouTube from "react-youtube";
import styles from "assets/jss/material-kit-react/views/components.js";
import "assets/css/styles.css";
import "assets/css/font.css";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      color: "white",
    },
  };
  const youtubeId = ["jLzFDBPszkg", "-goXFs4HrRs", "66yQk4PGA7M"];
  const renderYoutube = youtubeId.map((data) => (
    <YouTube
      apiKey="AIzaSyAUnGug9BoGxY8Sh12_g4GYXt2BGgdkMks"
      videoId={data}
      opts={opts}
      loop
      play
      fullscreen
      fluid
      className={"youtubePlayer"}
    />
  ));
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Header
        brand="kelly makes vlog"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "white",
        }}
        {...rest}
      />
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className="avatarContainer">
                <div>
                  <Image
                    src={require("../../assets/img/kelly/kelly_a.jpg")}
                    roundedCircle
                    fluid
                    className={"avatar"}
                  />
                </div>
                <div>
                  <div className={classes.brand}>
                    <h1 className="title">kelly le</h1>
                    <h3 className="subtitle">
                      "i'm just a girl, head-to-toe vietnamese. i ramble music
                      stuff all the time."
                    </h3>
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript /> */}
        {/* <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
        <div className={"sliderContainer"}>
          <section id="sliderK">
            <input type="radio" name="slider" id="s1" />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />
            <label for="s1" id="slide1"></label>
            <label for="s2" id="slide2"></label>
            <label for="s3" id="slide3"></label>
            <label for="s4" id="slide4"></label>
            <label for="s5" id="slide5"></label>
          </section>
          <div
            style={{
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 10,
              width: "80%",
            }}
          >
            <a class="cta">
              <span id="spandark">my hobbies</span>
            </a>
          </div>
          <div className="hobbies">
            <a data-title="vlogging" className="hobbiesSvg">
              <img
                src={require("../../assets/img/icons/laptop.svg")}
                className={"trans"}
              />
              <span className="spanHobbies">
                {" "}
                vlogging <br /> <br />
              </span>
            </a>

            <a data-title="blogging" className="hobbiesSvg">
              <img
                src={require("../../assets/img/icons/notepad.svg")}
                className={"trans"}
              />
              <span className="spanHobbies">
                {" "}
                blogging <br /> <br />
              </span>
            </a>
            <a data-title="listening to music" className="hobbiesSvg">
              <img
                src={require("../../assets/img/icons/headphones.svg")}
                className={"trans"}
              />
              <span className="spanHobbies">
                {" "}
                listening to music <br /> <br />
              </span>
            </a>
            <a data-title="playing piano" className="hobbiesSvg">
              <img
                src={require("../../assets/img/icons/piano.svg")}
                className={"trans"}
              />
              <span className="spanHobbies">
                {" "}
                playing piano <br /> <br />
              </span>
            </a>
            <a data-title="songwritting" className="hobbiesSvg">
              <img
                src={require("../../assets/img/icons/music.svg")}
                className={"trans"}
              />
              <span className="spanHobbies">
                {" "}
                songwritting <br /> <br />
              </span>
            </a>
            <a data-title="running" className="hobbiesSvg">
              <img
                src={require("../../assets/img/icons/sneaker.svg")}
                className={"trans"}
              />
              <span className="spanHobbies">
                {" "}
                running <br /> <br />
              </span>
            </a>
            <a data-title="reading" className="hobbiesSvg">
              <img
                src={require("../../assets/img/icons/book.svg")}
                className={"trans"}
              />
              <span className="spanHobbies">
                {" "}
                reading <br /> <br />
              </span>
            </a>
          </div>
        </div>

        {/* <SectionCarousel /> */}
        <div style={{ paddingTop: 30, paddingLeft: 10 }}>
          <a
            href="https://www.youtube.com/kellythevietnamese"
            class="cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span id="spandark">My lastest reactions</span>
            {/* <svg id="svgdark" width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg> */}
          </a>
        </div>
        <div className={"youtube"}>{renderYoutube}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

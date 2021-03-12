const slideData = [
  {
    index: 0,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F1.jpg?alt=media&token=e87ff59b-4921-484c-a2ed-bac74ec9ba7c",
  },
  {
    index: 1,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F2.jpg?alt=media&token=832c94fc-c4b7-41b9-9ff0-5faada923c94",
  },
  {
    index: 2,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F3.jpg?alt=media&token=12d65522-104f-493c-a5af-02167179e6d0",
  },
  {
    index: 3,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F4.jpg?alt=media&token=87b19b31-b966-4b11-b258-792ece204cda",
  },
  {
    index: 4,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F5.jpg?alt=media&token=8d1b11da-5c0f-4f21-8349-85e70010d24b",
  },
  {
    index: 5,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F6.jpg?alt=media&token=b8688e48-e8c6-4516-90bc-89f699c2303c",
  },
  {
    index: 6,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F7.jpg?alt=media&token=cf5d1920-5973-4ab4-8b00-a64ea200d913",
  },

  {
    index: 7,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F8.jpg?alt=media&token=40aa107b-4995-4dc9-bd31-de6e883f6be5",
  },
  {
    index: 8,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F9.jpg?alt=media&token=6b35bdb7-1b11-4210-bb38-1989afe45f27",
  },
  {
    index: 9,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F10.jpg?alt=media&token=ca69c91f-5508-457e-9511-dde19f1aa42c",
  },
  {
    index: 10,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F11.jpg?alt=media&token=ffc65a03-2a1b-405a-957b-397bc8121434",
  },
  {
    index: 11,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F12.jpg?alt=media&token=99ca8ad0-cf19-443d-b2c7-7ac8086add57",
  },
  {
    index: 12,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F13.jpg?alt=media&token=ecf09daf-4e93-451a-a027-9d8008303561",
  },
  {
    index: 13,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F14.jpg?alt=media&token=622fadfa-0a40-4878-b4a8-126079b14e44",
  },
  {
    index: 14,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F15.jpg?alt=media&token=675cc08e-9997-48e9-bc70-69a4498bcfb6",
  },
  {
    index: 15,
    src:
      "https://firebasestorage.googleapis.com/v0/b/kelly-makes-vlog.appspot.com/o/insta%2F16.jpg?alt=media&token=c64f8dd2-a3dd-4960-b816-44afd4a93ee2",
  },
];

// =========================
// Slide
// =========================

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleMouseMove(event) {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty("--x", 0);
    this.slide.current.style.setProperty("--y", 0);
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(slideData.indexOf(this.props.slide));
  }

  imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  render() {
    const { src, button, headline } = this.props.slide;
    const index = slideData.indexOf(this.props.slide);
    const current = this.props.current;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";

    return React.createElement(
      "li",
      {
        ref: this.slide,
        className: classNames,
        onClick: this.handleSlideClick,
        onMouseMove: this.handleMouseMove,
        onMouseLeave: this.handleMouseLeave,
      },

      React.createElement(
        "div",
        { className: "slide__image-wrapper" },
        React.createElement("img", {
          className: "slide__image",
          alt: headline,
          src: src,
          onLoad: this.imageLoaded,
        })
      ),

      React.createElement(
        "article",
        { className: "slide__content" },
        React.createElement("h2", { className: "slide__headline" }, headline)
      )
    );
  }
}

// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return React.createElement(
    "button",
    { className: `btn btn--${type}`, title: title, onClick: handleClick },
    React.createElement(
      "svg",
      { className: "icon", viewBox: "0 0 24 24" },
      React.createElement("path", {
        d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
      })
    )
  );
};

// =========================
// Slider
// =========================

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 0 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
  }

  handlePreviousClick() {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    });
  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    });
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      });
    }
  }

  render() {
    const { current, direction } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    };

    return React.createElement(
      "div",
      { className: "slider", "aria-labelledby": headingId },
      React.createElement(
        "ul",
        { className: "slider__wrapper", style: wrapperTransform },
        React.createElement(
          "h3",
          { id: headingId, class: "visuallyhidden" },
          heading
        ),

        slides.map((slide) => {
          return React.createElement(Slide, {
            key: slide.index,
            slide: slide,
            current: current,
            handleSlideClick: this.handleSlideClick,
          });
        })
      ),

      React.createElement(
        "div",
        { className: "slider__controls" },
        React.createElement(SliderControl, {
          type: "previous",
          title: "Go to previous slide",
          handleClick: this.handlePreviousClick,
        }),

        React.createElement(SliderControl, {
          type: "next",
          title: "Go to next slide",
          handleClick: this.handleNextClick,
        })
      )
    );
  }
}

ReactDOM.render(
  React.createElement(Slider, {
    heading: "Instagram Slider",
    slides: slideData.reverse(),
  }),
  document.getElementById("slider")
);

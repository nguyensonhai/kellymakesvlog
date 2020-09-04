const slideData = [
  {
    index: 0,
    src:
      "https://scontent-hkg4-1.cdninstagram.com/v/t51.2885-15/e35/100910954_1915739358557619_8902084878806473936_n.jpg?_nc_ht=scontent-hkg4-1.cdninstagram.com&_nc_cat=103&_nc_ohc=H1zhTLhxGssAX8SHOp8&oh=45f97afd0b25146fbd37f7a92c7c3f8a&oe=5F67F2DA",
  },
  {
    index: 1,
    src:
      "https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/103376957_620795558848574_3472736826175705171_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=lIkZmXN2l8oAX-QERAe&oh=f8750f831f1e03abc03f464f12e2372f&oe=5F662ED2",
  },
  {
    index: 2,
    src:
      "https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/103034420_280613583343752_3260440625912284438_n.jpg?_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=0d_L6aJTBwcAX8Ht-m8&oh=2a82fa4d92e9c4a61595d315190954db&oe=5F66846B",
  },
  {
    index: 3,
    src:
      "https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/84253391_144259770613600_2465507196773377077_n.jpg?_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=YUd-YqNzMuIAX_kvsTa&oh=0215df7c96c91cc958ea9f461bbfb4cc&oe=5F65186C",
  },
  {
    index: 4,
    src:
      "https://scontent-hkg4-2.cdninstagram.com/v/t51.2885-15/e35/104686367_118416979650287_337762265727986252_n.jpg?_nc_ht=scontent-hkg4-2.cdninstagram.com&_nc_cat=111&_nc_ohc=cFTeZPV0L4AAX9fipVW&oh=9939d77b82483ea962ecaca132f3868b&oe=5F65C6D0",
  },
  {
    index: 5,
    src:
      "https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/106162902_553341068675544_5856579893684391601_n.jpg?_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=djT0Gs7hNdYAX-UMBhj&oh=4140b931c3da0da68161e120567dddbc&oe=5F68DBFB",
  },
  {
    index: 6,
    src:
      "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/e35/106701387_1144551082576380_1531557657359182598_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=100&_nc_ohc=UPa84ubXLEIAX9zDzJ7&oh=2a33b1f13a2f1a4750b94c4b76a5fe82&oe=5F679802",
  },
  {
    index: 7,
    src:
      "https://scontent-hkg4-2.cdninstagram.com/v/t51.2885-15/e35/118112537_775500656592280_7006418335073157765_n.jpg?_nc_ht=scontent-hkg4-2.cdninstagram.com&_nc_cat=104&_nc_ohc=wLyxX8yje1MAX9fytPY&oh=b6a0b585cea6d849c0967f73fa5d41a2&oe=5F65FF1C",
  },

  {
    index: 8,
    src:
      "https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/117913231_108389690893807_9008094002372102762_n.jpg?_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=1rPV-JoBnWsAX86Gatf&oh=faf12bca5617286097fbedda8026ef2f&oe=5F679B2D",
  },
  {
    index: 9,
    src:
      "https://instagram.fvca1-2.fna.fbcdn.net/v/t51.2885-15/e35/118067381_675602789705865_1912227561310740124_n.jpg?_nc_ht=instagram.fvca1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=zKaJc6WKPUQAX8jbH6z&oh=a291c0e03f352711498cc264ed415cb9&oe=5F6C1CD9",
  },
  {
    index: 10,
    src:
      "https://instagram.fhan4-1.fna.fbcdn.net/v/t51.2885-15/e35/118440017_938973933247714_839899294222922128_n.jpg?_nc_ht=instagram.fhan4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Jr3cc9MypdMAX_zfpgy&oh=a4edbad4b3a8b745be0a929d098ceadb&oe=5F6FE73B",
  },
  {
    index: 11,
    src:
      "https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/e35/118880347_1009536092802046_3056388846095248893_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=110&_nc_ohc=sw6wOwiuTrcAX-InK8g&_nc_tp=18&oh=82efb9c90f3d6dccbafca3e63cf92ab1&oe=5F7B2303",
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

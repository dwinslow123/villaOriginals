import React, { Component } from 'react';
import { gallery } from './gallery';
import Header from './Header';
import { Footer } from './Footer';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators } from 'reactstrap';

import ReactGA from 'react-ga';
ReactGA.pageview(window.location.pathname + window.location.search);

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }
  onExiting = () => {
    this.animating = true;
  }
  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === gallery.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? gallery.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex }); 
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = gallery.map((photo) => {
      return (
        <CarouselItem
          className="photo"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={photo.src}
        >
          <img src={photo.src} alt={photo.altText} />
        </CarouselItem>
      );
    });

    return (
      <div className="main-gallery">
      <Header />
        <style>
          {
            `.photo {
              max-width: 100%;
              max-height: 100%;
              align-self: center;
              background: black;
            }
            
            .footer {
              position: relative;
              background: #000000;
            }

            .navbar {
              background: #000000 !important;
            }

            .nav-link {
              color: #FFFFFF !important; 
            }

            .navbar-toggler {
              background: #FFFFFF !important;
            }
            `
          }
        </style>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={gallery}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
          
        />
          { slides }
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
      <Footer />
      </div>
    );
  }
}

export default Portfolio;
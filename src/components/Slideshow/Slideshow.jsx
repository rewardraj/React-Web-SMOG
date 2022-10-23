import React from 'react'
import {
  SlideContainer,
  SlideHeader
} from './SlideElements.js'

const Slideshow = () => {

  var slideIndex = 1;
  showSlides(slideIndex);


  return (
    <>
      <SlideContainer>
        <SlideHeader></SlideHeader>
        <SlideshowWrapper>
          <ImageWrapper></ImageWrapper>
          <TextWrapper></TextWrapper>
        </SlideshowWrapper>
        <SlideshowWrapper>
          <ImageWrapper></ImageWrapper>
          <TextWrapper></TextWrapper>
        </SlideshowWrapper>
        <SlideshowWrapper>
          <ImageWrapper></ImageWrapper>
          <TextWrapper></TextWrapper>
        </SlideshowWrapper>
        <PrevButton
          onclick={clickPrev}
        >
        </PrevButton>
        <NextButton
          onclick={clickNext}
        >
        </NextButton>
      </SlideContainer>
    </>
  )
}

export default Slideshow

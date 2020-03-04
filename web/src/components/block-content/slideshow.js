import React, { useState } from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import FsLightbox from 'fslightbox-react'

import styles from './slideshow.module.css'

function Slideshow(props) {
  if (!props.slides) return null
  const imgURLs = props.slides.map(slide =>
    imageUrlFor(buildImageObj(slide))
      .width(1800)
      .height(Math.floor((9 / 16) * 1800))
      .url()
      .toString()

  )


  const len = props.slides.length
  const [index, setIndex] = useState(0)
  function handlePrev() {
    setIndex(Math.max(index - 1, 0))
  }
  function handleNext() {
    setIndex(Math.min(index + 1, len - 1))
  }
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  })

  function openLightboxOnSlide() {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: Math.min(index + 1, len)
    })
  }

  function closeLightboxOnSlide() {
      //debugger
     setIndex(Math.min(index + 1, len - 1))
    }

  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        showThumbsOnMount={true}
        toggler={lightboxController.toggler}
        type="image"
        slide={lightboxController.slide}
        sources={imgURLs}
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        onClose={closeLightboxOnSlide}
      />

      <div className={styles.root}>
        <div className={styles.nav}>
          <button onClick={handlePrev} disabled={index === 0}>
            Prev
          </button>
          <span>
            {index + 1} of {len}
          </span>
          <button onClick={handleNext} disabled={index === len - 1}>
            Next
          </button>
        </div>
        <ul
          className={styles.carousel}
          data-index={index}
          style={{ transform: `translate3d(${index * -100}%, 0, 0)` }}
        >
          {props.slides.map(slide => (
            <li key={slide._key} className={styles.slide}>
              <a onClick={() => openLightboxOnSlide(index)}>
                {slide.asset && (
                  <img
                    src={imageUrlFor(buildImageObj(slide))
                      .width(1200)
                      .height(Math.floor((9 / 16) * 1200))
                      .fit('crop')
                      .url()}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}


export default Slideshow

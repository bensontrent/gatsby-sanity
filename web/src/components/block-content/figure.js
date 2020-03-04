import React, { useState } from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import FsLightbox from 'fslightbox-react'
import styles from './figure.module.css'

function Figure (props) {

  if (!props) return null
  const [toggler, setToggler] = useState(false);
  const imgURL = imageUrlFor(buildImageObj(props))
      .width(1800)
      .height(Math.floor((9 / 16) * 1800))
      .url()
      .toString()

  return (
    <>
      <figure className={styles.root}>
        <FsLightbox
          showThumbsOnMount={true}
          toggler={toggler}
          type="image"
          sources={[imgURL]}
          initialAnimation="scale-in-long"
          slideChangeAnimation="scale-in"
        />
        {props.asset && (
          <a onClick={() => setToggler(!toggler)}>
            <img
              src={imageUrlFor(buildImageObj(props))
                .width(1200)
                .url()}
              alt={props.alt}
            />
          </a>
        )}
        <figcaption className={styles.caption}>{props.caption}</figcaption>
      </figure>
    </>
  )
}

export default Figure

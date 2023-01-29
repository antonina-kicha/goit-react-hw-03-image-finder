import PropTypes from 'prop-types';
import { Component } from 'react';

import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryList, Error } from './ImageGallery.styled'

export const ImageGallery = ({images, error}) => {

    return (
      <div>
        {
          images.length > 0 && (
          <ImageGalleryList>
          {images.map((image) => (
            <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
          ))}
          </ImageGalleryList> 
          )}
        {error && <Error>{error}</Error>}
      </div>     
    )
}



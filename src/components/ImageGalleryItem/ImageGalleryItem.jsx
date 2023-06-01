import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";
import {Modal} from '../Modal/Modal'
import { useState } from "react";


export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const[showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  };

      return (
        <GalleryItem >
              <GalleryItemImage src={webformatURL} onClick={toggleModal} alt={tags} />
              {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={toggleModal} />
        )}
        </GalleryItem>
        )
    
  }


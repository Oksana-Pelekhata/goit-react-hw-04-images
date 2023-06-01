import { useEffect } from "react";
import {Overlay, ModalImage} from './Modal.styled'

export const Modal = ({ onClose, largeImageURL, tags }) => {
   useEffect(() => {
      const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
      };
     
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
    return (
      <Overlay onClick={handleBackdropClick}>
        <ModalImage>
          <img src={largeImageURL} alt={tags} />
        </ModalImage>
      </Overlay>
    );
  
}
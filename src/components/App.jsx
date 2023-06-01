import { Searchbar } from './Searchbar';
import { fetchPictures } from '.././services/pixabayApi'
import { Loader } from './Loader'
import { ImageErrorView } from './ImageErrorView'
import { ImageGallery } from './ImageGallery'
import { Button } from './Button'
import { Wrapper } from './Wrapper/Wrapper';
import { useState } from 'react';
import { useEffect } from 'react';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const App = () => {

  const [name, setName] = useState('')
  const [pictures, setPictures] = useState([])
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(Status.IDLE)
  const [page, setPage] = useState(1)


  useEffect(() => {
    if (name === "") {
      return
    }
    
    fetchPictures(name, page)
      .then(({ hits }) => (setPictures(pictures => [...pictures, ...hits]), setStatus(Status.RESOLVED)))
      .catch(error => { setError(error); setStatus(Status.REJECTED) } );
  },[name, page])

  const handleSearchFormSubmit = name => {
    console.log(name)
    setName(name)
    setPage(1)
    setPictures([])
  }

  const handleLoadMoreBtnClick = () => {
   setPage(page + 1);
  };

    return (
       <Wrapper>
        <Searchbar onSubmit={ handleSearchFormSubmit} />
    
    { status === 'pending' && <Loader /> }
    { status === 'resolved' && <ImageGallery pictures={pictures}  /> }
        {status === 'rejected' && <ImageErrorView message={error.message} />} 
        {pictures.length !== 0 && (pictures.length /12) === page && <Button LoadMoreBtnClick={handleLoadMoreBtnClick} />}
      </Wrapper>
    )
  
  
}


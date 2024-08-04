import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Gallery = ({ category }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchImages = useCallback(async (resetImages = false) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${category}&per_page=30&page=${resetImages ? 1 : page}`,
        {
          headers: {
            Authorization: 'ZjlGyz7xHwWrWIlWHOTRwCLuk2w2CueZZqE1fic5G6qhm6mykAJT7q8r'
          }
        }
      );
      if (resetImages) {
        setImages(response.data.photos);
        setPage(2);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.photos]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setLoading(false);
  }, [category, page]);

  useEffect(() => {
    fetchImages(true);
  }, [category, fetchImages]);

  const handleLoadMore = () => {
    fetchImages();
  };

  if (loading && images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src.small} alt={image.photographer} />
          </div>
        ))}
      </div>
      {!loading && (
        <button onClick={handleLoadMore} className="load-more">
          Load More
        </button>
      )}
    </div>
  );
};

export default Gallery;
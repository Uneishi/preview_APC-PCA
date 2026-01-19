import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

function Gallery() {
     const { t } = useTranslation()
  return (
    <div className="gallery-container mb-5">
        <h3 className="text-center mb-4 fw-bold fs-1">{t('gallery.title')}</h3>
      <Carousel style={{ Width: '800px', margin: '0 auto' }}>
        <Carousel.Item>
          <img className="d-block w-100" src={'images/gallery1.jpg'} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={'images/gallery2.jpg'} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={'images/gallery3.jpg'} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
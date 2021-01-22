import ImageSlider from 'react-image-comparison-slider'

import img1 from '../../img/demo11.JPG'
import img2 from '../../img/lot-empty.jpg'

export default function App() {
  return (
    <div className='text-center'>
      <div style={{ width: 700, height: 450 }}>
        <ImageSlider
          image1={img1}
          image2={img2}
          sliderWidth={3}
          sliderColor='grey'
          handleColor='orange'
          handleBackgroundColor='white'
        />
      </div>
    </div>
  )
}

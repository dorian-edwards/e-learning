import mobileImage from '../assets/image-hero-mobile.webp'

const ImageLead = () => {
  return (
    <div className='image-wrapper w-full flex justify-center'>
      <img className='max-w-none' src={mobileImage} alt='lady here' />
    </div>
  )
}

export default ImageLead

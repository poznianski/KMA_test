import { ColorRing } from 'react-loader-spinner'

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#5FCB39', '#5FCB3933', '#8bf86a', '#5a7f01', '#849b87']}
    />
  )
}

export default Loader

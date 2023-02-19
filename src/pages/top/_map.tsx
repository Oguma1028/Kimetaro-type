import { GoogleMap, LoadScript } from '@react-google-maps/api'

const Map = () => {
  const containerStyle = {
    width: '400px',
    height: '400px',
  }

  const center = {
    lat: 35.69575,
    lng: 139.77521,
  }

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyCp7d5bvIwG0roVOpeBEWbE_Oi3BOa508c">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        ></GoogleMap>
      </LoadScript>
    </>
  )
}

export default Map

import { Fragment, useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const CodingActivity = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY_LOCAL
  })
  const [, setMap] = useState(null)
  const places = [
    { name: 'saltillo', lat: 25.42321, lng: -101.0053 },
    { name: 'new_york', lat: 40.73061, lng: -73.935242 },
    { name: 'los_angeles', lat: 34.052235, lng: -118.243683 },
    { name: 'florida', lat: 27.994402, lng: -81.760254 },
    { name: 'argentina', lat: -34.603722, lng: -58.381592 },
    { name: 'greek', lat: 39.074208, lng: 21.824312 },
    { name: 'india', lat: 20.593684, lng: 78.96288 },
    { name: 'mexico_city', lat: 19.42847, lng: -99.12766 },
    { name: 'monterrey', lat: 25.686613, lng: -100.316116 },
    { name: 'brasil', lat: -23.533773, lng: -46.62529 }
  ]
  const center = { lat: 0, lng: 0 }

  const onLoad = useCallback((map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  return (
    <Fragment>
      <div className="grid md:grid-cols-2 gap-4 mx-3 mb-4">
        {/* <figure className="shadow-black dark:shadow-gray">
          <embed src="https://wakatime.com/share/@agusrdz/906c2a54-6764-47e6-9d02-d05d72c4b993.svg"></embed>
        </figure> */}
        {isLoaded && (
          <div className="w-full h-full pb-8">
            <div className="text-center">
              <span className="text-2xl">
                Where are the people I have worked with from?
              </span>
            </div>
            <figure className="shadow-black dark:shadow-gray w-full h-full ">
              <GoogleMap
                mapContainerClassName="w-full h-full"
                onLoad={onLoad}
                onUnmount={onUnmount}
                center={center}
                options={{
                  zoom: 2,
                  streetViewControl: false,
                  zoomControl: false,
                  fullscreenControl: false,
                  mapTypeControl: false
                }}
              >
                {places.map(({ name, lat, lng }) => (
                  <Marker key={name} position={{ lat, lng }} />
                ))}
              </GoogleMap>
            </figure>
          </div>
        )}

        <div className="text-center">
          <span className="text-2xl">Coding Activity</span>
          <figure className="shadow-black dark:shadow-gray">
            <embed src="https://wakatime.com/share/@agusrdz/a027fcda-84bc-43ee-ad90-006fda38c7f5.svg"></embed>
          </figure>
        </div>
      </div>
    </Fragment>
  )
}

export default CodingActivity

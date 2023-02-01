import {useState} from 'react'
import axios from 'axios'
import { API_KEY } from './constants'

export const useCoords = () => {

  const [position, setPosition] = useState({})

  window.navigator.geolocation.getCurrentPosition((p) => {
    setPosition({
      lat: p.coords.latitude,
      long: p.coords.longitude
    })
  })

  return {
    ...position
  }

}

export const useApiCall = () => {

  const [status, setStatus] = useState('UNINIT')
  const [error, setError] = useState('')
  const [data, setData] = useState()

  const {
    lat,
    long
  } = useCoords()

  const fn = () => {
    // API call will go here

    setStatus('IN_PROGRESS')
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    })
    .then(({ data }) => {
      if (data) {
        setData(data)
        setStatus('SUCCESS')
      } else {
        setError('DATA was not found.')
        setStatus('ERROR')
      }
    })
    .catch(e => {
      setStatus('ERROR')
      setError(e.message)
    })

  }

  return [
    status,
    error,
    data,
    fn
  ]

}
import { useState } from 'react'
import axios from 'axios'
import { API_KEY } from './constants'
import  { useDispatch, useSelector } from 'react-redux'
import { setApiStatus, setData, setError } from './redux/action'

export const useCoords = () => {

  const getCoords = (cb) => {
    window.navigator.geolocation.getCurrentPosition((p) => {
      cb({
        lat: p.coords.latitude,
        long: p.coords.longitude
      })
    })
  }

  return [
    getCoords
  ]

}

export const useApiCall = () => {

  const { status, data, error } = useSelector(state => state.reducer).toJS()
  const dispatch = useDispatch()
  console.log('---- st', useSelector(state => state.reducer))

  const [
    getCoords
  ] = useCoords()

  const fn = () => {
    // API call will go here
    // callback design pattern
    getCoords(({ lat, long }) => {
      dispatch(setApiStatus('IN_PROGRESS'))
      axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
      })
        .then(({ data }) => {
          if (data) {
            dispatch(setData(data))
            dispatch(setApiStatus('SUCCESS'))
          } else {
            dispatch(setError('DATA was not found.'))
            dispatch(setApiStatus('ERROR'))
          }
        })
        .catch(e => {
          dispatch(setError(e.message))
          dispatch(setApiStatus('ERROR'))
        })
    })


  }

  return [
    status,
    error,
    data,
    fn
  ]

}
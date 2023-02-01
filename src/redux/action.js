import {
  SET_API_STATUS,
  SET_DATA,
  SET_ERROR
} from './action-names'

export const setApiStatus = (payload) => {
  return {
    type: SET_API_STATUS,
    payload
  }
}

export const setData = (payload) => {
  return {
    type: SET_DATA,
    payload
  }
}

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload
  }
}
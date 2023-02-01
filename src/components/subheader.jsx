export default function SubHeader( {  status }) {

  return status === "IN_PROGRESS" ? 'Sub heading component is loading' : (
    status === "SUCCESS" ? 'Sub heading component is loaded' : null
  )
}

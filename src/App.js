
import Footer from './components/footer';
import Header from './components/header';
import { useApiCall } from './hooks';

/**
 * components
 * class based and functional components
 * string interpolation
 * state
 * props
 * parent and child components
 * redux
 * how to make an API call
 */

function App() {

  const [status, error, data, apiCall] = useApiCall()

  let body = <></>
  if (status === "IN_PROGRESS") {
    body = "Loading..."
  } else if (status === "SUCCESS") {
    body = (
      <ul>
        <li><strong>Main: </strong>{data.weather[0].main}</li>
        <li><strong>Description: </strong>{data.weather[0].description}</li>
      </ul>
    )
  } else if (status === "ERROR") {
    body = <p>Error occured: {error}</p>
  }


  return (
    <div className='App'>
      <Header status={status} />
      <div className='body'>
        <input type='text' />
        &nbsp;
        <button onClick={apiCall}>Click me</button>
        &nbsp;
        {body}
      </div>
      <Footer status={status} />
    </div>
  );
}

export default App;


// Search postcode box and button component
import AddressUISection from './components/AddressUISection'

function App() {


  //============= React Example UI ===================
  return (
    <div className="container">

      {/* Loads of stuff on your page */}

      <h1>Simply Postcode Example</h1>

      {/* AddressSection is used to store the address in as displayed on page so user can edit value
          or found by Simply Postcode */}
      <AddressUISection/>

      <div className="bottomText">This example shows how to implement a Postcode Address Finder.<br/>It returns example addresses no matter what is entered as search Postcode.< br/>The UI is of customisable by the programmer.</div>

      {/* Loads of stuff on your page */}

    </div>
  ); 
}

export default App;

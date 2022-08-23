import { useState, useContext} from 'react'

// Store for address information
import { AddressRecContext } from './AddressRec'

//=======================================
//  Used to display the search results
//=======================================

const SPLList = ({datakey, selectionLines, showSearchList, setShowSearchList }) => {
    //Shared Address record store
    const [addressRec, setAddressRec] = useContext(AddressRecContext) ;

    //The ID of the currently seelcted address
    const [selectedID, setSelectedID] = useState('')

    //Sate of selections box
    const [selectedSomething, setSelectedSomething] = useState(false)

    //Line selected so remeber the ID of the address line in selectedID
    const handleChange = (e) => {
        console.log("Selected ", e.target.value);
        setSelectedID(  e.target.value ); 
        setSelectedSomething(true)
    }

    //Confirmed selection of an address line ([Select] button / double clicked)
    const SPLselected = (e) => {
        SPLfetchRecord(selectedID)
        console.log('SPLselected Event ', selectedID)
        setShowSearchList(false)
    }

    // Fetch address record from Simply Postcode HTTP/JSON API via async
    // And put the address in AddressRec for react to show in AddressUI
  const SPLfetchRecord = async (id) => {
    const fetchData = (url) => {
    return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)

            if (data.found==0){
              console.log('0 ' ,data.credits_display_text)
              console.log('errormessage ' ,data.errormessage)
            } else {
                console.log('Found record: ',data.found)
                console.log('Status: ',data.credits_display_text)

                //Populate the shared address record for display by React
                setAddressRec(prevAddress => ({
                        ...prevAddress, 
                        company: data.organisation,
                        line1: data.line1,
                        line2: data.line2,
                        line3: data.line3,
                        town: data.town,
                        county: data.county,
                        postcode: data.postcode,
                        country: data.country
                    })) 
            }
            
          });}

    var SPLurl= `https://www.simplylookupadmin.co.uk/JSONservice/JSONGetAddressRecord.aspx?cross=true&appID=122&datakey=${datakey}&id=${id}`
        console.log(SPLurl);
        fetchData(SPLurl); 
    }

    return (
        <div>
           <h2 >Select Address</h2> 

            {/* List box for lines - List box to be mobile friendly */}
            <select id="SPLListBox" size="10" onChange={handleChange} onDoubleClick={SPLselected} className='SPLListBox'>  
                {selectionLines.map((line) => (
                    <option key={line.id} value={line.id}>{line.l}</option>  
                ))}
            </select> 
          
            {/* Text and [Select] button below */}      
            <header className='SPLheader'>       
                <span className='SPLTextLebel'>Select address from above</span>

                {/* Button visible if selectedSomething */}
                <button className={`SPLbtn ${!selectedSomething && 'btnDisabled'}`} onClick={SPLselected}>Select Address</button>
            </header>
        </div>
    )
}
 
export default SPLList
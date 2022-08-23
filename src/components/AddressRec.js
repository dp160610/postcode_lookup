import { useState, createContext } from 'react'

export const AddressRecContext = createContext();

//===================================
//  AddressProvider is used to store the address info to display on page so user can edit value
//  or found by Simply Postcode 
//===================================

export const AddressRecProvider = (props) => {
    const [addressRec, setAddressRec] = useState({
        "company": "",
        "line1": "",
        "line2": "",
        "line3": "",
        "town": "",
        "county": "",
        "postcode": "",
        "country": "",
      })

    return (
<AddressRecContext.Provider value={[addressRec, setAddressRec]}>
     {props.children}
</AddressRecContext.Provider>
    )
}
 

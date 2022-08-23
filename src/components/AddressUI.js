import {  useContext } from 'react'
// Store for address information
import { AddressRecContext } from './AddressRec'

//===================================
//Dispay and allow edit of address info
//===================================

const AddressUI = () => {
        //Shared Address record store
        const [addressRec, setAddressRec] = useContext(AddressRecContext) ;

    return (
        <div>
           <h2>Address</h2> 

           {/* Address form mapped to AddressRecContext so if user edits, or we have search for an Address
                then it is updated to and from UI */}
           <form className='SPLform'>
                <div className='form-control'>
                        <label>Company Name:</label>
                        <input type='text' placeholder='Company Name' 
                        value={addressRec.company} 
                        onChange={(val) => {
                                setAddressRec(prevState => ({...prevState, company: val.target.value }))}}
                         />
                </div>

                <div className='form-control'>
                        <label>Property Name/Number:</label>
                        <input type='text' placeholder='Property Name/Number' 
                        value={addressRec.line1} 
                        onChange={(val) => {
                                setAddressRec(prevState => ({...prevState, line1: val.target.value }))}}
                         />
                </div>

                <div className='form-control'>
                        <label>Line 2:</label>
                        <input type='text' placeholder='' 
                        value={addressRec.line2}  
                        onChange={(val) => {
                                setAddressRec(prevState => ({...prevState, line2: val.target.value }))}}
                         />
                </div>

                <div className='form-control'>
                        <label>Line 3:</label>
                        <input type='text' placeholder='' 
                        value={addressRec.line3}  
                        onChange={(val) => {
                                setAddressRec(prevState => ({...prevState, line3: val.target.value }))}}
                         />
                </div>

                 <div className='form-control'>
                        <label>Town:</label>
                        <input type='text' placeholder='Town' 
                        value={addressRec.town}  
                        onChange={(val) => {
                                setAddressRec(prevState => ({...prevState, town: val.target.value }))}}
                         />
                </div>

                <div className='form-control'>
                        <label>County:</label>
                        <input type='text' placeholder='County' 
                        value={addressRec.county}  
                        onChange={(val) => {
                                setAddressRec(prevState => ({...prevState, county: val.target.value }))}}
                         />
                </div>

                <div className='form-control'>
                        <label>Postcode:</label>
                        <input type='text' placeholder='Postcode' 
                        value={addressRec.postcode}  
                        onChange={(val) => {
                                setAddressRec(prevState => ({...prevState, postcode: val.target.value }))}}
                         />
                </div>

                <div className='form-control'>
                        <label>Country:</label>
                        <input type='text' placeholder='Country' 
                        value={addressRec.country}  
                        onChange={(val) => {
                                setAddressRec(prevState => ({...prevState, country: val.target.value }))}}
                         />
                </div> 
            </form>
        </div>
    )
}
 
export default AddressUI
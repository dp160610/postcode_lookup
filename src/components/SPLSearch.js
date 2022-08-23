import { useState } from 'react'

//=============================================
//   Search box and button + Get list from server
//=============================================

const SPLSearch = ({SPLsearchButton,errorTxt}) => {
    const [searchBy, setSearchBy] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        /* Validate we have something and then do search */
        if (searchBy) { SPLsearchButton(searchBy)}
    }

    return (
        <div>
            <form className='SPLform' onSubmit={onSubmit}>

                {/* Search input */}
                <header className='SPLheader'>
                    <div className='form-control'>
                            <label>Search by Postcode:</label>
                            <input type='text' placeholder='Enter Postcode' value={searchBy} onChange={(e) => setSearchBy(e.target.value)}/>
                    </div>
                    <input className='SPLbtn'  type='submit' value='Search'/>
                    
                </header>

                {/* Used to display any errors in licensing, etc - May want to remove this when live */}
                <span className='SPLerrText'>{errorTxt}</span>
            </form>

        </div>
    )
}
 
export default SPLSearch
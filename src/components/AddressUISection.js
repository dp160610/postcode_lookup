import { useState } from "react";

// Search postcode box and button component
import SPLSearch from "./SPLSearch";

// List to select address from component - List box to be mobile friendly
import SPLSelectList from "./SPLSelectList";

// UI to showw selected address and allow user to edit/enter manually
import AddressUI from "./AddressUI";

// Store for shared address information
import { AddressRecProvider } from "./AddressRec";

const AddressUISection = () => {
  //============= Simply Postcode - Variables ===================
  // The datakey identifies your account and is sent to you when you open an account
  //    with simple postcode www.simplypostcode.com
  const datakey = "W_479F823F5634450CA68796D8136D3D";

  // Visible State of the Address Selection List which is normally hidden
  const [showSearchList, setShowSearchList] = useState(false);

  // Used to display an errors in UI - you may want to remove in live web app
  const [errorTxt, setErrorTxt] = useState("");

  // Store for lines to display in List
  const [selectionLines, setSelectionLines] = useState([]);

  //============= Simply Postcode - Search Events ===================
  //Search button pressed, so get list of address for Postcode from Simply Postcode HTTP/JSON API via async SPLfetchList
  const SPLsearchButton = (searchBy) => {
    //searchBy='zz99'  //Shows demo data
    console.log("searchButton for ", searchBy);
    setErrorTxt("");
    const getSelectionLinesFromSPLServer = async () => {
      await SPLfetchList(searchBy);
    };
    getSelectionLinesFromSPLServer();
  };

  // Fetch List from server for display
  const SPLfetchList = async (postcode) => {
    const fetchData = (url) => {
      return fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.found == 0) {
            console.log("0 ", data.credits_display_text);
            console.log("errormessage ", data.errormessage);
            setErrorTxt(data.credits_display_text);
          } else {
            if (data.recordcount == 0) {
              setErrorTxt("Postcode not found");
              setShowSearchList(false);
            } else {
              console.log("Found record: ", data.found);
              console.log("Status: ", data.credits_display_text);
              setSelectionLines(data.records);
              setShowSearchList(true);
            }
          }
        });
    };

    var SPLurl = `https://www.simplylookupadmin.co.uk/JSONservice/JSONSearchForAddress.aspx?cross=true&appID=122&datakey=${datakey}&postcode=${postcode}`;
    console.log(SPLurl);
    fetchData(SPLurl);
  };

  //============= React Example UI ===================
  return (
    <div className="addressSection">
      {/* AddressRecProvider is used to store the address in as displayed on page so user can edit value
          or found by Simply Postcode */}
      <AddressRecProvider>
        <SPLSearch SPLsearchButton={SPLsearchButton} errorTxt={errorTxt} />

        {showSearchList && (
          <SPLSelectList
            datakey={datakey}
            selectionLines={selectionLines}
            showSearchList={showSearchList}
            setShowSearchList={setShowSearchList}
          />
        )}
        {!showSearchList && <AddressUI l />}
      </AddressRecProvider>
    </div>
  );
};

export default AddressUISection;

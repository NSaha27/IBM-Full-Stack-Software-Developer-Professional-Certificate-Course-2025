import { useState } from "react";
import "./css/DisplayCustList.css";

function DisplayCustList({ customerData }) {
  const [dispCustList, setDispCustList] = useState(true);
  const [dispAddForm, setDispAddForm] = useState(false);
  const [dispUpdateForm, setDispUpdateForm] = useState(false);

  const handleAddBtnClick = () => {
    setDispCustList(false);
    setDispAddForm(true);
  };

  return (
    <div className="">
      <div className="">
        <h3 className="h3 text-info"></h3>
        <button className="btn btn-success" onClick={handleAddBtnClick}>
          Add Customer
        </button>
      </div>
      {dispCustList && <div className="disp-cust"></div>}
      {dispAddForm && <div className="disp-add-form"></div>}
      {dispUpdateForm && <div className="disp-update-form"></div>}
    </div>
  );
}

export default DisplayCustList;

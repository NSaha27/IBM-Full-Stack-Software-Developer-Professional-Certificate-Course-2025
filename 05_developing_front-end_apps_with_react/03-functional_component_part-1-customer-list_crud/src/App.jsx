import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Header from "./components/Header";
import DisplayCustList from "./components/DisplayCustList";

function App() {
  const [custData, setCustData] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("")
      .then((result) => result.json())
      .then((data) => setCustData(data))
      .catch((err) => {
        setErrors((prevErr) => [...prevErr, err.message]);
        return false;
      });
  }, []);

  return (
    <>
      <Header />
      {errors && (
        <>
          <h2 className="">The following error(s) occured:</h2>
          <ul className="">
            {errors.map((error) => (
              <li className="">{error}</li>
            ))}
          </ul>
        </>
      )}
      <DisplayCustList customerData={custData} />
    </>
  );
}

export default App;

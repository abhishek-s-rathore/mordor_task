import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { getData } from "../api";
import {filterBrowser, filterCountries, browserUsers,browserCountryUsers} from "../utils/filterData";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await getData();
      setData(data);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main browserWiseData={filterBrowser(data)} countriesData={filterCountries(data)} browserUsers={browserUsers(data)} browserCountryUsers={browserCountryUsers(data)}/>
      <Footer />
    </div>
  );
}

export default App;

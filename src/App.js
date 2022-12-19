import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HappyHour from "./pages/HappyHour";
import Settings from "./pages/Settings";
import Prices from "./pages/Prices";
import Layout from "./components/Layout";
import {
  getDateTodayAndTomorrow,
  getCurrentPrices,
  getSettings,
  storeSettings,
} from "./components/Functions";

function App() {
  //  content_copy;

  const [twoHoursProgram, setTwoHoursProgram] = useState(false);
  const [threeHoursProgram, setThreeHoursProgram] = useState(false);
  const [fourHoursProgram, setFourHoursProgram] = useState(false);
  const [fiveHoursProgram, setFiveHoursProgram] = useState(false);
  const [dateToday, dateTomorrow] = getDateTodayAndTomorrow();
  const [pricesToday, setPricesToday] = useState([null]);
  const [pricesTomorrow, setPricesTomorrow] = useState([null]);
  const [settingsArrived, setSettingsArrived] = useState(false);

  // initial start
  useEffect(() => {
    // get saved settings
    getSettings(
      setTwoHoursProgram,
      setThreeHoursProgram,
      setFourHoursProgram,
      setFiveHoursProgram,
      setSettingsArrived
    );

    // Fetch price data from server and then set it to useStates
    fetch("https://ohjelmistoprojekti.up.railway.app/pricejson/")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setPricesToday(getCurrentPrices(dateToday, data));
        setPricesTomorrow(getCurrentPrices(dateTomorrow, data));
        setPricesToday(getCurrentPrices(dateToday, data));
      });
  }, [dateToday, dateTomorrow]);

  // if settings chances store them
  useEffect(() => {
    if (settingsArrived) {
      storeSettings(
        twoHoursProgram,
        threeHoursProgram,
        fourHoursProgram,
        fiveHoursProgram
      );
    }
  }, [
    twoHoursProgram,
    threeHoursProgram,
    fourHoursProgram,
    fiveHoursProgram,
    settingsArrived,
  ]);

  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Prices
                pricesToday={pricesToday}
                pricesTomorrow={pricesTomorrow}
              />
            }
          />
          <Route
            path="HappyHour"
            element={
              <HappyHour
                twoHoursProgram={twoHoursProgram}
                threeHoursProgram={threeHoursProgram}
                fourHoursProgram={fourHoursProgram}
                fiveHoursProgram={fiveHoursProgram}
                pricesToday={pricesToday}
                pricesTomorrow={pricesTomorrow}
                setTwoHoursProgram={setTwoHoursProgram}
                setThreeHoursProgram={setThreeHoursProgram}
              />
            }
          />
          <Route
            path="Settings"
            element={
              <Settings
                twoHoursProgram={twoHoursProgram}
                threeHoursProgram={threeHoursProgram}
                fourHoursProgram={fourHoursProgram}
                fiveHoursProgram={fiveHoursProgram}
                setTwoHoursProgram={setTwoHoursProgram}
                setThreeHoursProgram={setThreeHoursProgram}
                setFourHoursProgram={setFourHoursProgram}
                setFiveHoursProgram={setFiveHoursProgram}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

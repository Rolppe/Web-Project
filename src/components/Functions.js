import React from "react";

// Get date for today and tomorrow in returning strings.
export function getDateTodayAndTomorrow() {
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var dayToday = today.getDate();
  var monthToday = today.getMonth() + 1;
  var yearToday = today.getFullYear();
  var dayTomorrow = tomorrow.getDate();
  var monthTomorrow = tomorrow.getMonth() + 1;
  var yearTomorrow = tomorrow.getFullYear();
  // Put together with adding missing 0:s for uniformity.
  let dateToday =
    yearToday +
    "-" +
    ("0" + monthToday).slice(-2) +
    "-" +
    ("0" + dayToday).slice(-2);
  let dateTomorrow =
    yearTomorrow +
    "-" +
    ("0" + monthTomorrow).slice(-2) +
    "-" +
    ("0" + dayTomorrow).slice(-2);

  return [dateToday, dateTomorrow];
}

// Extract prices from data
export function getCurrentPrices(currentDate, data) {
  // Loop through data for desired date.
  for (let i = 0; i < data.Prices.length; i++) {
    if (data.Prices[i].Date === currentDate) {
      // Create array of days prices
      const currentPrices = [
        data.Prices[i].H00,
        data.Prices[i].H01,
        data.Prices[i].H02,
        data.Prices[i].H03,
        data.Prices[i].H04,
        data.Prices[i].H05,
        data.Prices[i].H06,
        data.Prices[i].H07,
        data.Prices[i].H08,
        data.Prices[i].H09,
        data.Prices[i].H10,
        data.Prices[i].H11,
        data.Prices[i].H12,
        data.Prices[i].H13,
        data.Prices[i].H14,
        data.Prices[i].H15,
        data.Prices[i].H16,
        data.Prices[i].H17,
        data.Prices[i].H18,
        data.Prices[i].H19,
        data.Prices[i].H20,
        data.Prices[i].H21,
        data.Prices[i].H22,
        data.Prices[i].H23,
      ];
      // Return array
      return currentPrices;
    }
  }
  return false;
}

// Function to store settings
export async function storeSettings(
  twoHoursProgram,
  threeHoursProgram,
  fourHoursProgram,
  fiveHoursProgram
) {
  // Creating object from state of current settings
  const settings = {
    twoHours: twoHoursProgram,
    threeHours: threeHoursProgram,
    fourHours: fourHoursProgram,
    fiveHours: fiveHoursProgram,
  };

  // Remove old settings from firebase
  await fetch(
    "https://price-settings-default-rtdb.europe-west1.firebasedatabase.app/settings.json",
    { method: "DELETE" }
  );

  // Store settings to firebase
  await fetch(
    "https://price-settings-default-rtdb.europe-west1.firebasedatabase.app/settings.json",
    {
      method: "POST",
      body: JSON.stringify(settings),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// Get settings from firebase
export async function getSettings(
  setTwoHoursProgram,
  setThreeHoursProgram,
  setFourHoursProgram,
  setFiveHoursProgram,
  setSettingsArrived
) {
  // try to fetch data from server
  try {
    const response = await fetch(
      "https://price-settings-default-rtdb.europe-west1.firebasedatabase.app/settings.json"
    );
    const data = await response.json();
    const fetchedSettings = [];

    // Create object from data
    for (const key in data) {
      fetchedSettings.push({
        id: key,
        twoHours: data[key].twoHours,
        threeHours: data[key].threeHours,
        fourHours: data[key].fourHours,
        fiveHours: data[key].fiveHours,
      });
    }
    // If got data, set data states
    if (fetchedSettings.length > 0) {
      setTwoHoursProgram(fetchedSettings[fetchedSettings.length - 1].twoHours);
      setThreeHoursProgram(
        fetchedSettings[fetchedSettings.length - 1].threeHours
      );
      setFourHoursProgram(
        fetchedSettings[fetchedSettings.length - 1].fourHours
      );
      setFiveHoursProgram(
        fetchedSettings[fetchedSettings.length - 1].fiveHours
      );
    }
    // Inform that data fetching is done
    setSettingsArrived(true);
    // Catch error
  } catch (e) {
    console.error(e);
  }
}

// Find lowest times program for HappyHour
export function Program(props) {
  let amountOfHours = props.hours;
  let minprice = 1000;
  let outputIndex = 0;
  let priceSample = 0;

  // Get through data to find cheapest hour sample with given hour length
  for (let i = 0; i + amountOfHours <= props.prices.length; i++) {
    for (let j = 0; j < amountOfHours; j++) {
      priceSample += props.prices[i + j];
    }

    // if current sample is cheaper than previous. Mark it down.
    if (priceSample < minprice) {
      minprice = priceSample;
      outputIndex = i;
    }
    priceSample = 0;
  }
  // Calculate price average for cheapest hours
  if (minprice !== 1000) {
    minprice = Math.round((minprice / amountOfHours) * 100) / 100;
    // Render outcome
    return (
      <div>
        Cheapest hours {props.day} from: {outputIndex}:00 to{" "}
        {outputIndex + amountOfHours}:00. Median price {minprice} c/kWh
      </div>
    );
  } else {
    return (
      <div>
        <p>no prices data for {props.day}</p>
      </div>
    );
  }
}

// Listing price items
export function PriceList(props) {
  return props.pricesTime.map((item, index) => (
    <PriceItem key={props.preKey + index} item={item} index={index} />
  ));
}

// Price item rendering
export function PriceItem(props) {
  let times = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];
  return (
    <div>
      Klo: {times[props.index]} Price: {props.item} c / kWh
    </div>
  );
}

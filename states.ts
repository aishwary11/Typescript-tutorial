type LoadingLocationState = {
  state: "Loading";
};
type SuccessLocationState = {
  state: "Success";
  coords: { lat: number, lon: number; };
};
type ErrorLocationState = {
  state: "Error";
  error: { message: string; };
};

type LocationState = LoadingLocationState | SuccessLocationState | ErrorLocationState;
function printLocation(location: LocationState) {
  switch (location.state) {
    case "Loading":
      console.log(location.state);
      break;
    case "Success":
      console.log(location.coords.lat, location.coords.lon);
      break;
    case "Error":
      console.log(location.error.message);
      break;
  }
};

printLocation({ state: "Success", coords: { lat: 0.122, lon: 0.36 } });
printLocation({ state: "Error", error: { message: "Something went wrong" } });
function printLocation(location) {
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
}
;
printLocation({ state: "Success", coords: { lat: 0.122, lon: 0.36 } });

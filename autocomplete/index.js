window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsnest',
  (filterInstances) => {
    const locations = document.querySelectorAll(
        '[wb-autocomplete="locations"]'
    );

    //resolve duplicates
    const locationSet = new Set();
    locations.forEach((location) => {
        locationSet.add(location.textContent);
    });
    const uniqueLocationsArray = [...locationSet];

    //create new instance of autocomplete
    const autoCompleteJS = new autoComplete({
        selector: "#autoComplete",
        data: {
            src: uniqueLocationsArray
        },
        threshold: 1,
        debounce: 300,
        searchEngine: "strict",
        resultItem: {
          highlight: true
        }
    });
    autoCompleteJS.start();
  },
]);
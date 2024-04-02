const transformData = (inputData) => {
    const transformedData = {};

    for (const category in inputData) {
        if (inputData.hasOwnProperty(category)) {
            transformedData[category] = Object.keys(inputData[category]).map(subcategory => {
                return inputData[category][subcategory];
            });
        }
    }

    return transformedData;
}

function filterObjectByKey(obj, keyToFilter) {
    if (typeof obj !== 'object' || obj === null) {
        return {};
    }
    const filteredObject = {};
    for (let key in obj) {
        if (key === keyToFilter) {
            filteredObject[key] = obj[key];
        }
    }
    return filteredObject;
}
export { transformData, filterObjectByKey }
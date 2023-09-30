function resetDataDiv() {
    const dataDiv = document.querySelector(".data");
    const contentHead = document.querySelector(".content-data .head");
    const infoData = document.querySelector(".info-data");

    // Remove all child nodes from dataDiv except for contentHead and infoData
    while (dataDiv.firstChild) {
        if (dataDiv.firstChild !== contentHead && dataDiv.firstChild !== infoData) {
        dataDiv.removeChild(dataDiv.firstChild);
    } else {
        // Move contentHead and infoData to the beginning of dataDiv
        dataDiv.insertBefore(dataDiv.firstChild, dataDiv.firstChild.nextSibling);
    }
    }
}
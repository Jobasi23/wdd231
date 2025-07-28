function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param) || '';
}

    // Set values on page
document.getElementById("firstName").textContent = getQueryParam("firstName");
document.getElementById("lastName").textContent = getQueryParam("lastName");
document.getElementById("email").textContent = getQueryParam("email");
document.getElementById("phone").textContent = getQueryParam("phone");
document.getElementById("organization").textContent = getQueryParam("organization");
document.getElementById("timestamp").textContent = new Date(getQueryParam("timestamp")).toLocaleString();
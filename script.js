document.getElementById("contactButton").addEventListener("click", function() {
    var contactInfo = document.getElementById("contactInfo");
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
});

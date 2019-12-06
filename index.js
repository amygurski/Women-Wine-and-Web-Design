function toggleList() {
    var collapsibleList = document.getElementById("list");
    var button = document.getElementById("toggle-button");

    if(collapsibleList.style.display === "none") {
        button.innerHTML = "Hide";
        collapsibleList.style.display = "block";
    } else {
        button.innerHTML = "Show";
        collapsibleList.style.display = "none";
    }   
}
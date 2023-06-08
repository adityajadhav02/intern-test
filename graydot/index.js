function allowDrop(e) {
    e.preventDefault();
}
  
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    e.currentTarget.style.border = "dashed";
    e.currentTarget.style.backgroundColor = "rgb(153, 153, 238)";
    e.currentTarget.style.color = "rgb(99, 99, 232)";
    e.currentTarget.style.transition = "all 0.5s ease";
}
  
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));

    // popup
    var popup = document.createElement("div");
    popup.setAttribute("class", "popup");
    popup.setAttribute("id", "popup");
    popup.innerHTML = "Object dropped successfully!";

    document.body.appendChild(popup);

    setTimeout(function() {
        document.getElementById("popup").remove();
    }
    , 2000);
}

function reset() {
    location.reload();
}

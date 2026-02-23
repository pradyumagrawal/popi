let t = true;
document.querySelector("#burger").addEventListener("click", function () {
    let menu = document.getElementById("menuopt");
    console.log("running.")
    if (t == true) {
        menu.style.display = "block";
        t = false;
        console.log("block");
    }
    else{
        menu.style.display = "none";
        t = true;
        console.log("none");
    }
});
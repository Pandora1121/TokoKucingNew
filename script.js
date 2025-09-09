var input = document.getElementById("toggle");
input.addEventListener("change", function() {
    if (this.checked) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
}); 

input.addEventListener("click", function() {
    if (this.checked) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
}); 

if (input.checked) {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
} else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
}

input.addEventListener("dblclick", function() {
    if (this.checked) {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
}); 
const data = ["kucing ", "ikan", "burung", "ular"];
function search() {
    let input =
    document.getElementById("search-bar").value.toLowerCase();
    let hasil = data.filter (item=>
    item.toLowerCase().includes(input));
    if (hasil.length > 0) {
        dokument.getElementById("hasil").innerTekt = "hasil: " + hasil.join(", ");
    } else {
        dokument.getElementById("hasil").innerTekt = "tidak ada hasil";
    }
}   
    
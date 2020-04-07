document.getElementById("pocket1").addEventListener("click", open_document1);

function open_document1(event) {
    document.getElementById("page1").classList.add("open");
}

document.getElementById("pocket2").addEventListener("click", open_document2);

function open_document2(event) {
    document.getElementById("page2").classList.add("open");
}

document.getElementById("pocket3").addEventListener("click", open_document3);

function open_document3(event) {
    document.getElementById("page3").classList.add("open");
}

document.querySelectorAll(".x").forEach(element => {
    element.addEventListener("click", page_click);
});

function page_click(event) {
    event.toElement.parentElement.classList.remove("open");
}
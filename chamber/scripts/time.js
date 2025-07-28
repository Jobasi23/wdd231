 document.getElementById("timestamp").value = new Date().toISOString();

function showModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

    // Close modal on outside click
window.onclick = function (e) {
    document.querySelectorAll(".modal").forEach((modal) => {
    if (e.target == modal) modal.style.display = "none";
    });
};
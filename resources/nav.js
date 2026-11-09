document.addEventListener("DOMContentLoaded", () => {
    fetch('/resources/nav.html')
        .then(response => {
            if (!response.ok) throw new Error("Failed to load navbar");
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
});
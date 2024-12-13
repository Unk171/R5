const date = new Date();
const formattedDate = date.toLocaleDateString();
document.getElementById("date").textContent = `Today ${formattedDate}.`

onload = function () {
    const timeIds = ['time-0', 'time-1', 'time-2', 'time-3', 'time-4', 'time-5', 'time-6', 'time-7', 'time-8', 'time-9', 'time-10', 'time-11', 'time-12', 'time-13', 'time-14', 'time-15', 'time-16', 'time-17', 'time-18', 'time-19', 'time-20', 'time-21', 'time-22', 'time-23'];
    timeIds.forEach(timeId => {
        const savedValue = localStorage.getItem(timeId);
        if (savedValue) {
            document.getElementById(timeId).value = savedValue;
        }
    });
};

function saveText(timeId) {
    const text = document.getElementById(timeId);
    const value = text.value;
    localStorage.setItem(timeId, value);
}

function background() {
    const fields = document.querySelectorAll("[time]");
    const currentHour = new Date().getHours();
    fields.forEach((field) => {
        const fieldHour = parseInt(field.getAttribute("time"), 10);
        if (currentHour === fieldHour) {
            field.style.backgroundColor = "rgb(255, 147, 147)";
        } else if (currentHour > fieldHour) {
            field.style.backgroundColor = "rgb(209, 209, 209)"
        }
    })
}

background()
setInterval(background, 30000)

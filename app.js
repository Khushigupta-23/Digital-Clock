function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    //The above line converts 24 hour formate to 12 hours formate
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock();
function convertAgeToDays(){
    let age = parseInt(document.getElementById('age').value);

    if (isNaN(age)) {
        alert('Please enter a valid age.');
        return;
    }
    let days = age * 365.25;
    document.getElementById('days').value = days.toFixed(2);
}
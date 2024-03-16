document.getElementById('ageCalculator').addEventListener('submit', function(e) {
    e.preventDefault();
    var userName = document.getElementById('name').value; 
    var year = parseInt(document.getElementById('year').value);
    var month = parseInt(document.getElementById('month').value) - 1;
    var day = parseInt(document.getElementById('day').value);
    var todaysDate = new Date(); 
    var birthDate = new Date(year, month, day);
    var getAge = todaysDate.getFullYear() - birthDate.getFullYear();
    var getMonth = todaysDate.getMonth() - birthDate.getMonth();
    if (getMonth < 0 || (getMonth === 0 && todaysDate.getDate() < birthDate.getDate())) {
        getAge--;
    }
    document.getElementById('ageresult').innerHTML = " Hi " +  userName + ", you are " + getAge + " years old";
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('ageCalculator').reset;
    document.getElementById('ageresult').innerHTML = "Age";
});

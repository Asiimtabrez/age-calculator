function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('result').innerText = "Please select a valid birth date.";
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for negative days
    if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // Adjust for negative months
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('result').innerText = 
        `You are ${years} years, ${months} months, and ${days} days old.`;
}

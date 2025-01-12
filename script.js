function checkEligibility() {
    const height = parseInt(document.getElementById('height').value,10);
    const age = parseInt(document.getElementById('age').value,10);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');
    let isEligible = false;
    if (operator === "AND") {
        isEligible = (height >= 150 && age >= 10);
    } else if (operator === "OR") {
        isEligible = (height >= 150 || age >= 10 );
    }
    if (isEligible) {
        resultElement.textContent = "ジェットコースターに乗れます！";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "ジェットコースターに乗れません。";
        resultElement.style.color = "red";
    }
}

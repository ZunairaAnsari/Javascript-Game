const dice = () => {
    let num1 = Math.floor(Math.random() * 6 + 1);
    let num2 = Math.floor(Math.random() * 6 + 1);
    let sum = num1 + num2;

    document.getElementById("counter-value1").textContent = num1;
    document.getElementById("counter-value2").textContent = num2;
    document.getElementById("counter-sum").textContent = sum;

    let selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked').id;

    if (selectedOption === "flexRadioDefault1") {
        if (sum < 7) {
            document.getElementById("result-text").textContent = "You win";
        } else {
            document.getElementById("result-text").textContent = "You lose";
        }
    } else if (selectedOption === "flexRadioDefault2") {
        if (sum > 7) {
            document.getElementById("result-text").textContent = "You win";
        } else {
            document.getElementById("result-text").textContent = "You lose";
        }
    }

    else if (selectedOption === "flexRadioDefault3") {
        if (sum === 7) {
            document.getElementById("result-text").textContent = "You win";
        }
        else{
            document.getElementById("result-text").textContent = "You lose";
        }
    }
    console.log(num1, num2, sum);
};

const reset = () => {
    document.getElementById("counter-value1").textContent = "";
    document.getElementById("counter-value2").textContent = "";
    document.getElementById("counter-sum").textContent = "";
    document.getElementById("result-text").textContent = "";
};

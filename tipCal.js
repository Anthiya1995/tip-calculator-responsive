
    const calculateTip = () => {
        const billAmount = parseFloat(document.getElementById("billAmount").value);
        const tipPercentage = parseFloat(document.getElementById("tip").value) / 100;

        if (isNaN(billAmount) || isNaN(tipPercentage)) {
            alert('Please enter valid numbers');
            return;
        }

        const tipAmount = billAmount * tipPercentage;
        const totalAmount = billAmount + tipAmount;

        document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
    };

    document.getElementById("calculate-button").addEventListener("click", calculateTip);

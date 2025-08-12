function compute()
{
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    const interest = principal * years * rate / 100;
    const amount = parseInt(principal) + parseFloat(interest)

    const result = document.getElementById("result");
    result.textContent = amount;
    let year = new Date().getFullYear() + parseInt(years);

    if(principal < 1){
        alert("Please enter a positive number for the principal.");
        document.getElementById("principal").focus();
    }
    else{
        result.innerHTML = "If you deposit $" + "<mark>" + principal +
            "</mark>" + ",\<br\> at an interest rate of " + "<mark>" +
            rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" +
            "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" +
            year + "</mark>" + "\<br\>";
    }
    
}


function updateRate()
{
    let rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rate;
}
        
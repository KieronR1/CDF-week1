console.log("JavaScript file is successfully linked!");
window.onload = function () {
    // Displaying an initial output to the console
    console.log("The page has fully loaded.");
    //Show an alert on page load
    alert("Welcome to the Seminar 2 Worksheet!");
    const btnGreet = document.getElementById("btnGreet");
    const txtUsername = document.getElementById("txtUsername");
    const headGreet = document.getElementById("headGreet");
    btnGreet.onclick = function () {
        let name = txtUsername.value;
        let greeting = "Hello " + name;
        console.log(greeting); // Console
        alert(greeting); // Alert
        headGreet.innerText = greeting; // Heading update
    };
    //Task 4 =========================================
    const ddlFruit = document.getElementById('ddlFruit');
    const chkTerms = document.getElementById('chkTerms');
    const pFruitOut = document.getElementById('pFruitOut');
   

    function updateFormDisplay() {
        pFruitOut.innerText = `Selection: ${ddlFruit.value} | Agreed: ${chkTerms.checked}`;
    }
    // Set event handlers for 'change'
    ddlFruit.onchange = updateFormDisplay;
    chkTerms.onchange = updateFormDisplay;
};

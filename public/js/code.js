window.doLogin = function() {
    const login = document.getElementById("loginInput").value;
    const password = document.getElementById("passwordInput").value;

    fetch("../api/Login.php", {  // <-- changed path here
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: login, password: password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // debug output
        if (data.error !== "") {
            document.getElementById("loginResult").innerText = data.error;
        } else {
            localStorage.setItem("userId", data.id);
            window.location.href = "color.html";
        }
    })
    .catch(error => console.error(error));
};

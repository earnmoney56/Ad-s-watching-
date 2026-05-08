<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jh Seller Dashboard</title>
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-database-compat.js"></script>
    <style>
        /* Aapka Mojooda Design jo Screenshot mein hai */
        body { font-family: 'Segoe UI', sans-serif; background-color: #fdf8f3; margin: 0; padding: 20px; text-align: center; }
        .main-card { background: white; border-radius: 30px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); max-width: 400px; margin: auto; border: 1px solid #eee; }
        .balance-label { color: #bca08d; font-weight: bold; letter-spacing: 1px; font-size: 14px; }
        .balance-amount { font-size: 50px; color: #6e5444; margin: 10px 0; font-weight: bold; }
        .btn-withdraw { background: #f39200; color: white; border: none; padding: 15px; width: 100%; border-radius: 15px; font-size: 18px; font-weight: bold; cursor: pointer; }
        .menu-grid { display: grid; grid-template-columns: repeat(4, 1-fr); gap: 10px; max-width: 400px; margin: 30px auto; }
        .menu-item { background: white; padding: 15px 5px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.03); font-size: 12px; cursor: pointer; }
    </style>
</head>
<body>

<div class="main-card">
    <div class="balance-label">💳 AVAILABLE BALANCE</div>
    <div class="balance-amount">RS <span id="userBalance">0.00</span></div>
    <button class="btn-withdraw" onclick="withdraw()">Withdraw Funds →</button>
</div>

<div class="menu-grid" style="display: flex; justify-content: space-around;">
    <div class="menu-item" onclick="doTask()">📊<br>Tasks</div>
    <div class="menu-item">👛<br>Wallet</div>
    <div class="menu-item">🎁<br>Rewards</div>
    <div class="menu-item">📈<br>Salary</div>
</div>

<script>
    // Aapka Firebase Config
    const firebaseConfig = {
        apiKey: "AIzaSyC7z-L...", 
        authDomain: "jh-seller-3b8e7.firebaseapp.com",
        databaseURL: "https://jh-seller-3b8e7-default-rtdb.firebaseio.com",
        projectId: "jh-seller-3b8e7",
        storageBucket: "jh-seller-3b8e7.appspot.com",
        messagingSenderId: "367123565013",
        appId: "1:367123565013:web:75304918e7c10b71946001"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    // 1. Balance Load Karna
    db.ref('users/test_user').on('value', (snapshot) => {
        const data = snapshot.val();
        if(data) document.getElementById('userBalance').innerText = data.balance.toFixed(2);
    });

    // 2. Task Karne Par Paise Milna
    function doTask() {
        let current = parseFloat(document.getElementById('userBalance').innerText);
        let updated = current + 50.00;
        db.ref('users/test_user').update({ balance: updated });
        alert("Task Completed! RS 50.00 added.");
    }

    // 3. Withdraw Function
    function withdraw() {
        let amount = document.getElementById('userBalance').innerText;
        if(amount < 500) {
            alert("Minimum Withdraw RS 500 hai.");
        } else {
            let phone = prompt("Apna EasyPaisa/JazzCash Number likhein:");
            if(phone) {
                db.ref('withdraw_requests').push({ number: phone, amount: amount });
                alert("Request bhej di gayi hai!");
            }
        }
    }
</script>

</body>
</html>

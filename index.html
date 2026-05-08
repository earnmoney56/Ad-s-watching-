<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jh Seller Dashboard</title>
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-database-compat.js"></script>
    <style>
        body { font-family: sans-serif; background: #1a1a1a; color: white; text-align: center; padding: 50px 20px; }
        .box { background: #222; padding: 30px; border-radius: 20px; border: 2px solid #00ff88; max-width: 300px; margin: auto; }
        #balance { font-size: 40px; color: #00ff88; margin: 10px 0; font-weight: bold; }
        button { background: #00ff88; color: black; border: none; padding: 15px 30px; border-radius: 10px; font-weight: bold; cursor: pointer; width: 100%; }
    </style>
</head>
<body>

<div class="box">
    <h2>Jh Seller</h2>
    <p>Current Balance</p>
    <div id="balance">RS 0</div>
    <button onclick="addMoney()">Claim RS 50</button>
</div>

<script>
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
    const database = firebase.database();

    function addMoney() {
        let current = parseInt(document.getElementById('balance').innerText.replace('RS ', ''));
        let update = current + 50;
        database.ref('users/test_user').set({ balance: update });
        alert("Success! RS 50 added.");
    }

    database.ref('users/test_user').on('value', (s) => {
        const val = s.val();
        if(val) document.getElementById('balance').innerText = "RS " + val.balance;
    });
</script>
</body>
</html>

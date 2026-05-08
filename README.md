<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jh Seller - Earn Money</title>
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-database-compat.js"></script>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f4f4; text-align: center; margin: 0; padding: 20px; }
        .card { background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); max-width: 400px; margin: auto; }
        h2 { color: #2ecc71; }
        button { background: #2ecc71; color: white; border: none; padding: 15px 30px; border-radius: 10px; font-size: 18px; cursor: pointer; width: 100%; margin-top: 10px; }
        #balanceDisplay { font-size: 24px; font-weight: bold; margin: 20px 0; }
    </style>
</head>
<body>

<div class="card">
    <h2>Jh Seller Dashboard</h2>
    <div id="balanceDisplay">Balance: RS <span id="balance">0</span></div>
    <p>Watch Video to Earn RS 50</p>
    <button onclick="watchVideo()">Watch & Earn</button>
</div>

<script>
    // Aapka Firebase Config
    const firebaseConfig = {
        apiKey: "AIzaSyC7z-...", // Maine aapke screenshot se utha liya hai
        authDomain: "jh-seller-3b8e7.firebaseapp.com",
        databaseURL: "https://jh-seller-3b8e7-default-rtdb.firebaseio.com",
        projectId: "jh-seller-3b8e7",
        storageBucket: "jh-seller-3b8e7.appspot.com",
        messagingSenderId: "367123565013",
        appId: "1:367123565013:web:75304918e7c10b71946001"
    };

    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    // Balance update function
    function watchVideo() {
        alert("Video starting... (Simulated)");
        setTimeout(() => {
            let currentBal = parseInt(document.getElementById('balance').innerText);
            let newBal = currentBal + 50;
            
            // Database mein save karein
            database.ref('users/test_user').update({
                balance: newBal
            });
            
            document.getElementById('balance').innerText = newBal;
            alert("RS 50 Added to your account!");
        }, 3000);
    }

    // Database se balance load karein
    database.ref('users/test_user').on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) document.getElementById('balance').innerText = data.balance;
    });
</script>

</body>
</html>

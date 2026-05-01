<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EarnPro - Watch & Earn</title>
    <style>
        :root { --primary: #FF8C00; --bg: #f8f9fa; --text: #333; }
        body { font-family: sans-serif; background: var(--bg); margin: 0; color: var(--text); padding-bottom: 70px; }
        .top-bar { background: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .card { background: white; margin: 15px; padding: 25px; border-radius: 20px; text-align: center; border: 1px solid #eee; }
        .balance { font-size: 35px; font-weight: bold; color: var(--primary); margin: 10px 0; }
        .btn { background: var(--primary); color: white; border: none; padding: 12px 25px; border-radius: 10px; font-weight: bold; width: 100%; cursor: pointer; }
        .task-list { padding: 15px; }
        .task-card { background: white; padding: 15px; border-radius: 15px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .nav-bar { position: fixed; bottom: 0; width: 100%; background: white; display: flex; justify-content: space-around; padding: 15px 0; border-top: 1px solid #eee; }
        .nav-item { font-size: 12px; text-align: center; color: #888; cursor: pointer; }
        .nav-item.active { color: var(--primary); font-weight: bold; }
        #ad-timer { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: white; z-index: 1000; flex-direction: column; justify-content: center; align-items: center; }
    </style>
</head>
<body>

    <div class="top-bar">
        <strong>EarnPro</strong>
        <span>👤 User_123</span>
    </div>

    <div id="home-section">
        <div class="card">
            <div style="font-size: 14px; color: #888;">TOTAL EARNINGS</div>
            <div class="balance">Rs. <span id="balance-val">0.00</span></div>
            <button class="btn" onclick="showSection('wallet')">Withdraw Money</button>
        </div>

        <div class="task-list">
            <h3>Daily Tasks</h3>
            <div class="task-card">
                <div><strong>Watch Video Ad</strong><br><small>Earn Rs. 10.00</small></div>
                <button onclick="startTask(10)" style="background: #4CAF50; color: white; border: none; padding: 8px 15px; border-radius: 5px;">Watch</button>
            </div>
            <div class="task-card">
                <div><strong>Visit Website</strong><br><small>Earn Rs. 5.00</small></div>
                <button onclick="startTask(5)" style="background: #4CAF50; color: white; border: none; padding: 8px 15px; border-radius: 5px;">Visit</button>
            </div>
        </div>
    </div>

    <div id="ad-timer">
        <h2>Watching Ad...</h2>
        <div id="timer-text" style="font-size: 40px; font-weight: bold; color: var(--primary);">15s</div>
        <p>Please don't close the window</p>
    </div>

    <div class="nav-bar">
        <div class="nav-item active" onclick="showSection('home')">🏠<br>Home</div>
        <div class="nav-item" onclick="showSection('task')">📋<br>Tasks</div>
        <div class="nav-item" onclick="showSection('wallet')">👛<br>Wallet</div>
        <div class="nav-item">⚙️<br>Profile</div>
    </div>

    <script>
        let balance = 0;

        function startTask(reward) {
            document.getElementById('ad-timer').style.display = 'flex';
            let timeLeft = 15;
            let timer = setInterval(() => {
                timeLeft--;
                document.getElementById('timer-text').innerText = timeLeft + 's';
                if(timeLeft <= 0) {
                    clearInterval(timer);
                    document.getElementById('ad-timer').style.display = 'none';
                    balance += reward;
                    document.getElementById('balance-val').innerText = balance.toFixed(2);
                    alert("Reward Added! Rs. " + reward);
                }
            }, 1000);
        }

        function showSection(name) {
            alert(name.toUpperCase() + " section coming soon!");
        }
    </script>
</body>
</html>

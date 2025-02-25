/* global score */
/* global updateHUD */

    window.score = 0; // 

    function updateHUD() {
        if (typeof window.score === "undefined") {
            console.error("❌ ERROR: `score` is undefined!");
            return;
        }
    
        console.log("🔄 Updating HUD. Score:", window.score);
    
        let hudScore = document.getElementById("score");
        if (!hudScore) {
            console.error("❌ ERROR: `#score` element not found in index.html!");
            return;
        }
        hudScore.textContent = window.score;
    
        let floatingScore = document.querySelector("#floating-score");
        if (floatingScore) {
            floatingScore.setAttribute("text", "value", "Score: " + window.score);
        } else {
            console.warn("⚠️ Warning: Floating 3D score entity not found.");
        }
    }    

    function addScore(points) {
        if (typeof window.score === "undefined") {
            console.error("ERROR: `score` is undefined! Resetting to 0.");
            window.score = 0;
        }
    
        window.score += points;
        console.log("Score updated to:", window.score);
        updateHUD();
    }
    
    let timeLeft = 30;
    let timerInterval;
    
    function startTimer() {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateHUD();
            } else {
                clearInterval(timerInterval);
                alert("Game Over! Final Score: " + score);
            }
        }, 1000);
    }
    
    window.onload = function () {
        console.log("✅ Page loaded. Checking HUD...");
        
        if (!document.getElementById("score")) {
            console.error("❌ ERROR: `#score` element not found in index.html!");
        } else {
            updateHUD();
        }
    };    
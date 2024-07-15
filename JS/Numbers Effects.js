
    // Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", function () {
       
        const happyClientNumber = document.querySelector(".fourth-version-card-number");
        const membersNumber = document.querySelector(".fourth-version-card-second-number");
        const staffsNumber = document.querySelector(".fourth-version-card-third-number");
        const followersNumber = document.querySelector(".fourth-version-card-fourth-number");

        
        const targetHappyClients = 3423;
        const targetMembers = 4398;
        const targetStaffs = 50;
        const targetFollowers = 2000;
        
        // Function to animate counting up
        function animateCountUp(element, targetValue) {
            let currentValue = 0;
            const increment = Math.ceil(targetValue / 100);

            function updateValue() {
                currentValue += increment;
                if (currentValue >= targetValue) {
                    element.textContent = targetValue;
                } else {
                    element.textContent = currentValue;
                    requestAnimationFrame(updateValue);
                }
            }

            requestAnimationFrame(updateValue);
        }

        // Start counting up for each statistic
        animateCountUp(happyClientNumber, targetHappyClients);
        animateCountUp(membersNumber, targetMembers);
        animateCountUp(staffsNumber, targetStaffs);
        animateCountUp(followersNumber, targetFollowers);
    });
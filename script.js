
  // Get references to the elements
  const dayElement = document.getElementById("day");
  const weekdayElement = document.getElementById("weekday");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");
  const greetingElement = document.getElementById("greeting"); // Reference to greeting element
  // Function to update the date and time
        function updateDateTime() {
            const now = new Date();

            // Update day
            dayElement.textContent = now.toLocaleDateString("en-US", { day: "numeric" });

            // Update weekday
            weekdayElement.textContent = now.toLocaleDateString("en-US", { weekday: "long" });

            // Update month and year
            monthElement.textContent = now.toLocaleDateString("en-US", { month: "long" });
            yearElement.textContent = now.getFullYear();

            // Update greeting based on time
            const hour = now.getHours();
            let greeting;
            if (hour < 12) {
                greeting = "Hey, Good morning";
            } else if (hour < 18) {
                greeting = "Good afternoon";
            } else {
                greeting = "Good night";
            }
            greetingElement.textContent = greeting;
        }
  // Call the function initially
  updateDateTime();

  // Update every second
  setInterval(updateDateTime, 1000);

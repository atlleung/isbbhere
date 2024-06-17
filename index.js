// index.js

// Function to update the status display and latest update based on main_status value
function updateStatus() {
    const statusDisplay = document.getElementById('status-display');
    const statusText = document.getElementById('status-text');
    const latestUpdate = document.getElementById('latest-update');

    // Assuming data is fetched asynchronously from data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            statusData = data;
            if (statusData.main_status === 1) {
                statusDisplay.classList.remove('bg-danger'); // Remove Bootstrap bg-danger
                statusDisplay.classList.add('bg-success');   // Add Bootstrap bg-success
                statusText.textContent = statusData.status_text[1];
            } else {
                statusDisplay.classList.remove('bg-success'); // Remove Bootstrap bg-success
                statusDisplay.classList.add('bg-danger');     // Add Bootstrap bg-danger
                statusText.textContent = statusData.status_text[0];
            }
            latestUpdate.textContent = statusData.latest_update;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call updateStatus function initially to set the initial status
updateStatus();

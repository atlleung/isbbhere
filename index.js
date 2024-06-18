// Function to update the status display and latest update based on main_status value
function updateStatus() {
    const statusDisplay = document.getElementById('status-display');
    const statusText = document.getElementById('status-text');
    const latestUpdatesContainer = document.getElementById('latest-updates');
    const updateTemplate = document.getElementById('update-template');

    // Assuming data is fetched asynchronously from data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const statusData = data;
            if (statusData.main_status === 2) {
                statusDisplay.classList.remove('bg-danger', 'bg-warning');
                statusDisplay.classList.add('bg-success');
                statusText.textContent = statusData.status_text[statusData.main_status];
            } else if (statusData.main_status === 1){
                statusDisplay.classList.remove('bg-success', 'bg-danger');
                statusDisplay.classList.add('bg-warning');
                statusText.textContent = statusData.status_text[statusData.main_status];
            } else {
                statusDisplay.classList.remove('bg-success', 'bg-warning');
                statusDisplay.classList.add('bg-danger');
                statusText.textContent = statusData.status_text[statusData.main_status];
            }

            // Clear existing updates
            latestUpdatesContainer.innerHTML = '';

            // Populate latest updates
            statusData.latest_update.reverse().forEach(update => {
                const updateCard = document.createElement('div');
                updateCard.className = 'card mb-2 w-100'; // Bootstrap card with bottom margin

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = update;

                cardBody.appendChild(cardText);
                updateCard.appendChild(cardBody);
                latestUpdatesContainer.appendChild(updateCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call updateStatus function initially to set the initial status
updateStatus();

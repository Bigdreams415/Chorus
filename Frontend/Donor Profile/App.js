// Notification functionality
let notificationCount = 0;

// Function to add a new notification
function addNotification() {
    notificationCount++;
    const notificationElement = document.getElementById("notificationCount");
    notificationElement.innerText = notificationCount;
    notificationElement.style.display = 'inline'; // Show notification count
}

// Function to clear notifications
function clearNotifications() {
    notificationCount = 0;
    const notificationElement = document.getElementById("notificationCount");
    notificationElement.style.display = 'none'; // Hide notification count
}

// Simulate adding notifications (for demo purposes)
setTimeout(addNotification, 2000); // Adds 1 notification after 2 seconds
setTimeout(addNotification, 4000); // Adds another notification after 4 seconds

// Function to trigger the hidden file input when edit button is clicked
function triggerFileInput() {
    document.getElementById('fileInput').click();  // Opens file dialog
}

// Function to change the profile picture when a file is selected
function editProfilePic() {
    const fileInput = document.getElementById('fileInput');
    const profilePic = document.getElementById('profilePic');

    // Check if a file was selected
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        // When the file is loaded, set it as the new profile picture
        reader.onload = function (e) {
            profilePic.src = e.target.result;
        };

        // Read the selected file as a data URL (base64 encoded string)
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Edit Education
function editEducation() {
    const education = prompt("Enter your education details:", document.getElementById('educationDetails').textContent);
    const institution = prompt("Enter your institution:", document.getElementById('educationInstitution').textContent);

    if (education !== null) {
        document.getElementById('educationDetails').textContent = education;
    }
    if (institution !== null) {
        document.getElementById('educationInstitution').textContent = institution;
    }
}

// Edit Skills
function editSkills() {
    const skill1 = prompt("Enter your first skill:", document.getElementById('skill1').textContent);
    const skill2 = prompt("Enter your second skill:", document.getElementById('skill2').textContent);

    if (skill1 !== null) {
        document.getElementById('skill1').textContent = skill1;
    }
    if (skill2 !== null) {
        document.getElementById('skill2').textContent = skill2;
    }
}

// Open Sidebar Function
function openSidebar() {
    document.getElementById('sidebar').classList.remove('hidden'); // Show sidebar
    document.getElementById('contentWrapper').style.marginLeft = '250px'; // Shift content to the right
    document.getElementById('contentWrapper').style.width = 'calc(100% - 250px)'; // Adjust content width
    document.getElementById('menuIcon').style.display = 'none'; // Hide hamburger icon
}

// Close Sidebar Function
function closeSidebar() {
    document.getElementById('sidebar').classList.add('hidden'); // Hide sidebar
    document.getElementById('contentWrapper').style.marginLeft = '0'; // Reset content position
    document.getElementById('contentWrapper').style.width = '100%'; // Expand content to full width
    document.getElementById('menuIcon').style.display = 'block'; // Show hamburger icon
}


// Function to hide all sections and show only the clicked section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('#contentWrapper > div').forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Event listeners for sidebar links
document.getElementById('dashboardLink').addEventListener('click', function() {
    showSection('Dashboard');
});

document.getElementById('DonateLink').addEventListener('click', function() {
    showSection('Donate');
});

document.getElementById('profileLink').addEventListener('click', function() {
    showSection('Profile');
});

document.getElementById('communityLink').addEventListener('click', function() {
    showSection('Community');
});


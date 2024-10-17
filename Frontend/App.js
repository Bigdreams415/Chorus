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
    document.getElementById('contentWrapper').classList.add('contracted'); // Contract content
    document.getElementById('menuIcon').style.display = 'none'; // Hide hamburger icon
}

// Close Sidebar Function
function closeSidebar() {
    document.getElementById('sidebar').classList.add('hidden'); // Hide sidebar
    document.getElementById('contentWrapper').classList.remove('contracted'); // Expand content
    document.getElementById('menuIcon').style.display = 'block'; // Show hamburger icon
}

// Changing main content to multistep form
document.addEventListener('DOMContentLoaded', () => {
    const applyBtns = document.querySelectorAll('.apply-btn'); // Select all buttons with class 'apply-btn'
    const mainContent = document.getElementById('contentWrapper'); // Make sure this ID matches in your HTML
    const formContainer = document.getElementById('formContainer');

    console.log('Apply buttons detected:', applyBtns); // Log the apply buttons
    console.log('Main Content Element:', mainContent); // Log the mainContent element

    if (applyBtns.length > 0) {
        applyBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                console.log('Apply button clicked:', index);
                
                if (mainContent) { // Check if mainContent exists
                    // Replace the content of mainContent with the formContainer
                    mainContent.innerHTML = formContainer.innerHTML;
                } else {
                    console.error('Main content not found');
                }
            });
        });
    } else {
        console.error('Apply buttons not found');
    }
});


// Assuming your buttons have the class 'apply-btn'
document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.apply-btn');
    const formContainer = document.querySelector('.formContainer');

    applyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Show the form container when an apply button is clicked
            formContainer.style.display = 'block';
            // Optionally hide the main content
            document.querySelector('.main-content').style.display = 'none';
        });
    });
});


// Function to move to the next step in the multi-step form
function nextStep(currentStep) {
    const currentFormStep = document.getElementById(`step-${currentStep}`);
    const nextFormStep = document.getElementById(`step-${currentStep + 1}`);
    const progressCircle = document.getElementById(`step${currentStep}`);
    const nextProgressCircle = document.getElementById(`step${currentStep + 1}`);
    
    // Hide the current step and show the next step
    if (currentFormStep) {
        currentFormStep.style.display = 'none';
    }
    
    if (nextFormStep) {
        nextFormStep.style.display = 'block';
    }

    // Update progress circles
    if (progressCircle) {
        progressCircle.classList.remove('active');
    }
    
    if (nextProgressCircle) {
        nextProgressCircle.classList.add('active');
    }
}

// Function to move to the previous step in the multi-step form
function prevStep(currentStep) {
    const currentFormStep = document.getElementById(`step-${currentStep}`);
    const prevFormStep = document.getElementById(`step-${currentStep - 1}`);
    const progressCircle = document.getElementById(`step${currentStep}`);
    const prevProgressCircle = document.getElementById(`step${currentStep - 1}`);
    
    // Hide the current step and show the previous step
    if (currentFormStep) {
        currentFormStep.style.display = 'none';
    }
    
    if (prevFormStep) {
        prevFormStep.style.display = 'block';
    }

    // Update progress circles
    if (progressCircle) {
        progressCircle.classList.remove('active');
    }
    
    if (prevProgressCircle) {
        prevProgressCircle.classList.add('active');
    }
}

// Function to submit the form
function submitForm() {
    const reviewContent = document.getElementById('reviewContent');

    // Gather all input data for review
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const educationLevel = document.getElementById('educationLevel').value;
    const schoolName = document.getElementById('schoolName').value;
    const major = document.getElementById('major').value;
    const fundingNeeded = document.getElementById('fundingNeeded').value;
    const amountRequested = document.getElementById('amountRequested').value;

    // Populate review section
    reviewContent.innerHTML = `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Education Level:</strong> ${educationLevel}</p>
        <p><strong>School Name:</strong> ${schoolName}</p>
        <p><strong>Major:</strong> ${major}</p>
        <p><strong>Funding Needed:</strong> ${fundingNeeded}</p>
        <p><strong>Amount Requested:</strong> ${amountRequested}</p>
    `;

    // Show review step and hide others
    document.querySelectorAll('.form-step').forEach(step => step.style.display = 'none');
    document.getElementById('review').style.display = 'block';
}

function showConfirmationModal() {
    document.getElementById('confirmationModal').style.display = 'flex';
}

// Call this function when the form submission is successful.


// Hiding Content Based on links click
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

document.getElementById('applicationLink').addEventListener('click', function() {
    showSection('ScholarshipApplication');
});

document.getElementById('profileLink').addEventListener('click', function() {
    showSection('Profile');
});

document.getElementById('communityLink').addEventListener('click', function() {
    showSection('Community');
});

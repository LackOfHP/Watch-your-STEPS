console.log('!!Watch your STEPS!! Game Loaded');

// Login Page Logic
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form default behavior

    const username = document.getElementById('username').value;
    console.log('Username:', username);

    if (username.trim() !== '' && username.includes('UITS')) {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('page1').style.display = 'block';
    } else {
        alert('BEGONE OUTSIDER!!!!!');
    }
});

// Game Page Navigation Logic
const nextButtons = document.querySelectorAll('.nextButton');
nextButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        const nextPageId = event.target.getAttribute('data-next');
        console.log('Navigating to:', nextPageId);

        // Restart conditions with custom messages
        if (isRestartCondition(event.target)) {
            alert(getRestartMessage(nextPageId, event.target.textContent));
            restartGame();
        } else {
            navigateToNextPage(nextPageId);
        }
    });
});

// Final Page Logic
const finalButtons = document.querySelectorAll('#finalButton');
finalButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        if (event.target.textContent.trim() === 'Most Welcome') {
            console.log('Game Completed');
            alert('Congratulations! You made it through the maze!');
        } else {
            alert('Game Restarted! Choose wisely!');
            restartGame();
        }
    });
});

// Helper Functions
function isRestartCondition(button) {
    const pageId = button.closest('.gamePage').id;
    const choice = button.textContent.trim();

    // Conditions for wrong answers
    const restartConditions = {
        page1: choice !== '10',
        page2: choice !== 'Lurk',
        page3: choice !== 'Yes',
        page4: choice !== 'Watch',
        page5: choice !== '',
        page6: choice !== 'I see...',
        page7: choice !== 'Good'
    };

    return restartConditions[pageId] || false;
}

function getRestartMessage(pageId, choice) {
    const messages = {
        page2: 'Wrong answer! Restarting...',
        page3: 'Wrong answer! Restarting...',
        page4: 'GO LIFT SOME DUMBELLS YOU HIPPOSAURUS!!',
        page5: 'How dare you to ignore the system? Know your place peasant..',
        page6: 'Didn\'t I tell you to watch your steps???',
        page7: 'You are still not sure what you have to expect?? YOU AMATEUR!!',
        page8: 'Then make yourself a better one'
    };
    return messages[pageId] || 'Restarting the game...';
}

function restartGame() {
    console.log('Game Restarted');
    document.querySelectorAll('.gamePage').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById('loginPage').style.display = 'block';
}

function navigateToNextPage(nextPageId) {
    document.querySelectorAll('.gamePage').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(nextPageId).style.display = 'block';
}

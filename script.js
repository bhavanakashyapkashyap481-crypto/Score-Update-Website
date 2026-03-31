let teams = [];

function addTeam() {
    let teamInput = document.getElementById("teamName");
    let name = teamInput.value;

    if (name === "") {
        alert("Enter team name!");
        return;
    }

    let team = {
        name: name,
        score: 0
    };

    teams.push(team);
    teamInput.value = "";
    displayTeams();
}

function displayTeams() {
    let board = document.getElementById("scoreBoard");
    board.innerHTML = "";

    teams.forEach((team, index) => {
        board.innerHTML += `
            <div class="team">
                <h2>${team.name}</h2>
                <div class="score">${team.score}</div>
                <div class="controls">
                    <button onclick="increaseScore(${index})">+1</button>
                    <button onclick="decreaseScore(${index})">-1</button>
                    <button onclick="resetScore(${index})">Reset</button>
                </div>
            </div>
        `;
    });
}

function increaseScore(index) {
    teams[index].score++;
    displayTeams();
}

function decreaseScore(index) {
    if (teams[index].score > 0) {
        teams[index].score--;
    }
    displayTeams();
}

function resetScore(index) {
    teams[index].score = 0;
    displayTeams();
}
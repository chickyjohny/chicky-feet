class ChickyFeetGame {
    constructor(gameName, gameCreator, maxPlayers) {
      this.gameName = gameName;
      this.gameCreator = gameCreator;
      this.maxPlayers = maxPlayers;
      this.players = [];
      this.currentRound = 1;
    }
  
    addPlayer(playerName) {
      if (this.players.length < this.maxPlayers) {
        this.players.push(playerName);
        console.log(`${playerName} has joined the ${this.gameName} game.`);
      } else {
        console.log(`Sorry, ${playerName}. The game is full.`);
      }
    }
  
    startRound() {
      console.log(`Starting Round ${this.currentRound} of ${this.gameName}. Get ready!`);
      // Add game logic for each round as needed.
      // For simplicity, this example only increments the round number.
      this.currentRound++;
    }
  
    endGame() {
      console.log(`Game over! Thank you for playing ${this.gameName}.`);
    }
  
    displayGameInfo() {
      console.log(`
        ${this.gameName} Game Information:
        Game Creator: ${this.gameCreator}
        Maximum Players: ${this.maxPlayers}
        Players: ${this.players.join(', ')}
        Current Round: ${this.currentRound}
      `);
    }
  }
  
  // Example usage
  const chickyFeetGame = new ChickyFeetGame('Chicky Feet', 'GameMaster', 4);
  
  chickyFeetGame.addPlayer('Alice');
  chickyFeetGame.addPlayer('Bob');
  chickyFeetGame.addPlayer('Charlie');
  chickyFeetGame.addPlayer('David'); // This player will be rejected since the game is full.
  
  chickyFeetGame.startRound();
  chickyFeetGame.displayGameInfo();
  chickyFeetGame.endGame();
  
class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;

    //aula 41 - add propriedade  rank para kda jogador
    //aula 41 - armazenar a classificação dos jogadores
    
    //aula 41 -  atribuir o combustível inicial ao jogador
    
    //aula 41 - atribuir vida inicial ao jogador,
    
    //aula 41 - armazenar a pontuação
    
  }

  //aula 41 - OBS.: Crie um campo “CarsAtEnd” (carros no final) no banco de dados Firebase para registrar a classificação do jogador
  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score
    });
  }

  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  //aula 41 -  método para ler o valor do campo CarsAtEnd do banco de dados
  getCarsAtEnd() {
    
  }

  static updateCarsAtEnd(rank) {
    database.ref("/").update({
      carsAtEnd: rank
    });
  }
}

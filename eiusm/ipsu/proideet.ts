
const {GameServerConfigsServiceClient} = require('@google-cloud/game-servers');

const client = new GameServerConfigsServiceClient();

async function callSetActiveGame() {
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'Your Google Cloud Project ID';
  // const deploymentId = 'A unique ID for the Game Server Deployment';
  // const configId = 'A unique ID for the Game Server Config';
  // const realmId = 'A unique ID for the Game Server Realm';
  // const gameServerId = 'A unique ID for the Game Server';
  // const activeGame = {}
  const request = {
    gameServerDeployment: client.gameServerDeploymentPath(
      projectId,
      'global',
      deploymentId
    ),
    gameServerConfig: client.gameServerConfigPath(
      projectId,
      'global',
      realmId,
      configId
    ),
    gameServer: client.gameServerPath(projectId, 'global', realmId, gameServerId),
    activeGame,
  };

  const [operation] = await client.setActiveGame(request);
  const [response] = await operation.promise();
  console.log(response);
}

callSetActiveGame();



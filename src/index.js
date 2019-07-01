require('./room/room.prototype');

module.exports.loop = () => {
  // const startCPU = Game.cpu.getUsed();

  const {rooms: gameRooms, creeps: gameCreeps} = Game;
  const {creeps: memoryCreeps} = Memory;

  if (memoryCreeps) {
    Object.keys(memoryCreeps).forEach((creepId) => {
      const creep = gameCreeps[creepId];
      if (!creep) {
        delete memoryCreeps[creepId];
      } else {
        creep.run();
      }
    });
  }

  if (gameRooms) {
    Object.keys(gameRooms).forEach(roomId => gameRooms[roomId].run());
  }

  // console.log('CPU used:', Game.cpu.getUsed() - startCPU, 'Bucket:', Game.cpu.bucket);
};

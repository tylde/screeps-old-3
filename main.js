module.exports.loop = () => {
  // const startCPU = Game.cpu.getUsed();

  for (let name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
    }
    // else Game.creeps[name].run();
  }

  for (let roomName in Game.rooms) {
    // Game.rooms[roomName].run();
  }

  // console.log('CPU used:', Game.cpu.getUsed() - startCPU, 'Bucket:', Game.cpu.bucket);
};
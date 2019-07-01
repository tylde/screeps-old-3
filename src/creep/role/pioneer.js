Creep.prototype.runPioneer = function runPioneer() {
  const creep = this;

  if (creep.memory.task === 'harvest' && creep.carry.energy === creep.carryCapacity) creep.memory.task = 'pioneer';
  else if (creep.memory.task === 'pioneer' && creep.carry.energy === 0) creep.memory.task = 'harvest';

  if (creep.memory.task === 'harvest') creep.harvestEnergy();
  else if (creep.memory.task === 'pioneer') creep.pioneer();
};

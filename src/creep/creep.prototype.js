require('./role/creep.prototype.role');

Creep.prototype.run = function run() {
  const creep = this;

  const {memory: {role}} = creep;

  switch (role) {
    case 'pioneer': creep.runPioneer(); break;
    default: console.log('Creeps has unknown role!');
  }
};

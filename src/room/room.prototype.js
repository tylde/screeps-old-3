Room.prototype.run = function() {
  const room = this;

  const isRoomMine = room.controller.my;
  const hasControllerLevel = !!room.controller.level;

  if (!isRoomMine || !hasControllerLevel) {
    return;
  }

  console.log('test');
}
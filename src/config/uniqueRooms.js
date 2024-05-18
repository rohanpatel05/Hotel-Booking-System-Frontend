const getUniqueRoomTypes = (rooms) => {
  const uniqueRooms = [];
  const seenTypes = new Set();

  rooms.forEach((room) => {
    if (!seenTypes.has(room.type)) {
      seenTypes.add(room.type);
      uniqueRooms.push(room);
    }
  });

  return uniqueRooms;
};

export default getUniqueRoomTypes;

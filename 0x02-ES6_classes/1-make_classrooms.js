import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const newArray = [];
  for (const size of sizes) {
    const studentClass = new ClassRoom(size);
    newArray.push(studentClass);
  }
  return newArray;
}

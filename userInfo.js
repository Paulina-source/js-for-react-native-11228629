function createUserProfiles(names, modifiedNames) {
  const result = [];
  let id = 1;
  for (let i = 0; i < names.length; i++) {
    result.push({
      originalName: names[i],
      modifiedName: modifiedNames[i],
      id: id
    });
    id++;
  }
  return result;
}

// Example usage:
const names = ['Red', 'Yellow', 'Green', 'Blue', 'Orange'];
const modifiedNames = ['RED', 'yellow', 'green', 'BLUE', 'orange'];
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);

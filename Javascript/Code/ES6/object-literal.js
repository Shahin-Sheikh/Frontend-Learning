function createMachine(name, status) {
  return {
    name,
    status,
  };
}

console.log(createMachine("Computer", "Active"));

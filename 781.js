/**
 * @param {number[]} answers
 * @return {number}
 */


const numRabbits = (answers) => {
    const GROUPS = {};
    const length = answers.length;
    let totalRabbits = 0;
    for (let i = 0; i < length; i++) {
      const response = answers[i];
      if (!GROUPS[response + 1]) {
        GROUPS[response + 1] = 1;
      } else {
        GROUPS[response + 1]++;
      }
    }
    Object.entries(GROUPS).map(([group, rabbits]) => {
      if (Number(rabbits) <= Number(group)) {
        totalRabbits += Number(group);
      } else {
        const noOfSubGroups = Math.ceil(Number(rabbits) / Number(group));
        totalRabbits += noOfSubGroups * Number(group);
      }
    });
    return totalRabbits;
};

export { numRabbits };

function countRedundant(fileName, timestamp) {

  const map = {};

  for (let i = 0; i < fileName.length; i++) {

    if (!map[fileName[i]]) {
      map[fileName[i]] = [];
    }

    map[fileName[i]].push(timestamp[i]);
  }

  let redundant = 0;

  for (let key in map) {

    let times = map[key];
    times.sort((a, b) => a - b);

    let left = 0;

    for (let right = 0; right < times.length; right++) {

      while (times[right] - times[left] > 86400) {
        left++;
      }

      if (right - left + 1 >= 3) {
        redundant++;
        break;
      }
    }
  }

  return redundant;
}

// Example usage:
const fileName = ["file1", "file1", "file1", "file2", "file2"];
const timestamp = [1000, 2000, 3000, 4000, 5000];

console.log(countRedundant(fileName, timestamp)); // Output: 1


// Explanation:
// The function `countRedundant` takes two arrays: `fileName` and `timestamp`. It counts how many files have been accessed at least three times within a 24-hour period (86400 seconds).

// The function first creates a map to group timestamps by file names. Then, for each file, it sorts the timestamps and uses a sliding window approach to check if there are at least three accesses within any 24-hour period. 
// If it finds such a case, it increments the redundant count and moves on to the next file. Finally, it returns the total count of redundant files.   

// ############**********###########
// 1st Step: Map the file names to their corresponding timestamps:

// file1: [1000, 2000, 3000]
// file2: [4000, 5000] 
// After Map the list looks like this:
// {
//   "file1": [1000, 2000, 3000],
//   "file2": [4000, 5000]
// }

// ############**********###########
// 2nd Step: Sort the timestamps for each file by ascending order:

// file1: [1000, 2000, 3000]
// file2: [4000, 5000]

// ############**********###########
// 3rd Step: Use a sliding window approach to check for at least three accesses within a 24-hour period (86400 seconds):

// For file1:
// - Start with left = 0 and right = 0: times[right] - times[left] = 1000 - 1000 = 0 (within 24 hours)
// - Move right to 1: times[right] - times[left] = 2000 - 1000 = 1000 (within 24 hours)
// - Move right to 2: times[right] - times[left] = 3000 - 1000 = 2000 (within 24 hours)
// Since we have at least three accesses within a 24-hour period, we count file1 as redundant.

// For file2:
// - Start with left = 0 and right = 0: times[right] - times[left] = 4000 - 4000 = 0 (within 24 hours)
// - Move right to 1: times[right] - times[left] = 5000 - 4000 = 1000 (within 24 hours)
// Since we only have two accesses, file2 is not redundant.

// ############**********###########
// Final Result: The function returns 1, indicating that there is one redundant file (file1).


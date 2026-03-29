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

// The function first creates a map to group timestamps by file names. Then, for each file, it sorts the timestamps and uses a sliding window approach to check if there are at least three accesses within any 24-hour period. If it finds such a case, it increments the redundant count and moves on to the next file. Finally, it returns the total count of redundant files.   
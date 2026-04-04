function getRecommendedVideos(
  watchedCategories,
  watchedCategoryRelevance,
  availableVideoTitles,
  availableVideoCategories
) {
  // 1. Create map: category → relevance (only for watched categories)
  const relevanceMap = new Map();
  watchedCategories.forEach((cat, i) => {
    relevanceMap.set(cat, watchedCategoryRelevance[i]);
  });

  // 2. Group videos by category
  const videosByCategory = new Map();

  availableVideoTitles.forEach((title, i) => {
    const category = availableVideoCategories[i];
    if (!videosByCategory.has(category)) {
      videosByCategory.set(category, []);
    }
    videosByCategory.get(category).push(title);
  });

  // 3. Sort titles alphabetically inside each category
  for (const titles of videosByCategory.values()) {
    titles.sort((a, b) => a.localeCompare(b));
  }

  // 4. Get all unique categories and sort them according to rules
  const allCategories = [...videosByCategory.keys()];

  const sortedCategories = allCategories.sort((catA, catB) => {
    const relA = relevanceMap.get(catA);
    const relB = relevanceMap.get(catB);

    // Both watched → higher relevance first
    if (relA !== undefined && relB !== undefined) {
      return relB - relA; // descending relevance
    }

    // One watched, one not → watched comes first
    if (relA !== undefined) return -1;
    if (relB !== undefined) return 1;

    // Neither watched → alphabetical order
    return catA.localeCompare(catB);
  });

  // 5. Build final recommendation list
  const result = [];

  for (const category of sortedCategories) {
    const titles = videosByCategory.get(category);
    result.push(...titles);
  }

  return result;
}


// Example usage:
const watchedCategories = ["comedy", "drama"];
const watchedCategoryRelevance = [0.9, 0.8];
const availableVideoTitles = [
  "Funny Movie",
  "Sad Movie",
  "Action Movie",
  "Another Comedy",
];
const availableVideoCategories = [
  "comedy",
  "drama",
  "action",
  "comedy",
];

console.log(
  getRecommendedVideos(
    watchedCategories,
    watchedCategoryRelevance,
    availableVideoTitles,
    availableVideoCategories
  )
);

// Problem Explanation:
// The function `getRecommendedVideos` takes in four parameters: a list of categories the user has watched, their relevance scores, 
// a list of available video titles, and their corresponding categories. It generates a list of recommended videos based on the 
// relevance of the watched categories and the alphabetical order of the video titles within those categories. 
// The output is a sorted list of video titles that are recommended to the user based on their viewing history and preferences.

// Example Input:
// watchedCategories = ["comedy", "drama"]
// watchedCategoryRelevance = [0.9, 0.8]
// availableVideoTitles = ["Funny Movie", "Sad Movie", "Action Movie", "Another Comedy"]
// availableVideoCategories = ["comedy", "drama", "action", "comedy"]

// Example Output: 


// Output: ["Another Comedy", "Funny Movie", "Sad Movie", "Action Movie"]

// Output explanation:
// The function first creates a relevance map for the watched categories, then groups the available videos by their categories. 
// It sorts the video titles alphabetically within each category. Next, it sorts the categories based on relevance and whether they were watched. 
// Finally, it builds the recommendation list by concatenating the sorted video titles from each category in the determined order. 
// In this example, "comedy" is more relevant than "drama", so its videos are listed first, followed by "drama" and then "action".
// What techniques are used in this code?


// The code uses several techniques:
// 1. **Mapping and Grouping**: It creates a relevance map for the watched categories and groups available videos by their categories using a Map.
// 2. **Sorting**: It sorts video titles alphabetically within each category and sorts categories based on relevance and whether they were watched.
// 3. **Array Manipulation**: It uses array methods like `forEach`, `sort`, and `push` to manipulate arrays and build the final recommendation list.
// 4. **Conditional Logic**: It implements conditional logic to determine the sorting order of categories based on relevance and whether they were watched.

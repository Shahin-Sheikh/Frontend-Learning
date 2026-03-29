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
// Output: ["Another Comedy", "Funny Movie", "Sad Movie", "Action Movie"]

// Explanation:
// The function `getRecommendedVideos` generates a list of video recommendations based on the user's watched categories and their relevance. It first creates a relevance map for the watched categories, then groups the available videos by their categories. It sorts the videos alphabetically within each category and sorts the categories based on relevance and whether they were watched or not. Finally, it builds the recommendation list by concatenating the sorted video titles from each category in the determined order.

// What techniques are used in this code?
The code uses several techniques:

1. **Mapping and Grouping**: It uses a `Map` to group video titles by their categories, allowing for efficient lookups and organization.

2. **Sorting**: The code sorts the video titles alphabetically within each category and sorts the categories based on relevance and whether they were watched or not.

3. **Array Manipulation**: It utilizes array methods like `forEach`, `push`, and the spread operator (`...`) to build the final recommendation list.

4. **Conditional Logic**: The sorting of categories involves conditional logic to determine the order based on relevance and whether the category was watched.
5. **Data Structures**: The use of `Map` and arrays helps in organizing and managing the data effectively throughout the function.

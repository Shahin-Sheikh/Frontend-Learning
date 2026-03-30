function memoize(fn) {
  const cache = new Map();

  return function memoized(id) {
   
    const key = String(id);
   
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(id);
    cache.set(key, result);
    return result;
  };
}

// Example usage:
function slowFunction(id) {
  // Simulate a slow computation
  for (let i = 0; i < 1e9; i++);
  return `Result for ${id}`;
}

const memoizedSlowFunction = memoize(slowFunction);
console.time("First call");
console.log(memoizedSlowFunction(123));


// explain this for interview 
// The `memoize` function is a higher-order function that takes another function `fn` as an argument and returns a 
// new function that adds memoization capabilities to `fn`.

// Here's how it works:

// 1. **Cache Initialization**: A `Map` is created to serve as a cache for storing previously computed results. 
// The `Map` is chosen because it can handle both string and number keys without any issues.

// 2. **Memoized Function**: The returned function, `memoized`, takes an `id` as an argument. 
// This function will check if the result for the given `id` is already stored in the cache.

//  3. **Cache Check**: If the cache contains a result for the given `id`, 
// it returns that result immediately, avoiding the need to recompute it.

// 4. **Compute and Store**: If the result is not in the cache, 
// it calls the original function `fn` with the provided `id`, stores the result in the cache using the string representation of `id` as the key, and then returns the computed result.

// 5. **Example Usage**: The example demonstrates how to use `memoize` with a slow function. 
// The first call to `memoizedSlowFunction(123)` will take time to compute, but subsequent calls with the same argument will return the cached result instantly, improving performance.

// This technique is particularly useful for functions that are computationally expensive or have side effects, 
// as it allows you to avoid redundant calculations and improve efficiency.


// What techniques are used in this code?
// The code uses several techniques:

// 1. **Higher-Order Functions**: The `memoize` function is a higher-order function because it takes another function as an argument and returns a new function.

// 2. **Closure**: The returned `memoized` function forms a closure over the `cache` variable, allowing it to access and modify the 
// cache even after the `memoize` function has finished executing.

// 3. **Memoization**: This is the primary technique used in the code. Memoization is an optimization technique that stores the results 
// of expensive function calls and returns the cached result when the same inputs occur again.

// 4. **Map Data Structure**: The code uses a `Map` to store cached results, which provides efficient key-value storage and retrieval.

// 5. **String Conversion for Keys**: To handle both string and number inputs consistently, the code converts the `id` to a string before using it 
// as a key in the cache.This ensures that different types of inputs are treated uniformly in the cache.

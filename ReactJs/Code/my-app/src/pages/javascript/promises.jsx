import ConceptPage from "../../components/concept-page.component";

export default function PromisesPage() {
  const sections = [
    {
      title: "What are Promises?",
      content:
        "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's a cleaner alternative to callbacks, helping avoid 'callback hell' and making asynchronous code more readable and maintainable.",
    },
    {
      title: "Promise States",
      points: [
        "Pending: Initial state, neither fulfilled nor rejected",
        "Fulfilled: Operation completed successfully (resolved)",
        "Rejected: Operation failed",
        "Note: Once settled (fulfilled or rejected), a promise cannot change state",
      ],
    },
    {
      title: "Creating Promises",
      code: `// Basic Promise creation
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

// Using the promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Promise settled"));`,
    },
    {
      title: "Chaining Promises",
      content:
        "Promises can be chained to perform sequential async operations:",
      code: `function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "John" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
  });
}

fetchUser(1)
  .then(user => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
  })
  .catch(error => {
    console.error("Error:", error);
  });`,
    },
    {
      title: "Promise Methods",
      content:
        "JavaScript provides several utility methods for working with multiple promises:",
      points: [
        "Promise.all([p1, p2]): Waits for all promises, fails if any fails",
        "Promise.allSettled([p1, p2]): Waits for all, returns all results",
        "Promise.race([p1, p2]): Returns first settled promise",
        "Promise.any([p1, p2]): Returns first fulfilled promise",
      ],
      code: `const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject("Error");

// Promise.all - all must succeed
Promise.all([p1, p2])
  .then(results => console.log(results)); // [1, 2]

// Promise.allSettled - waits for all
Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
  // [{status: "fulfilled", value: 1}, ...]

// Promise.race - first to finish
Promise.race([p1, p2])
  .then(result => console.log(result)); // 1`,
    },
    {
      title: "Error Handling",
      content: "Proper error handling is crucial in promise chains:",
      code: `fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    // Catches any error in the chain
    console.error('Error:', error);
  })
  .finally(() => {
    // Always executes
    console.log('Cleanup');
  });`,
    },
  ];

  const defaultCode = `// Try Promise examples
const delay = (ms, value) => 
  new Promise(resolve => setTimeout(() => resolve(value), ms));

console.log("Starting...");

// Simple promise
delay(1000, "First")
  .then(result => {
    console.log(result);
    return delay(1000, "Second");
  })
  .then(result => {
    console.log(result);
  });

// Promise.all example
Promise.all([
  delay(1000, "A"),
  delay(2000, "B"),
  delay(1500, "C")
]).then(results => {
  console.log("All done:", results);
});

// Promise.race example
Promise.race([
  delay(1000, "Fast"),
  delay(2000, "Slow")
]).then(result => {
  console.log("Winner:", result);
});`;

  return (
    <ConceptPage
      title="Promises"
      description="Learn how Promises revolutionize asynchronous JavaScript programming."
      sections={sections}
      defaultCode={defaultCode}
    />
  );
}

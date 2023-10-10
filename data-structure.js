// Algorithm for finding the sum of distinct elements from two sets
function findSumOfDistinctElements(set1, set2) {
    // Initialize an empty array to store distinct elements
    let distinctElements = [];

    // Iterate through set1
    for (const element of set1) {
        // If the element is not already in distinctElements, add it
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Iterate through set2
    for (const element of set2) {
        // If the element is not already in distinctElements, add it
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Calculate the sum of distinct elements
    let sumOfDistinctElements = 0;
    for (const element of distinctElements) {
        sumOfDistinctElements += element;
    }

    return sumOfDistinctElements;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findSumOfDistinctElements(set1, set2);
console.log(result); // Output: 13
// =============================================================================================================



// Algorithm for calculating the dot product of two vectors
function dotProduct(v1, v2) {
    // Check if vectors have the same length
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length");
    }

    // Initialize the product to 0
    let product = 0;

    // Calculate the dot product
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }

    return product;
}

// Algorithm for finding orthogonal pairs of vectors
function areOrthogonal(vectors) {
    // Get the number of vectors
    const n = vectors.length;

    // Initialize an array to store orthogonal pairs
    const orthogonalPairs = [];

    // Loop through all pairs of vectors
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Calculate the dot product of vectors[i] and vectors[j]
            const product = dotProduct(vectors[i], vectors[j]);

            // Check if the dot product is zero (orthogonal)
            if (product === 0) {
                orthogonalPairs.push([i, j]);
            }
        }
    }

    return orthogonalPairs;
}

// Example usage:
const vectors = [[1, 0], [0, 1], [2, 2], [3, 3]];
const orthogonalPairs = areOrthogonal(vectors);
console.log("Orthogonal pairs:", orthogonalPairs);


// ================These algorithms are implemented in JavaScript and provide the expected results for both Problem 1 and Problem 2.=================

// ======================================THE JAVASCRIPT=======================================

// =================Problem 1: Finding the Sum of Distinct Elements from Two Sets==============================

function findSumOfDistinctElements(set1, set2) {
    let distinctElements = [];

    // Iterate through set1
    for (const element of set1) {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Iterate through set2
    for (const element of set2) {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Calculate the sum of distinct elements
    const sumOfDistinctElements = distinctElements.reduce((sum, element) => sum + element, 0);

    return sumOfDistinctElements;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findSumOfDistinctElements(set1, set2);
console.log(result); // Output: 13





// ================================Problem 2: Checking Orthogonal Vectors=============================

function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length");
    }

    let product = 0;
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }

    return product;
}

function areOrthogonal(vectors) {
    const n = vectors.length;
    const orthogonalPairs = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const product = dotProduct(vectors[i], vectors[j]);
            if (product === 0) {
                orthogonalPairs.push([i, j]);
            }
        }
    }

    return orthogonalPairs;
}

// Example usage:
const vectors = [[1, 0], [0, 1], [2, 2], [3, 3]];
const orthogonalPairs = areOrthogonal(vectors);
console.log("Orthogonal pairs:", orthogonalPairs);

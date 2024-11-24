function isEnoughCapacity(products, containerSize) {
    // Calculate the total quantity of products
    const totalQuantity = Object.values(products).reduce((sum, quantity) => sum + quantity, 0);
  
    // Check if total quantity fits into the container size
    return totalQuantity <= containerSize;
  }
  
  

//  task-1-results in HTML
document.getElementById("task-1-results").innerHTML = `
    <p>${isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)}</p>
    <p>${isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)}</p>
    <p>${isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)}</p>
    <p>${isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)}</p>
    
`;




// task-1-results
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

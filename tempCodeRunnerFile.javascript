function throttling(func, delay) {
    let lastCall = 0; // Store the last time the function was called

    const now = Date.now(); // Get the current time

    // Return a throttled version of the original function
    return function(...args) {
        
        // Check if enough time has passed since the last call
        if (now - lastCall >= delay) {
            lastCall = now; // Update the last call time
            func.apply(this, args); // Call the original function with the correct context and arguments
        }
    };
}

function printMessage() {
    console.log('Throttled function executed!');
}

// Create a throttled version of the function
const throttledPrint = throttling(printMessage, 2000);

// Call the throttled function multiple times
throttledPrint(); // Executes immediately
setTimeout(throttledPrint(), 2000);
setTimeout(throttledPrint(), 2000);

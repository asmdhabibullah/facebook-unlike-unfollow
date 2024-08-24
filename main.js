// Function to scroll down the page
function autoScroll() {
    window.scrollTo(0, document.body.scrollHeight);
}

// Function to open the manage menu and unfollow/unlike
function processItems() {
    let manageButtons = document.querySelectorAll('div[aria-label="Manage"]');

    if (manageButtons.length > 0) {
        manageButtons.forEach((button, index) => {
            setTimeout(() => {
                button.click();  // Click the "Manage" button to open the menu
                
                setTimeout(() => {
                    // Check if the Unfollow button exists
                    let unfollowButton = document.evaluate("//span[text()='Unfollow']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    let unlikeButton = document.evaluate("//span[text()='Unlike']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    
                    if (unfollowButton) {
                        unfollowButton.click();
                        console.log(`Unfollowed item ${index + 1}`);
                    } else if (unlikeButton) {
                        unlikeButton.click();
                        console.log(`Unliked item ${index + 1}`);
                    } else {
                        console.log(`No Unfollow or Unlike option found for item ${index + 1}. Skipping...`);
                    }
                }, 1000);  // Wait for the menu to fully open before clicking
            }, index * 2000);  // Delay between each action to avoid quick actions that may be flagged by Facebook
        });

        // Scroll down after processing the current batch
        setTimeout(() => {
            autoScroll();
            setTimeout(processItems, 3000); // Wait for scroll and load before continuing
        }, manageButtons.length * 2000 + 3000);
    } else {
        console.log("No more items to process.");
        // Scroll one last time in case more items load after processing
        autoScroll();
        setTimeout(processItems, 3000);
    }
}

processItems();




// // Function to scroll down the page
// function autoScroll() {
//     window.scrollTo(0, document.body.scrollHeight);
// }

// // Function to open the manage menu and unfollow/unlike
// function processItems() {
//     let manageButtons = document.querySelectorAll('div[aria-label="Manage"]');

//     if (manageButtons.length > 0) {
//         manageButtons.forEach((button, index) => {
//             setTimeout(() => {
//                 button.click();  // Click the "Manage" button to open the menu
                
//                 setTimeout(() => {
//                     // Find the Unfollow or Unlike button within the opened menu
//                     let unfollowButton = document.evaluate("//span[text()='Unfollow']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//                     let unlikeButton = document.evaluate("//span[text()='Unlike']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    
//                     // Click the appropriate button
//                     if (unfollowButton) {
//                         unfollowButton.click();
//                         console.log(`Unfollowed item ${index + 1}`);
//                     } else if (unlikeButton) {
//                         unlikeButton.click();
//                         console.log(`Unliked item ${index + 1}`);
//                     } else {
//                         console.log(`No Unfollow or Unlike option found for item ${index + 1}`);
//                     }
//                 }, 1000);  // Wait for the menu to fully open before clicking
//             }, index * 2000);  // Delay between each action to avoid quick actions that may be flagged by Facebook
//         });

//         // Scroll down after processing the current batch
//         setTimeout(() => {
//             autoScroll();
//             setTimeout(processItems, 3000); // Wait for scroll and load before continuing
//         }, manageButtons.length * 2000 + 3000);
//     } else {
//         console.log("No more items to process.");
//         // Scroll one last time in case more items load after processing
//         autoScroll();
//         setTimeout(processItems, 3000);
//     }
// }

// processItems();

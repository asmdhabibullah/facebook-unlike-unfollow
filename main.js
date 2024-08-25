
// Function to scroll down the page
function autoScroll() {
    window.scrollTo(0, document.body.scrollHeight);
}

// Function to open all manage menus, unfollow/unlike, close the window, and then scroll
function unfollowUnlike() {
    let manageButtons = document.querySelectorAll('div[aria-label="Manage"]');

    if (manageButtons.length > 0) {
        manageButtons.forEach((button, index) => {
            setTimeout(() => {
                button.click();  // Click the "Manage" button to open the menu
                
                setTimeout(() => {
                    // Check for the existence of Unfollow or Unlike button
                    let unfollowButton = document.evaluate("//span[text()='Unfollow']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    let unlikeButton = document.evaluate("//span[text()='Unlike']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    
                    if (unfollowButton) {
                        unfollowButton.click();
                        setTimeout(() => {
                            button.click(); // Close the menu after unfollow
                        }, 500);
                    } else if (unlikeButton) {
                        unlikeButton.click();
                        setTimeout(() => {
                            button.click(); // Close the menu after unlike
                        }, 500);
                    }
                }, 1000);  // Wait for the menu to fully open before clicking
            }, index * 500);  // Small delay between each action to ensure proper menu opening
        });

        // Scroll down after all buttons have been processed and closed
        setTimeout(() => {
            autoScroll();
            setTimeout(processItems, 3000); // Wait for scroll and load before continuing
        }, manageButtons.length * 1000 + 2000);  // Adjust delay based on the number of buttons processed
    } else {
        console.log("No more items to process.");
    }
}

unfollowUnlike();

// Function to open the "Friends" menu, unfollow if available, otherwise close the menu, and then scroll
function unfollowFriends() {
    let friendsButtons = document.querySelectorAll('div[aria-label="Friends"]');

    if (friendsButtons.length > 0) {
        friendsButtons.forEach((button, index) => {
            setTimeout(() => {
                button.click();  // Click the "Friends" button to open the menu
                
                setTimeout(() => {
                    // Check for the existence of the "Unfollow" button
                    let unfollowButton = document.evaluate("//span[text()='Unfollow']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    
                    if (unfollowButton) {
                        unfollowButton.click();
                        actionCount++;  // Increment the count for each unfollow action
                        console.log(`Unfollowed friend: ${actionCount}`);  // Log the current count
                    } else {
                        // Close the "Friends" menu if "Unfollow" doesn't exist
                        button.click();  // Re-click to close the menu
                    }
                }, 1000);  // Wait for the menu to fully open before checking
            }, index * 1000);  // Small delay between each action to ensure proper menu opening
        });

        // Scroll down after all buttons have been processed
        setTimeout(() => {
            autoScroll();
            setTimeout(processItems, 3000); // Wait for scroll and load before continuing
        }, friendsButtons.length * 1000 + 2000);  // Adjust delay based on the number of buttons processed
    } else {
        console.log("No more friends to process.");
        console.log(`Total friends unfollowed: ${actionCount}`);  // Display the total count of actions
    }
}

unfollowFriends();

// Function to open all "More" menus, leave groups, confirm, close the window, and then scroll
function leaveGroup() {
    let moreButtons = document.querySelectorAll('div[aria-label="More"]');

    if (moreButtons.length > 0) {
        moreButtons.forEach((button, index) => {
            setTimeout(() => {
                button.click();  // Click the "More" button to open the menu
                
                setTimeout(() => {
                    // Check for the existence of the "Leave group" button
                    let leaveButton = document.evaluate("//span[text()='Leave group']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    
                    if (leaveButton) {
                        leaveButton.click();
                        actionCount++;  // Increment the count for each leave action
                        console.log(`Left group: ${actionCount}`);  // Log the current count
                        
                        setTimeout(() => {
                            // Click the final "Leave Group" confirmation button
                            let confirmLeaveButton = document.evaluate("//span[text()='Leave Group']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                            if (confirmLeaveButton) {
                                confirmLeaveButton.click();
                            }
                            setTimeout(() => {
                                button.click(); // Close the menu after confirming the leave action
                            }, 500);
                        }, 500);
                    }
                }, 1000);  // Wait for the menu to fully open before clicking
            }, index * 500);  // Small delay between each action to ensure proper menu opening
        });

        // Scroll down after all buttons have been processed and closed
        setTimeout(() => {
            autoScroll();
            setTimeout(processItems, 3000); // Wait for scroll and load before continuing
        }, moreButtons.length * 1000 + 2000);  // Adjust delay based on the number of buttons processed
    } else {
        console.log("No more items to process.");
        console.log(`Total groups left: ${actionCount}`);  // Display the total count of actions
    }
}

leaveGroup();


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
//                     // Check if the Unfollow button exists
//                     let unfollowButton = document.evaluate("//span[text()='Unfollow']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//                     let unlikeButton = document.evaluate("//span[text()='Unlike']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    
//                     if (unfollowButton) {
//                         unfollowButton.click();
//                         console.log(`Unfollowed item ${index + 1}`);
//                     } else if (unlikeButton) {
//                         unlikeButton.click();
//                         console.log(`Unliked item ${index + 1}`);
//                     } else {
//                         console.log(`No Unfollow or Unlike option found for item ${index + 1}. Skipping...`);
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

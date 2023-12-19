
async function friendButtonClicking(friendsButton = '', clicked=0) {

    try {
        let totalClicked = 0;
    
        const friends = document.querySelectorAll(friendsButton); // Might be replaceable
        
        console.log("I'm calling now to click the ... button for the dropdown menu!");
    
        for (let fnd = clicked; fnd < friends.length; fnd++) {
    
            friends[fnd].click();
            
            totalClicked = totalClicked + 1;
        };
        
        // console.log("Func totalClicked: ", totalClicked);
        
        return totalClicked;
        
    } catch (error) {
        return clicked;
    }
    
};

async function friendButtonClickForUnfriendOrUnfollow(unfriendOrUnfollowButtons = '', friendsButton = '', clicked=0) {

    try {

        const friends = document.querySelectorAll(friendsButton); // Might be replaceable

        console.log("I'm calling now to click the ... button for the dropdown menu!");

        for (let fnd = clicked; fnd < friends.length; fnd++) {

            friends[fnd].click();

            const unfollowBtns = document.querySelectorAll(unfriendOrUnfollowButtons);

            for (let unFndOrUnFlw = 0; unFndOrUnFlw <= unfollowBtns.length; unFndOrUnFlw++) {

                let text = unfollowBtns[unFndOrUnFlw].textContent;

                if (unfollowBtns && text === 'Unfollow') {
                    unfollowBtns[unFndOrUnFlw].click();
                    
                    friends[fnd].click();

                    console.log("Unfollowed done!");

                } else {
                    friends[fnd].click();
                    console.log("Follow button not found!");
                }
            }

        };

    } catch (error) {
        return "Can't unfollow :("
    }

}

function startIntervalToFindFriends() {

    let clicked = 0;

    setInterval(async function () {

        window.scrollTo(0, 100000);

        const totalClicked = await friendButtonClicking('div[aria-label="Friends"]', clicked);

        
        await friendButtonClickForUnfriendOrUnfollow('div[role="menuitem"] span[dir="auto"]', 'div[aria-label="Friends"]', clicked);
        
        clicked = clicked + totalClicked;

        console.log("Intercal Func Total friends clicked: ", clicked);

    }, 30000);

};

startIntervalToFindFriends();


// New Implementation


// async function friendButtonClick(friendsButton = '') {

//     return new Promise((res, rej) => {
        
//         let clicked = false;

//         const friends = document.querySelectorAll(friendsButton); // Might be replaceable
        
//         console.log("I'm calling now to click the ... button for the dropdown menu!");
    
//         for (let fnd = 0; fnd < friends.length; fnd++) {

//             friends[fnd].click();
    
//             clicked = true;
//         };

//         return res(clicked)

//     });

// };

// async function unfriendOrUnfollowButtonsClick(unfriendOrUnfollowButtons='') {

//     return new Promise((res, rej) => {

//         console.log("Clicking for unfollow button show");

//         const unfollowBtns = document.querySelectorAll(unfriendOrUnfollowButtons);

//         console.log("Unfrien or unfollow button clicking soon!");

//         for (let btn = 0; btn <= unfollowBtns.length; btn++) {

//             let text = unfollowBtns[btn].textContent

//             if (unfollowBtns && text === "Unfollow") {
//                 unfollowBtns[btn].click();
//                 console.log("Unfrien or unfollow button found and clicked!");
//             } else {
//                 console.log("Unfrien or unfollow button not found!");
//             };

//         };

//         return res('Unfollowed!');
//     });

// }

// async function windowScrollDown() { 
//     return new Promise((res, rej) => {
//         // Scroll to down
//         window.scrollTo(0, 100000);
//         res('Scrolled!')
//    })
// }

// function startIntervalToFindFriends() {

//     setInterval(async function () {
        
//         await windowScrollDown();

//         await friendButtonClick('div[aria-label="Friends"]');

//         await unfriendOrUnfollowButtonsClick('div[role="menuitem"] span[dir="auto"]');
        
//     }, 24000);

// };

// startIntervalToFindFriends();


// function friendButtonClick(unfriendOrUnfollow ='', friendsButton = '', unfriendOrUnfollowButtons = '' ) {

//     console.log("I'm calling now...");

//     const friends = document.querySelectorAll(unfriendOrUnfollow, friendsButton, unfriendOrUnfollowButtons); // Might be replaceable

    
//     for (let fnd = 0; fnd < friends.length; fnd++) {
        
//         friends[fnd].click();
        
//         console.log("Clicking for unfollow button show");

//         setTimeout(() => {
            
//             const unfollowBtns = document.querySelectorAll(unfriendOrUnfollowButtons);
            
//             console.log("Unfrien or unfollow button clicking soon!");
            
//             for (let btn = 0; btn <= unfollowBtns.length; btn++) {

//                 let text = unfollowBtns[btn].textContent

//                 if (text === "Unfollow") {
//                     unfollowBtns[btn].click();
//                     friends[fnd].click();
//                 };

//             };
//       }, 1000)

//     }

// };


// function startIntervalToFindFriends() {

//     setInterval(function () {
        
//         window.scrollTo(0, 100000);
        
//         friendButtonClick("unfollow", 'div[aria-label="Friends"]', 'div[role="menuitem"] span[dir="auto"]');
        
//     }, 24000);

// };

// startIntervalToFindFriends();


// function timeToUnfriendOrUnfollowFbFriends(unfriendOrUnfollow, friendsButton, unfriendOrUnfollowButtons) {

//     const unfollowBtns = document.querySelectorAll(unfriendOrUnfollowButtons);

//     if (unfriendOrUnfollow ==='unfollow') {
        
//             for (let btn = 0; btn <= unfollowBtns.length; btn++) {
        
//                 let text = unfollowBtns[btn].textContent
        
//                 if (text === "Unfollow") {
//                     unfollowBtns[btn].click();
//                 };
        
//             };
        
//     }

//     if (unfriendOrUnfollow === 'unfriend') {
//         // for (let btn = 0; btn <= unfollowBtns.length; btn++) {

//         //     let text = unfollowBtns[btn].textContent

//         //     if (text === "Unfollow") {
//         //         unfollowBtns[btn].click();
//         //     };

//         // };

//         console.log("Unfriended :(");
//     }

//     const friends = document.querySelectorAll(unfriendOrUnfollow, friendsButton, unfriendOrUnfollowButtons); // Might be replaceable

//     for (let fnd = 0; fnd < friends.length; fnd++) {

//         friends[fnd].click();

//     }

// };



// function timeToUnfriendOrUnfollowFbFriends(unfollowButtons = 'div[role="menuitem"] span[dir="auto"]') {

//     const unfollowBtns = document.querySelectorAll(unfollowButtons);

//     for (let btn = 0; btn <= unfollowBtns.length; btn++) {

//         let text = unfollowBtns[btn].textContent

//         if (text === "Unfollow") {
//             unfollowBtns[btn].click();
//         };

//     };

// };

// function friendButtonClick(unfriendOrUnfollowInervals) {

//     console.log("I'm calling now...");

//     const friends = document.querySelectorAll('div[aria-label="Friends"]'); // Might be replaceable

//     for (let fnd = 0; fnd < friends.length; fnd++) {

//         friends[fnd].click();

//     }

//     if (unfriendOrUnfollowInervals === 10) {

//         unfriendOrUnfollowInervals = 0;

//         timeToUnfriendOrUnfollowFbFriends();

//         console.log("Unfrien or unfollow button clicking soon!");

//     }


// };


// function startIntervalToFindFriends() {

//     let totalInterval = 0;
//     let unfriendOrUnfollowInervals = 0;

//     setInterval(function () {

//         window.scrollTo(0, 100000);

//         totalInterval = totalInterval + 1
//         unfriendOrUnfollowInervals = unfriendOrUnfollowInervals + 1;

//         if (totalInterval === 5) {

//             totalInterval = 0;

//             friendButtonClick(unfriendOrUnfollowInervals);

//             if (unfriendOrUnfollowInervals === 10) {
//                 unfriendOrUnfollowInervals = 0;
//             }
//         };

//     }, 1000 * 2);

// };

// startIntervalToFindFriends();

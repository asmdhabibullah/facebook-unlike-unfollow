// New Implementation

function friendButtonClick(unfriendOrUnfollow ='', friendsButton = '', unfriendOrUnfollowButtons = '' ) {

    console.log("I'm calling now...");

    const friends = document.querySelectorAll(unfriendOrUnfollow, friendsButton, unfriendOrUnfollowButtons); // Might be replaceable

    
    for (let fnd = 0; fnd < friends.length; fnd++) {
        
        friends[fnd].click();
        
        console.log("Clicking for unfollow button show");

        setTimeout(() => {
            
            const unfollowBtns = document.querySelectorAll(unfriendOrUnfollowButtons);
            
            console.log("Unfrien or unfollow button clicking soon!");
            
            for (let btn = 0; btn <= unfollowBtns.length; btn++) {

                let text = unfollowBtns[btn].textContent

                if (text === "Unfollow") {
                    unfollowBtns[btn].click();
                    friends[fnd].click();
                };

            };
      }, 1000)

    }

};


function startIntervalToFindFriends() {

    setInterval(function () {
        
        window.scrollTo(0, 100000);
        
        friendButtonClick("unfollow", 'div[aria-label="Friends"]', 'div[role="menuitem"] span[dir="auto"]');
        
    }, 24000);

};

startIntervalToFindFriends();


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

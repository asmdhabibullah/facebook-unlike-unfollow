// New Implimemntation

function timeToUnfriendOrUnfollowFbFriends(unfollowButtons = 'div[role="menuitem"] span[dir="auto"]') {

    const unfollowBtns = document.querySelectorAll(unfollowButtons);

    for (let btn = 0; btn <= unfollowBtns.length; btn++) {

        let text = unfollowBtns[btn].textContent

        if (text === "Unfollow") {
            unfollowBtns[btn].click();
        };

    };

};

function friendButtonClick(unfriendOrUnfollowInervals) {

    console.log("I'm calling now...");

    const friends = document.querySelectorAll('div[aria-label="Friends"]'); // Might be replaceable

    for (let fnd = 0; fnd < friends.length; fnd++) {

        friends[fnd].click();

    }

    if (unfriendOrUnfollowInervals === 10) {

        unfriendOrUnfollowInervals = 0;

        timeToUnfriendOrUnfollowFbFriends();

        console.log("Unfrien or unfollow button clicking soon!");

    }


};


function startIntervalToFindFriends() {

    let totalInterval = 0;
    let unfriendOrUnfollowInervals = 0;

    setInterval(function () {

        window.scrollTo(0, 100000);

        totalInterval = totalInterval + 1
        unfriendOrUnfollowInervals = unfriendOrUnfollowInervals + 1;

        if (totalInterval === 5) {

            totalInterval = 0;

            friendButtonClick(unfriendOrUnfollowInervals);

            if (unfriendOrUnfollowInervals === 10) {
                unfriendOrUnfollowInervals = 0;
            }
        };

    }, 1000 * 2);

};

startIntervalToFindFriends();

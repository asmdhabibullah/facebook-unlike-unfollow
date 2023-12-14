function friendUnfriendOrUnfollow(friendsDiv = '"]', callback = function (unfollowButtons = '') { }) {

    const start = new Date().getTime();

    const friends = document.querySelectorAll(friendsDiv);

    console.log("For loop is calling");
    for (let fnd = 0; fnd < friends.length; fnd++) {

        friends[fnd].click();

    };

    console.log("For loop finish exicution!");

    const end = new Date().getTime();

    const times = end - start;

    setTimeout(function () {
        console.log(`Callback func will call after the second of: ${times}`);
        callback(unfollowButtons)
    }, times)

};

function unfollowButtonClick(unfollowButtons) {

    const unfollowBtns = document.querySelectorAll(unfollowButtons);

    for (let btn = 0; btn <= unfollowBtns.length; btn++) {

        let text = unfollowBtns[btn].textContent

        if (text === "Unfollow") {
            unfollowBtns[btn].click();
        };
    };
}

friendUnfriendOrUnfollow('div[aria-label="Friends"]', unfollowButtonClick('div[role="menuitem"] span[dir="auto"]'));

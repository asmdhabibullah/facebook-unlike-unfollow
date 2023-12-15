// New Implementation

async function friendUnfriendOrUnfollow(friendsDiv = '', callback = function (unfollowButtons = '') { }) {

    let totalScroll = 0;
    let totalScrollTime = 0;

    const scroll = setInterval(() => {

        const startScroll = new Date().getTime();
        window.scrollTo(0, 100000);
        totalScroll = totalScroll + 1;
        const endScroll = new Date().getTime();

        totalScrollTime = totalScrollTime + (endScroll - startScroll)

    }, 1000 * 3);

    clearInterval(scroll);

    const friendsClickIntervals = setInterval(() => {
        if (totalScroll === 10) {

            const friends = document.querySelectorAll(friendsDiv);

            console.log("For loop is calling");

            for (let fnd = 0; fnd < friends.length; fnd++) {

                friends[fnd].click();

            };

            console.log("For loop finish exicution!");

            totalScroll = 0;
        }

    }, 1000)


    clearInterval(friendsClickIntervals);

    await new Promise(resolve => setTimeout(() => {
        console.log(`Callback func will call after the second of: ${13000}`);

        callback(unfollowButtons);

        resolve("OK")

    }, 1000 * 14));

};



friendUnfriendOrUnfollow('div[aria-label="Friends"]', function (unfollowButtons = 'div[role="menuitem"] span[dir="auto"]') {

    const unfollowBtns = document.querySelectorAll(unfollowButtons);

    for (let btn = 0; btn <= unfollowBtns.length; btn++) {

        let text = unfollowBtns[btn].textContent

        if (text === "Unfollow") {
            unfollowBtns[btn].click();
        };
    };
});


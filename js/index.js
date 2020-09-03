/*
 * This is the mechanisism of the sign in button
 * In right header
 */
signin = document.querySelector('#signin');
signin.onmouseover = function () {
    signin.classList.add('shadow-sm');
}
signin.onfocus = function () {
    signin.classList.add('shadow-sm');
}
signin.onmouseleave = function () {
    signin.classList.remove('shadow-sm');
};



/*
 *  This for the machanisim of search box
 */

// sq = search query object
// sb = search box object
// ct = clear text object
// sp = sperator object, between voice type and clear text object

sq = document.querySelector('#searchQuery');
sb = document.querySelector('#search-box');

ct = document.querySelector('#clear-text');
ct.style.display = 'none';

sp = document.querySelector('#seperator');
sp.style.display = 'none';

// This adds the shadow if the focus is on search box
sq.onfocus = function () {
    sb.classList.add('my-shadow');
};

// This also adds the shadow if query is typed
sq.onkeyup = function () {
    if (sq.value != '') {
        sb.classList.add('my-shadow');
        ct.style.display = 'flex';
        sp.style.display = 'flex';
    }
    else {
        ct.style.display = 'none';
        sp.style.display = 'none';
    }
}

// This removes shadow if the focus is not on search box
sq.onblur = function () {
    sb.classList.remove('my-shadow');
};

// This clears search text
ct.onclick = function () {
    sq.value = '';
    ct.style.display = 'none';
    sp.style.display = 'none';
};



/*
 *  This is for the machnism of button below search box
 */

// sbtn for searchbtn  or search button
// dbtn for doodlesbtn or doodle button
sbtn = document.querySelector("#searchbtn");
dbtn = document.querySelector("#doodlesbtn");

// Functionality of submit button
sbtn.onmouseover = function () {
    sbtn.classList.add('shadow-sm');
};

sbtn.onmouseleave = function () {
    sbtn.classList.remove('shadow-sm');
};

// Functionality of doodle button
dbtn.onmouseover = function () {
    dbtn.classList.add('shadow-sm');
};

dbtn.onmouseleave = function () {
    dbtn.classList.remove('shadow-sm');
};

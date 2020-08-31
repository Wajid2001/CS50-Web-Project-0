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
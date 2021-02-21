
var mockDatabase = [
    { _id: '123', title: 'Persona 5 Royal', price: 59.99, img: 'assets/p5r.jpg'},
    { _id: '583', title: 'Valheim', price: 19.99, img: 'assets/valheim.jpg' },
    { _id: '954', title: 'Halo 3', price: 29.99, img: 'assets/1200px-Halo3coverart.JPG'},
    { _id: '384', title: 'Halo 2', price: 19.99, img: 'assets/halo2cover.jpg'},
    { _id: '183', title: 'Halo 3: ODST', price: 14.99, img: 'assets/Halo_3_ODST_Box_Art.png'},
    { _id: '007', title: "Demon's Souls", price: 59.99, img: 'assets/220px-Demons_Souls_remake_cover_art.jpg' },
    { _id: '304', title: 'Bloodborne', price: 39.99, img: 'assets/bloodborne-cover-art.jpg' },
    { _id: '729', title: 'Titanfall 2', price: 19.99, img: 'assets/220px-Titanfall_2.jpg'},
];

function renderCards (results){
    var listBody = document.querySelector('#card-container');
    var img = document.getElementsByTagName("img");


    listBody.innerHTML = '';

    var cardRows = results.map(function (result) {


        return '<div class="card">' + '<img id="productImg" src="" class="card-img-top" alt="">' +'<div class="card-body"><h5 class="card-title">' + result.title + '</h5><p class="card-text">'
            + result.price + '</p></div></div>';
    });

    //document.getElementById("#productImg").setAttribute('alt', results._id);

    cardRows.forEach(function (card, index) {

        listBody.innerHTML += card;
        img[index].alt = results[index]._id;
        img[index].src = results[index].img;
    });
}

renderCards(mockDatabase);

function orderBy(sortValue) {
    var sortedResults = (sortValue === 'title') ?
        mockDatabase.sort(function (a, b) {
            var titleA = a.title.toUpperCase();
            var titleB = b.title.toUpperCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
        }) :
        mockDatabase.sort(function (a, b) {

            return a[sortValue] - b[sortValue];
        });
    renderCards(sortedResults);
}
// Change events trigger after the value of a form input changes
document.querySelector('#orderBy').addEventListener('change', function(event){
    // Event is the JavaScript event that transpired, in our change a CHANGE event.
    // Target is the element it was performed on, useful for when the event targets
    // multiple elements.
    // Value has the name implies is the current value of the input element, if there is one
    orderBy(event.target.value);
});
function togglePrice(showPrice) {
    // If showPublished is TRUE, only display published results
    // Filter will only inclue objects that return TRUE from it's query
    var filteredResults = mockDatabase.filter(function (result) {
        // If showPublished is TRUE, always show.
        // Otherweise only show if published is TRUE
        return showPrice || result.price;
    });
    renderCards(filteredResults);
}
// Change events trigger after the value of a form input changes
document.querySelector('#filters').addEventListener('change', function(event){
    // in this case value is a string that we need to convert to a boolean
    var value = event.target.value;
    togglePrice(value);
});

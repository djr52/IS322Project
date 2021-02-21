var mockDatabase = [
    { _id: '123', title: 'Item 1', price: 4.99 },
    { _id: '583', title: 'Item 2', price: 5.99 },
    { _id: '954', title: 'Item 3', price: 14.99 },
    { _id: '384', title: 'Item 4', price: 12.50 },
    { _id: '183', title: 'Item 5', price: 9.99 },
    { _id: '007', title: 'Item 6', price: 19.99 },
    { _id: '304', title: 'Item 7', price: 49.99 },
    { _id: '729', title: 'Item 8', price: 99.99 },
    { _id: '734', title: 'Item 9', price: 24.99 },
];

function renderCards (results){
    var listBody = document.querySelector('#card-container');

    // clear out inner HTML to get rid of any older results
    listBody.innerHTML = '';
    // Map each database record to a string containing the HTML for it's row
    var cardRows = results.map(function (result, index) {
        return '<div class="card"><div class="card-body">' + '<h5 class="card-title">' + result.title + '</h5><p class="card-text">'
            + result.price + '</p></div></div>';
    });
    // Set the contents of the table body to the new set of rendered HTML rows
    cardRows.forEach(function (row) {
        listBody.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
    });
}
renderCards(mockDatabase);

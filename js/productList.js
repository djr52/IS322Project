var mockDatabase = [
    { _id: '123', title: 'Article 1', price: 4.99 },
    { _id: '583', title: 'Article 2', price: 5.99 },
    { _id: '954', title: 'Article 3', price: 14.99 },
    { _id: '384', title: 'Article 4', price: 12.50 },
    { _id: '183', title: 'Article 5', price: 9.99 },
    { _id: '007', title: 'Article 6', price: 19.99 },
    { _id: '304', title: 'Article 7', price: 49.99 },
    { _id: '729', title: 'Article 8', price: 99.99 },
    { _id: '734', title: 'Article 9', price: 24.99 },
];

function renderPList (results){
    var tableBody = document.querySelector('#results-table tbody');

    // clear out inner HTML to get rid of any older results
    tableBody.innerHTML = '';
    // Map each database record to a string containing the HTML for it's row
    var tableRows = results.map(function (result, index) {
        return '<tr><td>' + index + '</td><td>' + result.title + '</td><td>' +
            result._id + '</td><td>' + result.price + '</td></tr>';
    });
    // Set the contents of the table body to the new set of rendered HTML rows
    tableRows.forEach(function (row) {
        tableBody.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
    });
}
function searchItems() {
    var query = document.getElementById('searchInput').value.toLowerCase();
    var resultDiv = document.getElementById('searchResult');
    var imageContainer = document.getElementById('imageContainer');
    var notFoundMessage = document.getElementById('notFoundMessage');
    
    if (items[query]) {
        var item = items[query];
        resultDiv.innerHTML = `
            <div class="info">
                <p><strong>Serial Number:</strong> ${item["Serial Number"]}</p>
                <p><strong>Product Name:</strong> ${item["Product Name"]}</p>
                <p><strong>Price:</strong> ${item["Price"]}</p>
                <p><strong>Qty:</strong> ${item["Qty"]}</p>
                <p><strong>Weight:</strong> ${item["Weight"]}</p>
                <p><strong>Added Date:</strong> ${item["Added Date"]}</p>
                <p><strong>Product Status:</strong> ${item["Product Status"]}</p>
                <p><strong>Condition:</strong> ${item["Condition"]}</p>
            </div>
        `;
        imageContainer.innerHTML = `<img src="${item["Image URL"]}" alt="${item["Product Name"]}">`;
        notFoundMessage.innerHTML = ''; // Clear the not found message
    } else {
        resultDiv.innerHTML = ''; // Clear the result container
        imageContainer.innerHTML = ''; // Clear image if item not found
        notFoundMessage.innerHTML = 'Item not found.'; // Show centered message
    }
}

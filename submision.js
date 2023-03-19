// Function to handle form submission
function handleSubmit(event) {
    console.log("yoo");
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the input values for text and image
    const text = document.getElementById("text-input").value;
    const image = document.getElementById("image-input").value;

    // Get the list element
    const list = document.getElementById("list");

    // Create a new list item element
    const newItem = document.createElement("li");

    // Create the text node with the input text and add it to the list item
    const newTitle = document.createElement("h1");
    const newText = document.createTextNode(text);
    newTitle.appendChild(newText);

    const legend = document.createTextNode("Legend");
    newItem.appendChild(legend);

    // Create a new image element with the URL from the input
    const newImage = document.createElement("img");
    newImage.src = image;
    newImage.className = "marega";
    newItem.appendChild(newImage);

    // Add the new list item to the list
    list.appendChild(newItem);

    // Reset the form
    form.reset();
}

// Get the form element and add an event listener for submission
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
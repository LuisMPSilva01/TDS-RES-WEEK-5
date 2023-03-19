import '../App.css'; 


const Form = ({
    setCards
}) => {
    // Function to handle form submission
    function handleSubmit(event) {
        console.log("yooo")
        const form = document.getElementById("form");

        // Prevent the form from submitting normally
        event.preventDefault();

        // Get the input values for text and image
        const text = document.getElementById("text-input").value;
        const image = document.getElementById("image-input").value;
        
        const newCard = <><h1>{text}</h1>
                          <p>Legend</p>
                          <a href="/marega"><img src={image} alt="" className="marega"/>
                          </a>
                        </>

        setCards(oldCards => [...oldCards, newCard]);
        // Reset the form
        form.reset();
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
		    <input type="text" id="text-input" placeholder="Enter item text"/>
		    <input type="text" id="image-input" placeholder="Enter image URL"/>
		    <button type="submit">Add Item</button>
	    </form>
    );
  }

export default Form;

import '../App.css'; 


const Main = ({
    items
}) => {

    return (
        <main>
		    <section>
		    	<article>
		    		<ul className="imageContainer" id="list">
                    {items.map(item => (
                        <li> {item} </li>
                    ))}
		    		</ul>
		    	</article>
		    </section>
	    </main>
    );
  }

export default Main;

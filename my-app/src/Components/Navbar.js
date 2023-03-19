import '../App.css'; 


const Navbar = ({
    items
}) => {

    return (
        <nav>
		    <div>
		    	<h2>Logo</h2>
		    </div>
		    <ul>
                {items.map(item => (
                        <li> {item} </li>
                ))}
		    </ul>
	    </nav>
    );
  }

export default Navbar;

import '../App.css'; 


const AsideBar = ({
    items
}) => {

    return (
        <aside>
		    <h2>Sidebar</h2>
		    <ul>
                {items.map(item => (
                        <li> {item} </li>
                ))}
		    </ul>
	    </aside>
    );
  }

export default AsideBar;

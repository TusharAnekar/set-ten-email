import { NavLink } from "react-router-dom";

export function Header() {

    const getActiveStyle = ({isActive}) => ({
        margin: "5px",
        display: "block",
        color: isActive && "red",
        borderRight: isActive && "1px solid black",
        paddingRight : isActive && "5px",
        fontWeight : isActive && "bold"
    })
    
  return (
    <div>
      <nav>
        <NavLink to={"/"} style={getActiveStyle}>Inbox</NavLink>
        <NavLink to={"/spam"} style={getActiveStyle}>Spam</NavLink>
        <NavLink to={"/trash"} style={getActiveStyle}>Trash</NavLink>
      </nav>
    </div>
  );
}

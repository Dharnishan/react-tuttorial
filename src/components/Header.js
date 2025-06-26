import './Header.css';
import styles from './Header.module.css';
function Header(){
    const myStyle = {
        color: "blue",  
        backgroundColor: "yellow",
        fontSize: "20px",   
        padding: "10px",
        textAlign: "center",
        fontFaamily: "Arial, sans-serif",
        border: "2px solid black",
        borderRadius: "5px"

    };
    return(
        <div>
            {/* <h1 style={myStyle}>Hello Styling</h1> */}
            <h1 className={styles.bigBlue}>Hello Styling</h1>
            <p>Add a Little Style</p>
        </div>
        
    );
}

export default Header;
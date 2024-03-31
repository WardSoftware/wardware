import React, { useEffect } from 'react';
import { useContext } from 'react';
import StyleContext from '../context/StyleContext';
import "./Header.css"

export default function Header() {

    const theme = useContext(StyleContext);

    useEffect(() => {
        console.log(theme)
    })
    return <div style={{
        backgroundColor: theme.menu.backgroundColor,
        color: theme.menu.textColor,
        ...styles.container
    }}>
        <div style={{ padding: 20 }}>
            Wardware
        </div>
        <div style={{ display: "flex", flexDirection: "row"}}>
            <a className="headerButton" href="//salvador.wardware.co.uk" >
                Salvador
            </a>
        </div>
    </div>
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "Center",
        width: "100%",
        height: "10vh",
        fontSize: "calc(12px + 0.5vw)"
    },
    buttons: {
        display: "flex",
        width: "60%",
        height: "100%",

    }
}
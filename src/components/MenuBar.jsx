import React from 'react';

export default function MenuBar() {
    return (
        <div style={styles.container}>
            <div style={styles.left}>
                <p style={styles.logo}>
                    WardWard Ltd.
                </p>
            </div>
            <div style={styles.right}>
                <p>
                    
                </p>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        position: "fixed",
        width: "100%",
        height: "5%",
        padding: 10,
        backgroundColor: "#ffffff",

    },
    headerLink: {
        borderWidth: 1,
        backgroundColor: "#bbbbbb"
    },
    logo: {
        fontFamily: "Verdana",
        fontSize: "calc(10px + 1vmin)",
    },
    left: {
        justifyContent: "left",
        alignSelf: "center",
    },
    right: {
        justifyContent: "right",
        alignSelf: 'center'
    }
}
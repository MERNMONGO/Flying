
import React from 'react'

function DefaultLayout(props) {
    return ( 
        <html>
            <head>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <nav className = "nav">
                        
                        <a href="/flights">All Flights</a>
                        <a href="/flights/new">Add New Flight</a>
                        
                    
                </nav>
                    {props.children}
            </body>
        </html>
    );
}

export default DefaultLayout;
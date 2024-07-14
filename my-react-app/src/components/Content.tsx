import React from "react";
import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";
/* 
how to put items in elements
{
    items.map((item, index) => (
        <li
            className="list-group-item-active"
            key={item}
            onClick={() => setSelectedIndex(index)}
        >
            {item}</li>
    ))
}
*/
function ListGroup() {
    let items = [
        'New York Post',
        'San Fran Post',
        'London Post',
    ];
    const handleClick = (event: MouseEvent) => console.log(event)
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            {items.length === 0 && <p>No item found</p>}
            <h1>Logo</h1>

            <div className="container">
                <div className="row">
                    <div className="col">
                        One Post

                    </div>

                    <div className="col">
                        Another Post
                    </div>

                    <div className="col">Another Post</div>

                    <div className="col">Another Post</div>

                </div>

                <div className="row">
                    <div className="col">
                        One Post

                    </div>

                    <div className="col">
                        Another Post
                    </div>

                    <div className="col">Another Post</div>

                    <div className="col">Another Post</div>

                </div>


            </div>






        </>
    );
}
export default ListGroup;
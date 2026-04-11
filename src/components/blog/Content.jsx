import React from "react";

function Content({title, content, author, date}){
    return (
        <main>
            <h1 className="bold text-3xl font-sans">{title}</h1>
            <p className="py-2">{content}</p>
            <p className="py-1">
                <strong>Author:</strong> {author}
            </p>
            <p className="py-1">
                <strong>Date:</strong> {date}
            </p>
        </main>
    );
}

export default Content;
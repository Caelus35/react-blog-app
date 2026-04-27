import React from "react";

function Content({title, content, author}){
    return (
        <main>
            <h1 className="bold text-3xl font-sans">{title}</h1>
            <p className="py-2">{content}</p>
            <p className="py-1">
                <strong>Author:</strong> {author}
            </p>
            
        </main>
    );
}

export default Content;
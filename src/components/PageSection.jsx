import React from "react";

export default function PageSection({title, content}) {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                {content}
            </div>
        </div>
    );
}
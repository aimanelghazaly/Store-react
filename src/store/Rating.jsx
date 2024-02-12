import React from "react";

export default function Rating ({ count, rate }) {
    return (
        <React.Fragment>
            <span className="badge badge-pill bg-primary">{rate}/5</span>
        </React.Fragment>
    );
}
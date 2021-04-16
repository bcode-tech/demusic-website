import React from "react";

const RenderTerms = ({ content, itemKey }) => {
    return (
        <>
            {content.map((item, index) => {
                switch (item.type) {
                    case "text":
                        return (
                            <p className="text" key={`item-${index}`}>
                                {item.value}
                            </p>
                        );
                    case "listItem":
                        return (
                            <div
                                className={`list-item ${
                                    item.type === "listItemIndent"
                                        ? "indent"
                                        : ""
                                }`}
                                key={`item-${index}`}
                            >
                                {item.value}
                            </div>
                        );
                    case "image":
                        return (
                            <img
                                className="img"
                                src={item.value}
                                key={`item-${index}`}
                            />
                        );
                    default:
                        return (
                            <p className="text" key={`item-${index}`}>
                                {item.value}
                            </p>
                        );
                }
            })}
        </>
    );
};

export default RenderTerms;

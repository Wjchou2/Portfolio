"use client";
export default function LinkEmbed({ text, link, linktext }) {
    return (
        <h2>
            {text}
            <a href={link} target="_blank">
                {linktext}{" "}
            </a>
        </h2>
    );
}

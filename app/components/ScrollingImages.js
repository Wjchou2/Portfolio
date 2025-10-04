"use client";

export default function ImageSidebar({ images }) {
    return (
        <div className="sidebar">
            <div className="scrolling-track">
                {images.map((src, i) => (
                    <img key={`dup-${i}`} src={src} alt={`image-dup-${i}`} />
                ))}
                {images.map((src, i) => (
                    <img key={`dup-${i}`} src={src} alt={`image-dup-${i}`} />
                ))}
                {images.map((src, i) => (
                    <img key={`dup-${i}`} src={src} alt={`image-dup-${i}`} />
                ))}
                {images.map((src, i) => (
                    <img key={`dup-${i}`} src={src} alt={`image-dup-${i}`} />
                ))}
            </div>
        </div>
    );
}

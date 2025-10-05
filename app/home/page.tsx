import Navbar from "@/app/components/Navbar";
import ImageScroll from "@/app/components/ScrollingImages";


import '../styles.css'; // Import the CSS file


export default function Projects() {
  return (
    <div >
      <Navbar></Navbar>
        <title>Endless' Portfolio</title>
      <h1>Hi I'm Endless</h1>
      <p>I'm a Sophmore in high school and I love to code and 3d print. I like making websites, roblox games, or anything else!</p>
      <p>Check out my <a href="/projects">projects!</a></p>
      <ImageScroll images={["/images/learnify.png/", "/images/roblox.png", "/images/breakout.png", "/images/countdown.png", "images/schoology.png"]}></ImageScroll>

    </div>
  );
}

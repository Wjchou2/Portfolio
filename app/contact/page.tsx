import Navbar from "@/app/components/Navbar";
import LinkEmbed from "@/app/components/LinkEmbed";


import '../styles.css'; // Import the CSS file


export default function Projects() {
  return (
    <div >
        <Navbar></Navbar>
        <LinkEmbed text="Contact me at my email " link="mailto:williamjchou1@gmail.com" linktext="williamjchou1@gmail.com" />
         <LinkEmbed text="Check out my github  " link="https://github.com/Wjchou2" linktext="Wjchou2" />
         <LinkEmbed text="Check out my   " link="https://www.roblox.com/communities/34997762/Endless-Studios#!/about" linktext="roblox games" />

    </div>
    
  );
}

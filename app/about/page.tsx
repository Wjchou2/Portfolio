import Navbar from "@/app/components/Navbar";
import Highlight from "@/app/components/Highlight";

import '../styles.css'; // Import the CSS file


export default function Projects() {
  return (
    <div >
        <Navbar></Navbar>
<h2>I started learning how to code in 4th grade, starting with making my best attempt at good quality <Highlight text={"scratch"}></Highlight> games
  <br/>
   During that summer, I discovered <Highlight text={"JS"}></Highlight>, learning it at a summer camp.
   <br/>
  From there, I continued to learned <Highlight text={"web design"}></Highlight>,  as well as <Highlight text={"Roblox lua"}></Highlight> and some python.
  <br/>
  I don't know what else to say here :0
</h2>

    </div>
  );
}

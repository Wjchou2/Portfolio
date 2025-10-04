import Navbar from "@/app/components/Navbar";
import Projectpage from "@/app/components/Projectpage";

import Projectinfo from "@/app/components/Projectinfo";

// import '../styles.css'; // Import the CSS file

export default function Projects() {
  return (
    <div >
      <Navbar></Navbar>
        <p id="robloxPlays">Our Roblox games currently have {getGroupTotalVisits()} plays</p>
      <Projectpage project={Projectinfo.Roblox}></Projectpage>
    
    </div>
  );

  
}
    

async function getGroupTotalVisits() {
    let totalVisits = 0;
  try{
  const gamesResponse = await fetch(`https://games.roblox.com//v2/groups/34997762/gamesv2`);
  const gamesData = await gamesResponse.json();
  


  // Iterate through each game and fetch its visit count
  // console.log(gamesData.data);

  for (const game of gamesData.data) {
    const gameResponse = await fetch(`https://games.roblox.com/v1/games?universeIds=${game.id}`);
    const gameData = await gameResponse.json();
    if (gameData && gameData.data && gameData.data[0]){
    totalVisits += gameData.data[0].visits;
    }
  }
  }
  finally{
    console.log("hi")
  }
  return totalVisits;
}

import React from "react";
import MediaCard from "./MediaCard";

class MediaList extends React.Component {
  render() {
    return (
      <ul className="MediaList">
        <li>
          <MediaCard
            img="https://www.wallpapergeeks.com/wp-content/uploads/2014/06/Cat-Mustache-Wallpaper.jpg"
            name="María Núñez"
            date="Lunes 31 de mayo de 2021"
            text="Destroy the blinds. Try to jump onto window and fall while scratching
          at wall instantly break out into full speed gallop across the house
          for no reason. Pounce on unsuspecting person damn that dog yet you are
          a captive audience while sitting on the toilet, pet me so pushes butt
          to face so hide at bottom of staircase to trip human."
            likes={50}
            heart={true}
          />
        </li>
        <li>
          <MediaCard date="Lunes 31 de mayo de 2021" />
        </li>
        <li>
          <MediaCard />
        </li>
      </ul>
    );
  }
}

export default MediaList;

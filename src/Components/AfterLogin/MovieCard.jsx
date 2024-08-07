// import React from "react";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// const MovieCard = ({ data }) => {
//   return (
//     <div className="">
//       <div className="flex">
// <img src={data} alt="" />

//       </div>

//     </div>
//   );
// };

// export default MovieCard;

import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieCard = () => {
  const [options, setOptions] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
      const res = await axios
          .get("https://libretranslate.com/languages", {
            headers: { accept: "application/json" },
          });
        
            console.log(res.data);
            setOptions(res.data);
        
        setLoading(false);
      } catch (error) {
        alert(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(options);
  return (
    <div>
      {loading ? (
        <h1 className="text-center  text-3xl">Loading...</h1>
      ) : (
        // <p>{options[1]["code"]}</p>
        <select className="text-black">
      
            <option>{options[0]["name"]}</option>
            <option>{options[19]["name"]}</option>
          
        </select>
      )}
    </div>
  );
};

export default MovieCard;

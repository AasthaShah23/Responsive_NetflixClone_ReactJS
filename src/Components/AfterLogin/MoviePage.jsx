import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Player } from "video-react";
import MovieCard from "./MovieCard";

const MoviePage = ({ title }) => {
  const [dataa, setDataa] = useState([]);
  const [loading, setLoading] = useState(true);

  const [mute, setMute] = useState(true);
  const movie_ids = [
    "tt0111161",
    "tt0068646",
    "tt0468569",
    "tt0071562",
    "tt0050083",
    "tt0108052",
    "tt0167260",
    "tt0110912",
    "tt0120737",
    "tt0060196",
    "tt0109830",
    "tt0167261",
    "tt0137523",
    "tt1375666",
    "tt0080684",
    "tt0133093",
    "tt0099685",
    "tt0073486",
    "tt0114369",
    "tt0038650",
    "tt0816692",
    "tt0047478",
    "tt0102926",
    "tt0120815",
    "tt0317248",
    "tt0118799",
    "tt0120689",
    "tt0103064",
    "tt0076759",
    "tt0088763",
    "tt0245429",
    "tt9362722",
    "tt0253474",
    "tt6751668",
    "tt0054215",
    "tt0172495",
    "tt0110357",
    "tt0110413",
    "tt0407887",
    "tt0120586",
    "tt2582802",
    "tt0482571",
    "tt0095327",
    "tt0056058",
    "tt0114814",
    "tt0034583",
    "tt1675434",
    "tt0027977",
    "tt0095765",
    "tt23849204",
    "tt0047396",
    "tt0064116",
    "tt0078748",
    "tt0021749",
    "tt0078788",
    "tt1853728",
    "tt0209144",
    "tt0910970",
    "tt0082971",
    "tt0405094",
    "tt0043014",
    "tt0050825",
    "tt4154756",
    "tt4633694",
    "tt0081505",
    "tt0051201",
    "tt0032553",
    "tt0090605",
    "tt0361748",
    "tt1345836",
    "tt0057012",
    "tt0169547",
    "tt0364569",
    "tt2380307",
    "tt0086879",
    "tt0114709",
    "tt0082096",
    "tt0112573",
    "tt4154796",
    "tt7286456",
    "tt0119698",
    "tt15398776",
    "tt0119217",
    "tt5311514",
    "tt0087843",
    "tt0057565",
    "tt1187043",
    "tt0045152",
    "tt8267604",
    "tt0180093",
    "tt0091251",
    "tt0435761",
    "tt0086190",
    "tt14230458",
    "tt0338013",
    "tt2106476",
    "tt0062622",
    "tt0105236",
    "tt0044741",
    "tt0056172",
    "tt0053604",
    "tt0033467",
    "tt0053125",
    "tt0022100",
    "tt0052357",
    "tt0036775",
    "tt0086250",
    "tt1255953",
    "tt0211915",
    "tt0093058",
    "tt0066921",
    "tt0113277",
    "tt1049413",
    "tt0056592",
    "tt0070735",
    "tt1832382",
    "tt0097576",
    "tt0095016",
    "tt8503618",
    "tt0017136",
    "tt0986264",
    "tt0208092",
    "tt0040522",
    "tt0119488",
    "tt8579674",
    "tt0075314",
    "tt0363163",
    "tt5074352",
    "tt0059578",
    "tt0372784",
    "tt0053291",
    "tt0993846",
    "tt0012349",
    "tt6966692",
    "tt10272386",
    "tt1745960",
    "tt0055031",
    "tt0042192",
    "tt0120382",
    "tt0469494",
    "tt1130884",
    "tt0112641",
    "tt0089881",
    "tt0107290",
    "tt0167404",
    "tt0457430",
    "tt0105695",
    "tt0268978",
    "tt0477348",
    "tt0040897",
    "tt0084787",
    "tt0055630",
    "tt0266697",
    "tt0071853",
    "tt0057115",
    "tt0266543",
    "tt0042876",
    "tt0080678",
    "tt0347149",
    "tt0071315",
    "tt1392214",
    "tt0046912",
    "tt0031381",
    "tt0434409",
    "tt0120735",
    "tt1305806",
    "tt0081398",
    "tt2096673",
    "tt5027774",
    "tt0117951",
    "tt0050212",
    "tt10872600",
    "tt0116282",
    "tt23289160",
    "tt1291584",
    "tt4729430",
    "tt0264464",
    "tt1205489",
    "tt0096283",
    "tt0405159",
    "tt1201607",
    "tt0118849",
    "tt2024544",
    "tt0083658",
    "tt0112471",
    "tt2278388",
    "tt0052618",
    "tt0072684",
    "tt2267998",
    "tt0015864",
    "tt2119532",
    "tt0107207",
    "tt0353969",
    "tt0047296",
    "tt0017925",
    "tt0097165",
    "tt0077416",
    "tt3011894",
    "tt1392190",
    "tt0015324",
    "tt0050986",
    "tt0198781",
    "tt0041959",
    "tt0046268",
    "tt0073195",
    "tt0892769",
    "tt0978762",
    "tt0031679",
    "tt1950186",
    "tt0382932",
    "tt0050976",
    "tt3170832",
    "tt0118715",
    "tt0046438",
    "tt0075148",
    "tt0395169",
    "tt3315342",
    "tt1895587",
    "tt0091763",
    "tt0088247",
    "tt0019254",
    "tt15097216",
    "tt0381681",
    "tt0036868",
    "tt0113247",
    "tt1979320",
    "tt0070047",
    "tt0074958",
    "tt0325980",
    "tt0092005",
    "tt0032138",
    "tt0317705",
    "tt0758758",
    "tt1028532",
    "tt4016934",
    "tt0476735",
    "tt0035446",
    "tt0032551",
    "tt0107048",
    "tt0058946",
    "tt0059742",
    "tt0245712",
    "tt0032976",
    "tt0061512",
    "tt0129167",
    "tt1454029",
    "tt0025316",
    "tt0053198",
    "tt1954470",
    "tt0103639",
  ];

  const onHover = () => {
    setMute(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const arr = [];
      // try {
      //   for (let i = 0; i < 20; i++) {
      //     let randomId = `${Math.floor(Math.random() * movie_ids.length)}`;
      //     const res = await axios.get(
      //       `http://www.omdbapi.com/?i=${movie_ids[randomId]}&apikey=fa285224`
      //     );

      //     arr.push(res.data);
      //     setDataa(arr);
      //   }
      //   setLoading(false);
      // } catch (error) {
      //   alert(error.message);
      //   setLoading(false);
      // }
    };
    fetchData();
  }, []);

  console.log("New_qwert", dataa);

  return (
    <div>
      {loading ? (
        <h1 className="text-center  text-3xl">Loading...</h1>
      ) : (
        <div className="bg-black pl-[45px] my-[50px]">
          <div>
            <p className="text-white text-md  md:text-xl lg:text-2xl font-semibold mb-4">
              {/* Top Searches */}
              {title}
            </p>
         

            <div>
              <div className=" grid place-items-center">
                <div className="flex overflow-y-hidden overflow-x-scroll scrollbar scrollbar-thumb-black">
                  {dataa.map((item, key) => (
                    
                    <img
                    key={key}
                      className="group p-3 h-52 rounded-[30px] transform duration-300 ease-in hover:scale-125 "
                      src={item["Poster"]}
                      alt=""
                    />
                   
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePage;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext({});

function ContextProvider({ children }) {

  const [searchInputValue, setSearchInputValue] = useState('')
  const [sortVideo, setSortVideo] = useState('')
  const [cardInfo, setCardInfo] = useState([]);
  
  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: {q: 'despacito', hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '8b01454d9bmshdb376661854530bp1cd673jsn6764f0865343',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

   useEffect(() => {
      axios.request(options).then((response)=> {
        setCardInfo(response.data.contents)
      }).catch((error) => {
        console.error(error);
      });
    }, [])

    function submiteSearch(e) {
      e.preventDefault();
      options.params.q = searchInputValue;
      axios.request(options).then((response)=> {
        setCardInfo(response.data.contents)
      }).catch((error) => {
        console.error(error);
      });
      setSearchInputValue('')
      console.log(cardInfo);
    }


    function submiteButtonValue(e) {
      e.preventDefault();
      options.params.q = sortVideo;
      axios.request(options).then((response)=> {
        setCardInfo(response.data.contents)
      }).catch((error) => {
        console.error(error);
      });
      console.log(cardInfo);
    }

   

  
  // console.log(cardInfo);

  const [channelDetails, setChannelDetails] = useState([
    {
      id: 1,
      text: "Javohir Group",
      image:
        "https://yt3.ggpht.com/ytc/AL5GRJXnhVzZjU4ookLgsL9FvVAAkDx0a6AaUb-F4nCl4Q=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      text: "Julius yours",
      image:
        "https://yt3.ggpht.com/pU3yZNvO0UCfps9l5S7nhBh5j8HNxXg4Z_SX4Lcb6FMtwx8xtsZJwofCsidCnbQwFnmv-XfQ=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 3,
      text: "Clément Mihailescu",
      image:
        "https://yt3.ggpht.com/ytc/AL5GRJUSZ7xEzptvNzOVYrGUGfSbSqFoo7ZofvYabrPajzE=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 4,
      text: "XURMO",
      image:
        "https://yt3.ggpht.com/DTvyyEzZdoQchiPPyzzlF4rJw_FDS85UyOI9WKywvMDL_Bf0t854SXo5fpesZBy89aps_RNFCw=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 5,
      text: "Programming with M..",
      image:
        "https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 6,
      text: "Joma Tech",
      image:
        "https://yt3.ggpht.com/ytc/AL5GRJV0oqI59o3rTGdjJnqA1gBX4d8I39zFxx3a_XBu=s88-c-k-c0x00ffffff-no-rj",
    },
  ]);

  const [headerButtons, setHeaderButtons] = useState([
    { id: 1,title: "All"},
    { id: 2,title: "Music"},
    { id: 3,title: "Video Game"},
    { id: 4,title: "Now on air"},
    { id: 5,title: "Tourist destinitions"},
    { id: 6,title: "Cartoons"},
    { id: 7,title: "Rap"},
    { id: 8,title: "Nature"},
    { id: 12,title: "Toys"},
    { id: 13,title: "Animal"},
    { id: 14,title: "Fitnes"},
    { id: 15,title: "Food"},
    { id: 16,title: "Horor"},
  ]);

  return (
    <Context.Provider
      value={{
        headerButtons,
        setHeaderButtons,
        channelDetails,
        cardInfo,
        submiteSearch,
        searchInputValue,
        setSearchInputValue,
        submiteButtonValue,
        setSortVideo
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

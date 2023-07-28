import React, { useContext } from "react";
import { RiVideoLine } from "react-icons/ri";
import { FaYoutubeSquare } from "react-icons/fa";
import { BsBroadcast, BsLightbulb, BsNewspaper } from "react-icons/bs";
import { GiHanger } from "react-icons/gi";
import { TfiCup } from "react-icons/tfi";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdOutlineRestore,
  MdOutlineWatchLater,
  MdOutlineLocalFireDepartment,
  MdHomeFilled,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FcMusic } from "react-icons/fc";
import { SiYoutubegaming } from "react-icons/si";
import "./Hero.css";
import { Context } from "../../Components/Context/Context";

export default function Hero() {
  const {
    headerButtons,
    channelDetails,
    cardInfo,
    setSortVideo,
    buttonValue,
    submiteButtonValue,
  } = useContext(Context);
  return (
    <>
      <div className="hero">
        <div className="flex">
          <div className="heroLeft">
            <ul className="heroLeftMenuList">
              <li className="heroLeftItemList">
                <div className="heroLeftNav">
                  <MdHomeFilled className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Home</span>
                </div>
                <div className="heroLeftNav">
                  <FaYoutubeSquare className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Shorts</span>
                </div>
                <div className="heroLeftNav">
                  <MdSubscriptions className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Subscriptions</span>
                </div>
              </li>
              <li className="heroLeftItemList">
                <div className="heroLeftNav">
                  <MdVideoLibrary className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Library</span>
                </div>
                <div className="heroLeftNav">
                  <MdOutlineRestore className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">History</span>
                </div>
                <div className="heroLeftNav">
                  <RiVideoLine className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Your videos</span>
                </div>
                <div className="heroLeftNav">
                  <MdOutlineWatchLater className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Watch later</span>
                </div>
                <div className="heroLeftNav">
                  <BiLike className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Liked</span>
                </div>
              </li>
              <li className="heroItemTitleTExt">
                <h3 className="heroItemSubTxt">Subscriptions</h3>
              </li>
              <li className="heroLeftItemList">
                {channelDetails.map((i) => {
                  return (
                    <div key={i.id} className="heroLeftNav">
                      <img
                        className="heroleftChanelImg"
                        src={i.image}
                        alt="channelPict"
                      />
                      <span className="heroLeftNavTitle">{i.text}</span>
                    </div>
                  );
                })}
              </li>
              <li className="heroItemTitleTExt">
                <h3 className="heroItemSubTxt">Navigator</h3>
              </li>
              <li className="heroLeftItemList">
                <div className="heroLeftNav">
                  <MdOutlineLocalFireDepartment className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">In trend</span>
                </div>
                <div className="heroLeftNav">
                  <FcMusic className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Music</span>
                </div>
                <div className="heroLeftNav">
                  <BsBroadcast className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Broadcasts</span>
                </div>
                <div className="heroLeftNav">
                  <SiYoutubegaming className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">video games</span>
                </div>
                <div className="heroLeftNav">
                  <BsNewspaper className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">News</span>
                </div>
                <div className="heroLeftNav">
                  <TfiCup className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Sport</span>
                </div>
                <div className="heroLeftNav">
                  <BsLightbulb className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Education</span>
                </div>
                <div className="heroLeftNav">
                  <GiHanger className="heroLeftNavIcon" />
                  <span className="heroLeftNavTitle">Fashion and beauty</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="heroRight">
            <div className="heroRightFlex">
              <div>
                <form
                  className="heroRightSortTop"
                  onSubmit={(e) => submiteButtonValue(e)}
                >
                  {headerButtons.map((item) => {
                    return (
                      <button
                        value={item.title}
                        key={item.id}
                        className="heroRightBtnSort"
                        onClick={(e) => setSortVideo(e.target.value)}
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </form>
              </div>
            </div>
            <ul className="heroRightMainCard">
              {cardInfo ? (
                cardInfo.map((item) => {
                  return (
                    <li key={item.video.videoId}>
                      <a
                        className="heroCardsLink"
                        href={`https://youtube.com/video/${item.video.videoId}/`}
                      >
                        <div>
                          <div className="heroImgBox">
                            <img
                              className="heroVideos"
                              src={item.video.thumbnails[0].url}
                              alt=""
                            />
                          </div>
                          <div className="heroCardsBottomflex">
                            <a
                              className="heroChanelLink"
                              target="_blank"
                              href={`https://youtube.com/${item.video.author.canonicalBaseUrl}`}
                            >
                              <div className="heroChanelImgae">
                                <img
                                  className="chanelPic"
                                  src={item.video.thumbnails[0].url}
                                  alt="channelImage"
                                />
                              </div>
                            </a>
                            <div className="heroCardTitleBox">
                              <h2 className="heroCardTitle">
                                {item.video.title}
                              </h2>
                              <p
                                style={{
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  fontWeight: "300",
                                  color: "#4a4a4a",
                                  margin: "8px 0 0 10px",
                                }}
                              >
                                Year: {item.video.publishedTimeText}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })
              ) : (
                <h1>Loading...</h1>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

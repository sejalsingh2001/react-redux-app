import React from "react";
import "./Widget.css";
import WidgetContent from "./WidgetContent";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed'
function Widget() {
  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Spaces to follow</h5>
      </div>
      <div className="widget__contents">
        <WidgetContent />
      </div>
      <div className="twitter">
            <TwitterTweetEmbed url = {"https://twitter.com/ReactNativeNav"} />

           <TwitterTimelineEmbed 
             sourceType = "profile"
            screenName = "ReactNativeNav"
             options = {{ height: 400 }}
              />

              <TwitterShareButton 
               url = {"https://twitter.com/ReactNativeNav"}
               options = { { text : "Subscribe my Youtube Channel #CodeWithAkky" , via :  "akkyProjects" }}
                 />
               </div>
    </div>
  );
}

export default Widget;

import React, { useEffect, useState } from "react";

export default function AboutUs() {
  const [html, setHtml] = useState("");
  const api =
    "http://localhost:2368/ghost/api/content/posts/slug/aboutus/?key=bd86382817fd2b5177da3a492e";
  useEffect(() => {
    fetch(api, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setHtml(data["posts"][0]["html"]);
      })
      .catch((error) => {
        console.log("Error While Fetching About-us: ", error);
      });
  }, []);
  return <div style={{padding:"20px 50px",backgroundColor:"lightblue",}}>
      <div dangerouslySetInnerHTML={{__html:html}}/>
  </div> 
}


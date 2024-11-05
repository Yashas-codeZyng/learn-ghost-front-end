import React, { useEffect, useState } from "react";

export default function Home() {
  const [coverUrl, setCoverUrl] = useState("");
  const [centerText,setCenterText]=useState("");
  const api =
    "http://localhost:2368/ghost/api/content/posts/slug/coverimage/?key=bd86382817fd2b5177da3a492e";
  useEffect(() => {
    fetch(api, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCoverUrl(data["posts"][0]["feature_image"]);
        setCenterText(data["posts"][0]["excerpt"]);
      })
      .catch((error) => console.log("Fetching CoverImage :", error));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${coverUrl})`,
        width: "auto",
        height: "45vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >  
    <h5 style={{fontSize:"40px",color:"#00008B"}}>{centerText}</h5>
    </div>
  );
}

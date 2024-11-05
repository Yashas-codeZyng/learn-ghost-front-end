import React, { useEffect, useState } from "react";

export default function Footer() {
  const [stuff, setStuff] = useState();
  const api =
        "http://localhost:2368/ghost/api/content/posts/slug/footer/?key=bd86382817fd2b5177da3a492e";
  useEffect(() => {
    fetch(api, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data["posts"][0]["feature_image_alt"]);
        setStuff(data["posts"][0]["html"]);
      })
      .catch((error) => {
        console.log("NavbarFetch: ", error);
      });
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: "#00008B",
        display: "flex",
        overflowX:"hidden"
      }}
      dangerouslySetInnerHTML={{__html:stuff}}
    >

    </div>
  );
}
import React, { useEffect, useState } from "react";
import NavButton from "../NavbarButtons";

export default function Navbar() {
  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    const api =
      "http://localhost:2368/ghost/api/content/posts/slug/imagefornavbar/?key=bd86382817fd2b5177da3a492e";
    fetch(api, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data["posts"][0]["feature_image_alt"]);
        setLogoUrl(data["posts"][0]["feature_image"]);
      })
      .catch((error) => {
        console.log("NavbarFetch: ", error);
      });
  }, []);
  return (
    <div
      style={{
        width: "96%",
        backgroundColor: "#20bbe6",
        height: "70px",
        top: 0,
        display: "flex",
        alignItems: "center",
        padding: "0% 2%",
        justifyContent: "space-between",
      }}
    >
      <img src={logoUrl} style={{ width: "50px", height: "50px" }} />
      <div style={{ display: "flex", gap: "20px" }}>
        <NavButton text="Home" link="/" />
        <NavButton text="About us" link="about-us"/>
      </div>
    </div>
  );
}

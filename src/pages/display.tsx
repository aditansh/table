import React, { useEffect, useState } from "react";
export default function display() {
  const pptBlobUrl =
    "https://vit-eshop-images.s3.ap-south-1.amazonaws.com/20-Module+5+Routing+Algorithms-19-06-2023.pptx";
  const excelBlobUrl =
    "https://vit-eshop-images.s3.ap-south-1.amazonaws.com/VIT+Round+1+Results.xlsx";

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${excelBlobUrl}`}
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen
          title="presentation"
        />
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${pptBlobUrl}`}
          width="960"
          height="569"
          allowFullScreen
          title="presentation"
        />
        
      </div>
    </div>
  );
}

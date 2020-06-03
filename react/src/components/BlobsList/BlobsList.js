import React, { useContext, useEffect, useState } from "react";
import ajaxContent from "../../helpers/ajax.js";
import { ajaxUrls } from "../../helpers/ajax.js";
import { UserContext } from "../../App.js";
import Loader from "../Loader.js";
import Blob from "./Blob.js";

import "../../css/user.css";

export default function BlobsList({history}) {
  const user = useContext(UserContext);
  const [content, setContent] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  var blobslist;
  if (content) {
    const blobs = content.map((blob) => {
      return (
        <Blob
          name={blob.name}
          created_at={blob.created_at}
        ></Blob>
      );
    });
    blobslist = <ul className="users">{blobs}</ul>;
  }

  useEffect(() => {
    if (user) {
      (async () => {
        const blobs = await ajaxContent(ajaxUrls.blobs, {}, setLoadingState);
        console.log(blobs)
        setContent(blobs);
      })();
    }
  }, [user]);



  return (
    <>
    {
        loadingState 
            ? <Loader /> 
            : blobslist
    }
    
    </>
    );
}

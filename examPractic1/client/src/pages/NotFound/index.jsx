import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <section
        style={{
          color: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h1>Not Found</h1>
      </section>
    </>
  );
};

export default NotFound;

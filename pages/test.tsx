import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <Link href="/">
          <a className="text-blue-500 underline">home</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;

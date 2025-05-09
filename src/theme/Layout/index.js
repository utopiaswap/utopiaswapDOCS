import React, { useEffect } from "react";
import Layout from "@theme-original/Layout";

export default function LayoutWrapper(props) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("docusaurus.theme", "dark");
    }
  }, []);

  return <Layout {...props} />;
}

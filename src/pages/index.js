import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import "./index.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="home-page-wrapper">
        <img className="logo" src="/img/logo.svg" alt="logo" />
        <div className="logo-title">
          EXT Browser
        </div>
        <div className="logo-subtitle">
          Browser Extension Library
        </div>
      </main>
    </Layout>
  );
}

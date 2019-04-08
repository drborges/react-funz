import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Layout.Sidebar>
        <h4>Rooms</h4>
        <ul>
          <li># Avengers</li>
          <li># Ei Nerd</li>
          <li># GOT</li>
        </ul>

        <h4>Direct Messages</h4>
        <ul>
          <li>Bianca Pacheco</li>
          <li>Ronaldo Ferreira</li>
          <li>Hernando Borges</li>
        </ul>
      </Layout.Sidebar>

      <Layout.Content>
        <section>
          <h1>Chat...</h1>
        </section>
      </Layout.Content>
    </Layout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

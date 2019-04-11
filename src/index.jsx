import React, { useState } from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";
import Toggle from "./Toggle";

import "./App.css"

function App() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Layout expanded={expanded}>
      <Layout.Sidebar>
        <Toggle onToggle={() => setExpanded(!expanded)} />

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
        <article>
            <h1>Pure CSS slide in push menu</h1>
            <p>
              Tap or click the + icon
            </p>
            <p>
              Tested and working in:
            </p>
            <ul>
                <li>
                    Chrome
                </li>
                <li>
                    Safari
                </li>
                <li>
                    Firefox
                </li>
                <li>
                    Opera
                </li>
                <li>
                    IE11
                </li>
                <li>
                    IE10
                </li>
                <li>
                    IE9 - Without push or animation.
                </li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </article>
      </Layout.Content>
    </Layout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

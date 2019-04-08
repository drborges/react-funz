import React from "react";

import styles from "./Layout.module.css";

const Sidebar = ({ children }) => {
  return <nav className={styles.slidebar}>{children}</nav>;
};

const Content = ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};

const Layout = ({ children }) => {
  const nodes = React.Children.toArray(children);
  const sidebar = nodes.find(child => child.type === Sidebar);
  const content = nodes.find(child => child.type === Content);

  return (
    <div className={styles.layout}>
      {sidebar}
      {content}
    </div>
  );
};

Layout.Sidebar = Sidebar;
Layout.Content = Content;

export default Layout;

import React from "react";

import styles from "./Layout.module.css";

const Sidebar = ({ children }) => {
  return (
    <nav className={styles.sidebar}>
      {children}
    </nav>
  )
};

const Content = ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};

const Layout = ({ children, expanded }) => {
  const nodes = React.Children.toArray(children);
  const sidebar = nodes.find(child => child.type === Sidebar);
  const content = nodes.find(child => child.type === Content);

  return (
    <div className={expanded ? styles["expanded-layout"] : styles.layout}>
      {sidebar}
      {content}
    </div>
  );
};

Layout.Sidebar = Sidebar;
Layout.Content = Content;

export default Layout;

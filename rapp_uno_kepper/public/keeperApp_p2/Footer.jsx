import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} mossad</p>
    </footer>
  );
}

export default Footer;

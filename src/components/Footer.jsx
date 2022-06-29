import React from "react";
const date = new Date();

function Footer() {
  return (
    <footer>
      <p>copyright {date.getFullYear()} </p>
    </footer>
  );
}

export default Footer;

import React from "react";
const date = new Date();

function Note() {
  return (
<footer>
    <p>copyright {date.getFullYear()} </p>
</footer>
  );
}

export default Note;
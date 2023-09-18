import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Lovely Women"
      img="https://images.unsplash.com/photo-1694675856558-bc858408e60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      tel="+123 456 789"
      email="b@baby.com"
    />
    <Card
      name="Street Reader"
      img="https://images.unsplash.com/photo-1693923108808-92b746cf66e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      tel="+88 326 5934"
      email="street@reader.com"
    />
    <Card
      name="Train Traveller"
      img="https://images.unsplash.com/photo-1693129429390-74d619c3da60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      tel="+44 789 321 5467"
      email="train@traveller.com"
    />
  </div>,
  document.getElementById("root")
);

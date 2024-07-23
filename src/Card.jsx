import avatar from "./assets/avatar.jpg";

export default function Card() {
  return (
    <div className="card">
      <img alt="avatar" src={avatar} className="card-img"></img>
      <h2 className="card-title">Shwarma</h2>
      <p className="card-text">I love computer science</p>
    </div>
  );
}

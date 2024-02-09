import ProfileCard from "../components/profileCard"
export default function Gallery() {
  return (
    <div>
      <ProfileCard scientist = {{"source": "https://i.imgur.com/YfeOqp2s.jpg", "alt": "Katsuko Saruhashi" }} size = {{width : 70, height: 100}} />
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

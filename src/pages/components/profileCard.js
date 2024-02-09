 export default function ProfileCard({scientist,size}){
    return (<section className="profile">
    <h2>{scientist.alt}</h2>
    <img
      className="avatar"
      src= {scientist.source}
      alt={scientist.alt}
      width={size.width}
      height={size.height}
    />
    <l>
   <li>
        <b>Profession: </b>
        physicist and chemist
      </li>
      <li>
        <b>Awards: 4 </b>
        (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
      </li>
      <li>
        <b>Discovered: </b>
        polonium (element)
      </li>
    </l>
  </section>)
}
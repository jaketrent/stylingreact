export default props =>
  <div className="sectionBody">
    <p className="sectionParagraph">
      Run! Yes. A Jedi's strength flows from the Force. But beware of the dark
      side. Anger...fear...aggression. The dark side of the Force are they.
      Easily they flow, quick to join you in a fight. Vader. Is the dark side
      stronger? No...no...no. But how am I to know the good side from the bad?
      You will know. But tell me why I can't... No, no, there is no why.
    </p>
    <img className="sectionPicture" src={props.src} />
    <style jsx>{`
      .sectionParagraph {
      }
      .sectionPicture {
        width: 100%;
        height: 100%;
      }
      .sectionBody {
        padding-left: 14%;
      }
    `}</style>
  </div>

export default props =>
  <div className="sectionBody">
    <p className="sectionParagraph">
      {props.children}
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

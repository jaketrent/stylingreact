export default props =>
  <div className="sectionBody">
    <p>
      {props.children}
    </p>
    <img className="sectionPicture" src={props.src} />
    <style jsx>{`
      .sectionPicture {
        width: 100%;
        height: 100%;
      }
      @media screen and (min-width: 769px) {
        .sectionBody {
          padding-left: 80px;
        }
      }
    `}</style>
  </div>

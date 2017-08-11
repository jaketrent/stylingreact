export default props =>
  <div className="sectionHeader">
    <img className="icon" src={props.src} />
    <h2>
      {props.children}
    </h2>
    <style jsx>{`
      .icon {
        width: 8ch;
        height: auto;
        padding-right: 20px;
      }
      .sectionHeader {
        display: flex;
        align-items: center;
        padding: 8ch 0 0 0;
      }
      h2 {
      }
    `}</style>
  </div>

export default props =>
  <div className="section">
    {props.children}
    <style jsx>{`
      .section {
        max-width: 550px;
      }
      @media screen and (min-width: 769px) {
        .section {
          max-width: 50%;
        }
      }
      @media screen and (min-width: 1441px) {
      }
    `}</style>
  </div>

export default props =>
  <div className="section">
    {props.children}
    <style jsx>{`
      .section {
        max-width: 550px;
        padding: 35px 10px 30px 10px;
      }
      @media screen and (min-width: 769px) {
        .section {
          max-width: 50%;
        }
      }
    `}</style>
  </div>

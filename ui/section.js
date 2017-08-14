export default props =>
  <div className="section">
    {props.children}
    <style jsx>{`
      .section {
        max-width: 540px;
      }
    `}</style>
  </div>

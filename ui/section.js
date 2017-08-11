export default props =>
  <div className="section">
    {props.children}
    <style jsx>{`
      .section {
        max-width: 500px;
      }
    `}</style>
  </div>

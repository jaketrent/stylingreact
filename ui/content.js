export default props =>
  <div className="content">
    {props.children}
    <style jsx>{`
      .content {
        max-width: 1200px;
        margin: auto;
        padding: 20px;
      }
    `}</style>
  </div>

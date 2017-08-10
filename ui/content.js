export default props =>
  <div className="content">
    {props.children}
    <style jsx>{`
      @media screen and (min-width: 1200px) {
        .content {
          width: 1200px;
          margin: auto;
        }
      }
    `}</style>
  </div>

export default props =>
  <div className="main">
    {props.children}
    <style jsx>{`
      .main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
      }
    `}</style>
  </div>

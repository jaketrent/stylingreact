export default props =>
  <div className="header">
    <div className="icon">
      {props.icon}
    </div>
    <h2 className="title">
      {props.children}
    </h2>
    <style jsx>{`
      .icon {
        width: 80px;
        padding-right: 20px;
      }
      .icon :global(svg) {
        fill: #61dafb;
      }
      .header {
        display: flex;
        align-items: center;
        font-size: 1.5em;
      }
      .title {
        text-transform: uppercase;
      }
      @media screen and (min-width: 769px) {
        .header {
          font-size: 1.125em;
        }
      }
    `}</style>
  </div>

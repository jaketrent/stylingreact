export default props =>
  <div className="sectionHeader">
    <div className="icon">
      {props.icon}
    </div>
    <h2>
      {props.children}
    </h2>
    <style jsx>{`
      .icon {
        width: 14%;
        height: auto;
        padding-right: 20px;
      }
      .icon :global(svg) {
        fill: #61dafb;
        stroke: #61dafb;
      }
      .sectionHeader {
        display: flex;
        align-items: center;
      }
      h2 {
        text-transform: uppercase;
      }
    `}</style>
  </div>

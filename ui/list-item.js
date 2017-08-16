export default props =>
  <div className="listItem">
    <a className="name">
      {props.name}
    </a>
    <p className="time">
      {props.time}
    </p>
    <style jsx>{`
      .listItem {
        display: flex;
        justify-content: space-between;
        margin: .8em 0;
      }
      .time {
        margin: 0;
      }
     
    }
    `}</style>
  </div>

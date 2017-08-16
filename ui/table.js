import ListItem from './list-item'

export default _ =>
  <div className="table">
    <ListItem name="UIs in React" time="7:37" />
    <ListItem name="Inline Styles" time="24:38" />
    <ListItem name="Radium" time="13:13" />
    <ListItem name="A Webpack Intro for CSS" time="8:29" />
    <ListItem name="CSS Stylesheet" time="13:37" />
    <ListItem name="CSS Modules" time="20:26" />
    <div className="totalContainer">
      <p className="total">Total Time</p>
      <p className="time">1h 29m</p>
    </div>
    <style jsx>{`
      .totalContainer {
        display: flex;
        justify-content: flex-end;
        margin: 2em 0 0 0;
      }
      .total {
        margin: 0 1em 0 0;
      }
      .time {
        margin: 0 0 0 2em;
      }
    `}</style>
  </div>

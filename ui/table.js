import ListItem from './list-item'

export default _ =>
  <div className="table">
    <ListItem name="UIs in React" time="7:37" link="http://bit.ly/2we5kZa" />
    <ListItem name="Inline Styles" time="24:38" link="http://bit.ly/2uMwHcp" />
    <ListItem name="Radium" time="13:13" link="http://bit.ly/2x8klYK" />
    <ListItem
      name="A Webpack Intro for CSS"
      time="8:29"
      link="http://bit.ly/2uMvxxF"
    />
    <ListItem name="CSS Stylesheet" time="13:37" link="http://bit.ly/2wTnnAV" />
    <ListItem name="CSS Modules" time="20:26" link="http://bit.ly/2i9cl7e" />
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

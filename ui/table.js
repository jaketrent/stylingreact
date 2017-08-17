import ListItem from './list-item'

export default _ =>
  <div className="table">
    <ListItem
      name="UIs in React"
      time="7:37"
      link="https://app.pluralsight.com/player?name=react-styling-components-m0&mode=live&clip=0&course=react-styling-components&author=jake-trent"
    />
    <ListItem
      name="Inline Styles"
      time="24:38"
      link="https://app.pluralsight.com/player?name=react-styling-components-m0&mode=live&clip=0&course=react-styling-components&author=jake-trent"
    />
    <ListItem
      name="Radium"
      time="13:13"
      link="https://app.pluralsight.com/player?name=react-styling-components-m0&mode=live&clip=0&course=react-styling-components&author=jake-trent"
    />
    <ListItem
      name="A Webpack Intro for CSS"
      time="8:29"
      link="https://app.pluralsight.com/player?name=react-styling-components-m0&mode=live&clip=0&course=react-styling-components&author=jake-trent"
    />
    <ListItem
      name="CSS Stylesheet"
      time="13:37"
      link="https://app.pluralsight.com/player?name=react-styling-components-m0&mode=live&clip=0&course=react-styling-components&author=jake-trent"
    />
    <ListItem
      name="CSS Modules"
      time="20:26"
      link="https://app.pluralsight.com/player?name=react-styling-components-m0&mode=live&clip=0&course=react-styling-components&author=jake-trent"
    />
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

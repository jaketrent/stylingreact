export default _ =>
  <div className="trial">
    <div className="button">
      <a
        className="signUpLink"
        href="https://www.pluralsight.com/courses/react-styling-components"
      >
        Try Pluralsight
      </a>
    </div>
    <p className="caption">free for 10 days</p>
    <style jsx>{`
      .signUpLink {
        border-bottom: none;
        border-radius: 3px;
        background-color: #61dafb;
        padding: 1em 1.7em;
        font-size: 1.2em;
        text-transform: uppercase;
        text-shadow: -3px -1px 6px black;
        box-shadow: -5px -5px 4px black;
      }
      .signUpLink:hover {
        background-color: #4ed6fb;
        color: #f5f5f5;
        text-shadow: -1.5px -1px 6px black;
        box-shadow: none;
      }
      .caption {
        margin: 0;
        text-align: center;
      }
    `}</style>
  </div>

export default _ =>
  <div className="trial">
    <div className="container">
      <a
        className="link"
        href="https://www.pluralsight.com/courses/react-styling-components"
      >
        Try Pluralsight
      </a>
      <p className="caption">free for 10 days</p>
    </div>
    <style jsx>{`
      .container {
        display: inline-block;
        overflow: hidden;
        max-width: 100%;
      }
      .link {
        text-overflow: hidden;
        border-bottom: none;
        border-radius: 3px;
        background-color: #61dafb;
        padding: 1em 1.75em;
        width: 100%;
        font-size: 1.25em;
        text-transform: uppercase;
        text-shadow: -1px -1px 0 blue;
        font-family: 'Libre Franklin', sans-serif;
        margin: 0 auto;
        white-space: nowrap;
      }
      .link:hover {
        background-color: #4ed6fb;
        color: #f5f5f5;
      }
      .caption {
        margin: 0.675em;
        text-align: center;
        font-size: 0.675em;
      }
    `}</style>
  </div>

export default props =>
  <div className="course">
    <h2 className="heading">The course</h2>
    <p>
      This course takes a project-based approach in trying out several of the
      most popular and promising approaches to styling React components. We
      start with a small UI project that is fully implemented in React and
      discover how it feels to try out each one of these approaches to layer on
      some sweet styles.
    </p>
    <p>
      You'll also get some great background on styling in web components. And
      there's a short, gentle introduction to how to handle the basics of CSS
      inside of Webpack.
    </p>
    <style jsx>{`
      .heading {
        text-transform: uppercase;
      }
    `}</style>
  </div>

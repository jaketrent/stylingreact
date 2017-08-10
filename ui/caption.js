export default _ =>
  <div className="caption">
    <p>A comparison of CSS approaches in React</p>
    <style jsx>
      {' '}{`
        .caption {
          text-align: center;
          font-size: 1.3em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        p {
          margin: 0;
        }
        @media screen and (min-width: 1441px) {
          .caption {
            font-size: 1em;
          }
        }
      `}{' '}
    </style>
  </div>

export default _ =>
  <style global jsx>{`
    * {
      box-sizing: border-box;
    }
    html,
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
       {
        /* background-color: #2c3038; */
      }
      background: linear-gradient(120deg, #2c3038, #191b1f);
      background-attachment: fixed;
      color: #fff;
      font-size: 16px;
    }
    h1,
    h2,
    h3 {
      font-weight: 700;
      margin: 0;
      font-family: 'Libre Franklin', sans-serif;
    }
    a {
      display: inline-block;
      color: #fff;
      text-decoration: none;
      border-bottom: 1px solid #0f6402;
      margin-bottom: 2px;
      cursor: pointer;
    }
    a:hover {
      color: #0f6402;
    }
    ol {
      margin: 0;
      padding: 0;
    }
    p {
      line-height: 30px;
    }
    iframe {
      max-width: 100%;
    }
    @media screen and (min-width: 426px) {
    }
    @media screen and (min-width: 769px) {
      html,
      body {
        font-size: 22px;
      }
    }
    @media screen and (min-width: 1441px) {
      html,
      body {
        font-size: 24px;
      }
    }
  `}</style>

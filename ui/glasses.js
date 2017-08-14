export default _ =>
  <div className="glasses">
    <img className="glassesImg" src="/static/img/glasses.png" />
    <style jsx>{`
      .glasses {
        position: absolute;
        width: auto;
        height: auto;
        z-index: 1;
        margin: 18% 20vw 18% 20vw;
      }
      .glassesImg {
        width: 100%;
      }
      @media screen and (min-width: 650px) {
        .glasses {
          margin: 30% 0 0 0;
        }
      }
      @media screen and (min-width: 1024px) {
        .title {
          font-size: 3.7em;
        }
      }
    `}</style>
  </div>

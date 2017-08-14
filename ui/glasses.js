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
        animation-name: bounceDown;
        animation-duration: 5s;
      }
      @keyframes bounceDown {
        0% {
          transform: translate3d(-150px, -500px, 0);
        }
        70% {
          transform: translate3d(0, 0, 0);
        }
        84% {
          transform: translate3d(0, -10px, 0);
        }
        100% {
          transform: translate3d(0, 0, 0);
        }
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

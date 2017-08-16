export default _ =>
  <div className="glasses">
    <img className="glassesImg" src="/static/img/glasses.png" />
    <style jsx>{`
      .glasses {
        position: absolute;
        z-index: 1;
        margin: 18% 20vw 18% 20vw;
      }
      .glassesImg {
        width: 100%;
        animation: fall 5s 1s;
      }
      @keyframes fall {
        0% {
          transform: translate3d(0, -500px, 0);
        }
        70% {
          transform: translate3d(0, 0, 0);
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

export default props =>
  <div className="listItem">
    <a className="name">
      {props.name}
    </a>
    <p className="time">
      {props.time}
    </p>
    <style jsx>{`
        .listItem {
            display: flex;
            justify-content: space-between;
            margin: 1em 0;

        }
        .name {
            border-bottom: 1px solid #61dafb;
            margin-right: 2.2em;
        }
        .time {
            margin: 0;
        }
        @media screen and (min-width: 426px) {
            .name {
                margin-right: 4.5em;
            }
        }
        @media screen and (min-width: 769px) {
            .name {
                margin-right: 2em;
            }
        }
        }
        @media screen and (min-width: 1441px) {
            .name {
                margin-right: 6em;
            }
        }
    }
    `}</style>
  </div>

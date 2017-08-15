export default props =>
  <div className="video">
    <iframe
      className="frame"
      width={props.width}
      height={props.height}
      src={props.src}
      frameBorder="0"
      allowFullScreen
    />
    <style jsx>{`
      .video {
        width: 100%;
        height: 100%;
      }
      .frame {
        height: 100%;
        width: 100%;
      }
    `}</style>
  </div>

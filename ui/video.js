export default props =>
  <div className="video">
    <iframe
      width={props.width}
      height={props.height}
      src={props.src}
      frameborder="0"
      allowfullscreen
    />
    <style jsx>{``}</style>
  </div>

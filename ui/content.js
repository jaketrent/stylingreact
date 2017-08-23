import GaWrapper from './ga-wrapper'
export const padding = '20px'
const Content = props => {
  return (
    <div className="content">
      {props.children}
      <style jsx>{`
        .content {
          max-width: 1200px;
          margin: auto;
          padding: ${padding};
        }
      `}</style>
    </div>
  )
}

export default GaWrapper(Content)

function LoadingSpinner() {
  return (
    <div className="spinner-border text-danger loading-spinner" style={{height:"4rem", width:"4rem"}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
  )
}

export default LoadingSpinner

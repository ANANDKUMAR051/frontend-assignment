function ScrollProgress({ progress }) {
  return <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />;
}

export default ScrollProgress;

const LoadingScreen = ({loadingState}) => {
  return (
    <div className={`fixed top-0 left-0 w-[100vw] h-[100vh] grid place-content-center ${loadingState === false && 'animate-fadeOut '}`}>
     <div className="loader"></div>
    </div>
  )
}

export default LoadingScreen
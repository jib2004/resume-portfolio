const LoadingScreen = ({loadingState}) => {
  return (
    <div className={`fixed top-0 left-0 w-[100vw] h-[100vh] grid place-content-center ${loadingState === false && ' transform transition-transform translate-x-[1000px] duration-[3s] '} `}>
     <div className="loader"></div>
    </div>
  )
}

export default LoadingScreen
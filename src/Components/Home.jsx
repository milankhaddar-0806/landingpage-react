import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-white" data-aos="slide-right">MERN Stack Developer</h3>
            <div className="h-50">
              <dotlottie-player
                src="https://lottie.host/33336071-9467-42e1-a55d-50f03a8fe5e8/uXIQBrfRbL.json"
                background="transparent"
                speed="1"
                direction="1"
                playMode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
          <div className="part2 d-flex flex-column justify-content-center align-items-center">
            <div className="h-50">
              <dotlottie-player
                src="https://lottie.host/f6dfee06-06aa-438d-bae0-b85e18e4e08a/7gpDUKF3Hi.json"
                background="transparent"
                speed="1"
                direction="1"
                playMode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
              <h3 className="text-white mt-4" data-aos="slide-left">PROGRAMMER</h3>
          </div>
        </div>
        <div className="seprator-text">
            <span>PARADOX</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

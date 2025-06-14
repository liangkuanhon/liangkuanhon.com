import './Error.css';

const Error = () => {
  return (
    <div className="image-hover-wrapper">
      {/* Halves */}
      <img src="/images/nestcart.png" className="half left" alt="Left Half A" />
      <img src="/images/luminova.png" className="half right" alt="Right Half B" />

      {/* Hover zones */}
      <div className="hover-zone left-zone"></div>
      <div className="hover-zone right-zone"></div>

      {/* Full images */}
      <img src="/images/nestcart.png" className="full-image full-a" alt="Full A" />
      <img src="/images/luminova.png" className="full-image full-b" alt="Full B" />
    </div>
  );
};

export default Error;


import './GradientColor.css';

const GradientColor = (props) => {
  return (
    <div 
      className="glowing-element" 
      style={{
        top: props.top,
        right: props.pos === 'right' ? "-40px" : 'auto',
        left: props.pos === 'left' ? "-200px": 'auto'
      }}
    ></div>
  );
};

export default GradientColor;
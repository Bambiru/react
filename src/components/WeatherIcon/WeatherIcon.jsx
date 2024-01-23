import './WeatherIcon.css';

// props {
// type: '구름 조금' | '맑음' | '천둥' | '비' | '미세먼지'
// type:  'partly cloudy' | 'sunny' | 'lightning' | 'rainy' | 'fine dust'
//}
function WeatherIcon(props) {
  const label = '';
  const type = props.type.replace(/\s+/g, '-');
  const imageSource = `/images/weather-${type}.svg`;

  return <img src={imageSource} alt={label} title={label} />;
}
export default WeatherIcon;

import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './Widget.css';

/* // 내가만든거
function Widget(props) {
  console.log(props);
  return (
    <article className="widget widget__weather">
      <h2 className="sr-only">날씨</h2>
      <img
        src={`/images/${props.images}.svg`}
        alt={props.alt}
        title={props.alt}
      />
      <div className="weather__info" role="group">
        <span className="weather__info--template">-0.9°</span>
        <span className="weather__info--description">어제보다 1.3° 낮아요</span>
      </div>
    </article>
  );
}

export default Widget; */

// 야무쌤
function Widget(props) {
  return (
    <article className="widget widget__weather">
      <h2 className="sr-only">{props.location} 날씨</h2>
      <WeatherIcon type={props.type} />
      <div className="weather__info" role="group">
        <span className="weather__info--template">{props.temperature}°</span>
        <span className="weather__info--description">{props.summary}</span>
      </div>
    </article>
  );
}
export default Widget;

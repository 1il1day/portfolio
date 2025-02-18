import styled from 'styled-components';
import IconImage from '../common/IconImage';
import { useEffect, useState } from 'react';

export default function WeatherWidget() {
  const [weatherIcon, setWeatherIcon] = useState('');
  const [locationName, setLocationName] = useState('Seoul');
  const [weatherTemp, setWeatherTemp] = useState('0°');
  const [weatherDesc, setWeatherDesc] = useState('맑음');

  // 위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        
        getWeather(lat, lon);
      },
      (error) => {
        console.error("위치 정보를 가져올 수 없습니다:", error.message);
        alert("위치 정보를 허용해주세요!")
      }
    )
  }

  // openweathermap api로 날씨 가져오기
  const getWeather= async (lat:number, lon:number)=>{
    const API_KEY = process.env.REACT_APP_WEATHER_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    
    try{
      let response = await fetch(url)
      let data = await response.json();
      const locationName = data.name;
      const weatherTemp = `${Math.trunc(data.main.temp)}°`;
      const weatherIcon = data.weather[0].icon;
      const weatherDesc = data.weather[0].description;
      const wetherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`

      setWeatherIcon(wetherIconUrl);
      setWeatherTemp(weatherTemp);
      setLocationName(locationName);
      setWeatherDesc(weatherDesc);
    } catch (error) {
      console.error("날씨 정보 가져오기 실패:", error);
    }
  }

  useEffect(()=>{
    getCurrentLocation();
  },[]);
  

  return (
    <WeatherWidgetWrap>
      <WeatherInner>
        <div>
          <WeatherTitle>{locationName}</WeatherTitle>
          <WeatherDegrees>{weatherTemp}</WeatherDegrees>
        </div>
        <div>
          <IconImageWrap>
            <IconImage imgUrl={weatherIcon} size={28}/>
          </IconImageWrap>
          <WeatherDescription>{weatherDesc}</WeatherDescription>
        </div>
      </WeatherInner>
    </WeatherWidgetWrap>
  )
}

const WeatherWidgetWrap = styled.article`
  width: 100%;
  height: 180px;
  border-radius: 18px;
  background-color: #499DC4;
  color: #fff;
`;
const WeatherInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - (16px * 2));
  max-height: 180px;
  padding: 16px 20px;
`;
const WeatherTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;
const WeatherDegrees = styled.p`
  font-size: 46px;
  font-weight: 300;
  line-height: 1.2;
`;
const WeatherDescription = styled.p`
  margin-top: 4px;
  font-size: 14px;
`;
const IconImageWrap = styled.div`
  -webkit-filter: brightness(0) invert(1); 
  filter: brightness(0) invert(1);
`;
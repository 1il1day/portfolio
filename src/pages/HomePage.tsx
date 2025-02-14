import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { theme } from '../theme';
import MobileHeader from '../components/layout/MobileHeader';
import DateTimeWidget from '../components/widgets/DateTimeWidget';
import WeatherWidget from '../components/widgets/WeatherWidget';
import BatteryWidget from '../components/widgets/BatteryWidget';
import AppIcon from '../components/widgets/AppIcon';
import MusicPlayer from '../components/widgets/MusicPlayer';
import NavigationBar from '../components/layout/NavigationBar';


export default function HomePage () {
  const isPc = useMediaQuery({
    query : "(min-width:769px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });

  const AppList = [
    { imgUrl: '/images/app_weather.svg', appTitle: '캘린더' },
    { imgUrl: '/images/app_weather.svg', appTitle: '시계' },
    { imgUrl: '/images/app_weather.svg', appTitle: '날씨' },
    { imgUrl: '/images/app_gallery.svg', appTitle: '갤러리' },
    { imgUrl: '/images/app_piano.svg', appTitle: '피아노' },
    { imgUrl: '/images/app_setting.svg', appTitle: '설정' },
  ];

  return (
    <PageContainer>
      {isMobile && <MobileHeader />}
      <AppContainer>
        {/* 날짜 및 시간 */}
        <DateTimeWidget />

        <WidgetContainer>
          {/* 날씨 */}
          <WeatherWidget />
          {/* 음악 플레이어 */}
          <MusicPlayer />
        </WidgetContainer>

        {/* 앱 */}
        <AppWrap>
          {AppList.map((item, index)=>(
            <AppIcon key={index} imgUrl={item.imgUrl} appTitle={item.appTitle}/>
          ))}
        </AppWrap>

        {/* 배터리 */}
        <BatteryWidget />

        {/* 하단바 */}
        <NavigationBar />
      </AppContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: block;
  background-image: url(/images/bg_3x.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 0 ${theme.defaultPadding};
  min-height: 100vh;
`;

const AppContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 190px;
  /* max-width: 1200px;
  margin: auto; */
`;
const WidgetContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 60px;
`;
const AppWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-content: center;
  justify-content: center;
  gap: 24px 40px;
  padding: 60px 0;
  @media (min-width: 376px) {
    grid-template-columns: repeat(4,1fr);
  }
`;
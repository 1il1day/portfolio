import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { theme } from '../theme';
import MobileHeader from '../components/layout/MobileHeader';
import DateTimeWidget from '../components/widgets/DateTimeWidget';
import WeatherWidget from '../components/widgets/WeatherWidget';
import BatteryWidget from '../components/widgets/BatteryWidget';
import AppIcon from '../components/widgets/AppIcon';
import MusicPlayer from '../components/widgets/MusicPlayer';
import NavBar from '../components/layout/NavBar';
import MemoWidget from '../components/widgets/MemoWidget';
import { useState } from 'react';
import TodayAppIcon from '../components/widgets/TodayAppIcon';
import Modal from '../components/common/Modal'
import { memoCareerData, memoCertificatesData, memoProfileData } from '../data/data';


export default function HomePage () {
  const [showMemo, setShowMemo] = useState(true);
  const [clickWeatherApp, setClickWeatherApp] = useState(false);
  const [clickMusicApp, setClickMusicApp] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });

  // App 클릭 이벤트
  const onClickWeatherApp = () => {
    setClickWeatherApp(false);
    setTimeout(() => setClickWeatherApp(true), 10);
  }
  const onClickMusicApp = () => {
    setClickMusicApp(false);
    setTimeout(() => setClickMusicApp(true), 10);
  }

  // Modal 버튼 클릭 이벤트
  const onClickSettingApp = () => {
    setModalOpen(true);
  }

  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {isMobile && <MobileHeader />}
      <PageContainer>
        <AppContainer>
          <ContainerInner>
            <WidgetAppWrap>
              <div>
                {/* 날짜 및 시간 */}
                <DateTimeWidget />

                <WidgetContainer>
                  {/* 날씨 */}
                  <EventAni className={clickWeatherApp ? 'shake-anim' : ''}>
                    <WeatherWidget/>
                  </EventAni>
                  {/* 음악 플레이어 */}
                  <EventAni className={clickMusicApp ? 'shake-anim' : ''}>
                    <MusicPlayer />
                  </EventAni>
                </WidgetContainer>
                {/* 배터리 */}
                <BatteryWidget />
              </div>

              <div>
                {/* 앱 */}
                <AppWrap>
                  <TodayAppIcon appTitle="캘린더" type="date"/>
                  <TodayAppIcon appTitle="시계" type="time"/>
                  <AppIcon appTitle="날씨" imgUrl={`${process.env.PUBLIC_URL}/images/app_weather.svg`} onClick={onClickWeatherApp}/>
                  <AppIcon appTitle="음악" imgUrl={`${process.env.PUBLIC_URL}/images/app_music.svg`} onClick={onClickMusicApp}/>
                  {/* <AppIcon appTitle="갤러리" imgUrl={`${process.env.PUBLIC_URL}/images/app_gallery.svg`} /> */}
                  {/* <AppIcon appTitle="피아노" imgUrl={`${process.env.PUBLIC_URL}/images/app_piano.svg`}  /> */}
                  <AppIcon appTitle="설정" imgUrl={`${process.env.PUBLIC_URL}/images/app_setting.svg`} onClick={onClickSettingApp}/>
                </AppWrap>
              </div>
            </WidgetAppWrap>
            
            {modalOpen &&
              <Modal title="디자인 소스 출처" onClose={() => setModalOpen(false)} contents={
                <SourceModalInner>
                  <div>
                    <h3>[아이콘]</h3>
                    <ul>
                      {/* <li>피아노 아이콘 제작자: Flat Icons - Flaticon</li> */}
                      <li>Triangle icons created by nawicon - Flaticon</li>
                      <li>Music control icons created by nawicon - Flaticon</li>
                      <li>Fast forward icons created by nawicon - Flaticon</li>
                      <li>Rewind icons created by nawicon - Flaticon</li>
                      <li>Heart icons created by Vlad Szirka - Flaticon</li>
                      <li>설정 아이콘 제작자: Stockio - Flaticon</li>
                      <li>정보 아이콘 제작자: Stockio - Flaticon</li>
                    </ul>
                  </div>
                  <div>
                    <h3>[음원]</h3>
                    <ul>
                      <li>
                        title : Did you know
                        authr : 김재성
                        by site : <a href="https://gongu.copyright.or.kr/gongu/main/main.do">공유마당 저작권 위원회</a>
                        is licensed under
                      </li>
                    </ul> 
                  </div>
                </SourceModalInner>
              }/>
            }
            
            <MemoWidgetContainer className={showMemo ? 'active' : ''}>
              <MemoWidgetWrap>
                <MemoWidget title="프로필" contents={
                  <MemoListWrap>
                    {memoProfileData.map((item,index)=>(
                      <MemoList key={index}>
                        <MemoTitle>{item.title}.</MemoTitle>
                        {item.description && <MemoDescription>{item.description}</MemoDescription>}
                        {item.link && <MemoLink href={item.link} target="_blank">{item.link}</MemoLink>}
                      </MemoList>
                    ))}
                  </MemoListWrap>
                }/>
                <MemoWidget title="경력" contents={
                  <MemoListWrap>
                    {memoCareerData.map((item,index)=>(
                      <MemoList key={index}>
                        <MemoTitle>{item.title}</MemoTitle>
                        <MemoDescription>{item.description}</MemoDescription>
                      </MemoList>
                    ))}
                  </MemoListWrap>
                }/>
                <MemoWidget title="자격증" contents={
                  <MemoListWrap>
                    {memoCertificatesData.map((item,index)=>(
                      <MemoList key={index}>
                        <input id={`certificate-${index+1}`} type="checkbox" name={item.title} value={item.title} defaultChecked/>
                        <CheckboxTextWrap>
                          <label htmlFor={`certificate-${index+1}`}>{item.title}</label>
                          <span>{item.date}</span>
                        </CheckboxTextWrap>
                      </MemoList>
                    ))}
                  </MemoListWrap>
                }/>
              </MemoWidgetWrap>
            </MemoWidgetContainer>
          </ContainerInner>

          {/* 하단바 */}
          <NavBar toggleMemo={() => setShowMemo(prev => !prev)} isActive={showMemo}/>
        </AppContainer>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  position: relative;
  display: block;
  min-height: 100vh;
  padding: 0 ${theme.mobilePadding};
  background-image: url(${process.env.PUBLIC_URL}/images/bg_3x.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 769px) {
    padding: 0 ${theme.pcPadding};
    background-image: url(${process.env.PUBLIC_URL}/images/bg.jpg);
  }
`;
const AppContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 190px;
  max-width: 1600px;
  margin: auto;
  @media (min-width: 1201px) {
    padding-bottom: 40px;
  }
`;
const WidgetAppWrap = styled.div`
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
  }
`;
const ContainerInner = styled.div`
  @media (min-width: 1201px) {
    display: grid;
    grid-template-columns: 1fr calc(600 / 1920 * 100%);
  }
`;
const MemoWidgetContainer = styled.div`
  display: none;
  transition: all .2s;
  opacity: 0;
  @media (min-width: 1201px) {
    display: block;
    transform: scale(0);
    transform-origin: bottom left;
  }
  &.active{
    display: block;
    opacity: 1;
    @media (min-width: 1201px) {
      transform: scale(1);
    }
  }
`;
const MemoWidgetWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 15px;
  @media (min-width: 769px) {
    grid-template-columns: repeat(2,1fr);
    margin-top: 60px;
  }
  @media (min-width: 1201px) {
    grid-template-columns: repeat(1,1fr);
    justify-items: end;
    margin-top: 0;
  }
`;
const WidgetContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 60px;
  margin-bottom: 15px;
  @media (min-width: 769px) {
    max-width: 416px;
    gap: 16px;
    margin: 50px 0;
  }
  `;
const EventAni = styled.div`
  flex: 1;
  &.shake-anim{
    animation: shake 0.3s ease-in-out;
  }
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
`;
const MemoListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 28px;
  margin-bottom: 20px;
`;
const MemoList = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  input[type="checkbox"]{
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 26px;
    height: 26px;
    margin: 0;
    background-image: url(${process.env.PUBLIC_URL}/images/icon/checkbox_off.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    border-radius: 4px;
    cursor: pointer;
    &:checked{
      background-image: url(${process.env.PUBLIC_URL}/images/icon/checkbox_on.svg);
    }
  }
`;
const CheckboxTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  span{
    color: #888C8F;
  }
`;
const MemoTitle = styled.em`
  width: 70px;
  color: #999;
`;
const MemoDescription = styled.strong``;
const MemoLink = styled.a``;
const AppWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-content: center;
  justify-items: center;
  gap: 24px 40px;
  margin: auto;
  padding: 60px 0;
  @media (min-width: 376px) {
    grid-template-columns: repeat(4,1fr);
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3,1fr);
  }
`;
const SourceModalInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  a{
    color: #0F5AB4;
  }
`;
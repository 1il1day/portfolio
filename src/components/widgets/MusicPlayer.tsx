import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import IconImage from '../common/IconImage';

type Props = {}

const musicList = [
  {
    num: 1,
    title: 'Did you know',
    singer: '음악',
    src: `${process.env.PUBLIC_URL}/audio/01_Did_you_know.mp3`
  }
];

export default function MusicPlayer({}: Props) {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(()=>{
    // 좋아요 상태
    if(localStorage.getItem("like")){
      setLike(true);
    }

    // 오디오 생성
    audioRef.current = new Audio(`${musicList[0]?.src}`);
    audioRef.current.volume = 0.2;
    audioRef.current.loop = true;

    // 오디오 프로그레스바 상태 업데이트
    audioRef.current.ontimeupdate = () => {
      if(audioRef.current){
        const duration = audioRef.current?.duration;
        const currentTime = audioRef.current?.currentTime;
        const progress = (currentTime / duration) * 100;

        setProgress(progress);
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlay(false);
      }
    }
  },[])

  // 좋아요 버튼
  const onClickLikeButton = () => {
    setLike((prev) => !prev);
    if(!like){
      localStorage.setItem("like","true");
    }else{
      localStorage.removeItem("like");
    }
  }

  // 재생 버튼
  const onClickPlayButton = () => {
    if(!audioRef.current) return;
    setPlay((prev) => !prev);
    
    if(play){
      audioRef.current.pause();
    }else{
      audioRef.current.play();
    }
  }

  return (
    <MusicPlayerWrap>
      <MusicPlayerInner>
        <div>
          <MusicTitle>{musicList[0]?.title}</MusicTitle>
          <MusicSinger>{musicList[0]?.singer}</MusicSinger>
          <MusicLikeWrap>
            <div>
              <IconImage 
                imgUrl={`${process.env.PUBLIC_URL}/images/icon/${like ? "icon_heart_on.svg" : "icon_heart_off.svg"}`} 
                size={25} 
                onClick={onClickLikeButton}
              />
            </div>
          </MusicLikeWrap>
        </div>
        <ProgressBarIconWrap>
          <ProgressBarWrap>
            <ProgressBar style={{width: `${progress}%`}}></ProgressBar>
          </ProgressBarWrap>
          <PlayIconWrap>
            <IconImage imgUrl={`${process.env.PUBLIC_URL}/images/icon/icon_prev.svg`} size={28} disabled/>
            <IconImage 
              imgUrl={`${process.env.PUBLIC_URL}/images/icon/${play ? "icon_pause.svg" : "icon_play.svg"}`} 
              size={28} 
              onClick={onClickPlayButton}
            />
            <IconImage imgUrl={`${process.env.PUBLIC_URL}/images/icon/icon_next.svg`} size={28} disabled/>
          </PlayIconWrap>
        </ProgressBarIconWrap>
      </MusicPlayerInner>
    </MusicPlayerWrap>
  )
}

const MusicPlayerWrap = styled.article`
  flex: 1;
  width: 100%;
  height: 180px;
  border-radius: 18px;
  background-color: rgba(255,255,255,0.5);
  color: #fff;
`;
const MusicPlayerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - (20px * 2));
  max-height: 180px;
  padding: 20px;
`;
const MusicTitle = styled.strong`
  display: block;
  color: #222;
`;
const MusicSinger = styled.em`
  display: block;
  color: rgba(26,26,26,0.3);
`;
const MusicLikeWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  >div{
    cursor: pointer;
  }
`;
const ProgressBarIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
const ProgressBarWrap = styled.div`
  width: 100%;
  height: 6px;
  background-color: rgba(13,13,13,0.2);
  border-radius: 25px;
`;
const ProgressBar = styled.div`
  width: 0%;
  height: 100%;
  background-color: #1B0709;
  border-radius: 25px;
`;
const PlayIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  >div{
    cursor: pointer;
  }
`;
import { useEffect, useState } from 'react'
import styled from 'styled-components';

type Props = {
  size?: number;
  color?: string;
  type?: 'app' | 'text';
}

export default function CurrentTime({size = 18, color="#fff", type = 'text'}: Props) {
  // 현재 시각 구하기
  const getCurrentTime = () => {
    const today = new Date();
    const currentHours = today.getHours().toString().padStart(2, "0");
    const currentMinutes = today.getMinutes().toString().padStart(2, "0");

    return{
      hours: currentHours,
      minutes: currentMinutes,
    }
  }

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentTime(getCurrentTime());
    },1000)
    return () => clearInterval(interval); 
  },[])

  return (
    <>
      {type == 'text' &&
        <CurrentTimeWrap size={size} color={color}>{currentTime.hours}:{currentTime.minutes}</CurrentTimeWrap>
      }
      {type == 'app' &&
        <CurrentTimeWrap size={size} color={color}>
          <div>{currentTime.hours}</div>
          <div>{currentTime.minutes}</div>
        </CurrentTimeWrap>
      }
    </>
  )
}
const CurrentTimeWrap = styled.div<{size: number, color: string}>`
  font-size: ${(props)=>props.size}px;
  color: ${(props)=>props.color};
`;
import { useEffect, useState } from 'react'
import styled from 'styled-components';

type Props = {
  size?: number;
  color?: string;
  separator?: string;
}

export default function CurrentTime({size = 20, color="#fff", separator=":"}: Props) {
  // 현재 시간 구하기
  const getCurrentTime = () => {
    const today = new Date();
    const currentHours = today.getHours().toString().padStart(2, "0");
    const currentMinutes = today.getMinutes().toString().padStart(2, "0");

    return `${currentHours}${separator}${currentMinutes}`;
  }

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentTime(getCurrentTime());
    },1000)
    return () => clearInterval(interval); 
  },[])

  return (
    <CurrentTimeWrap size={size} color={color}>{currentTime}</CurrentTimeWrap>
  )
}
const CurrentTimeWrap = styled.div<{size: number, color: string}>`
  font-size: ${(props)=>props.size}px;
  color: ${(props)=>props.color};
`;
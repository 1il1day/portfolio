import { useEffect, useState } from 'react'
import styled from 'styled-components';

export default function CurrentDate() {
  // 현재 날짜 구하기
  const getToday = () => {
    const today = new Date();
    const todayMonth = today.getMonth()+1;
    const todayDate = today.getDate();

    const days = ["일","월","화","수","목","금","토"];
    const todayDay = days[today.getDay()];

    return{
      month: todayMonth,
      date: todayDate,
      day: todayDay,
    }
  }

  const [today, setToday] = useState(getToday());

  useEffect(()=>{
    const interval = setInterval(()=>{
      setToday(getToday());
    },1000)
    return () => clearInterval(interval); 
  },[])

  return (
    <CurrentDateWrap>{today.month}월 {today.date}일 {today.day}요일</CurrentDateWrap>
  )
}

const CurrentDateWrap = styled.div`
  font-size: 28px;
`;
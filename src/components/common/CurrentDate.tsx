import { useEffect, useState } from 'react'
import styled from 'styled-components';

type Props = {
  type?: 'app' | 'text';
};

export default function CurrentDate({type = 'text'}:Props) {
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
    <>
      {type == 'text' &&
        <CurrentDateWrap>{today.month}월 {today.date}일 {today.day}요일</CurrentDateWrap>
      }
      {type == 'app' &&
        <CurrentDateWrap>
          <AppTypeDay>{today.day}</AppTypeDay>
          <AppTypeDate>{today.date}</AppTypeDate>
        </CurrentDateWrap>
      }
    </>
  )
}

const CurrentDateWrap = styled.div`
  font-size: 22px;
  @media (min-width: 769px) {
    font-size: 28px;
  }
`;
const AppTypeDay = styled.span`
  display: block;
  margin-bottom: 2px;
  font-size: 16px;
  color: #FF0000;
`;
const AppTypeDate = styled.span`
  font-size: 38px;
`;
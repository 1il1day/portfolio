import styled, { css, keyframes } from 'styled-components';
import IconImage from '../common/IconImage';

type Props = {
  iconUrl?: string;
  progress: number;
  size?: number;
  stroke?: number;
}

export default function CircleProgressBar({progress, size = 64, stroke = 8, iconUrl=''}: Props) {
  const radius = (size / 2) - stroke / 2; // 원의 반지름
  const circumference = 2 * Math.PI * radius; // 원의 둘레

  return (
    <CircleProgressBarWrap>
      <ProgressBar progress={progress} size={size} stroke={stroke} circumference={circumference}>
        <svg className="progressbar__svg">
          <circle cx={size / 2} cy={size / 2} r={radius} className="progressbar__svg-circle-full" />
          <circle cx={size / 2} cy={size / 2} r={radius} className="progressbar__svg-circle circle-anim" />
        </svg>
        <ProgressBarInfoWrap className="progressbar-info-wrap">
          {iconUrl && <IconImage imgUrl={iconUrl} size={32}/>}
        </ProgressBarInfoWrap>
      </ProgressBar>
      <ProgressText>{progress}%</ProgressText>
    </CircleProgressBarWrap>
  )
}

const CircleProgressBarWrap = styled.article``;

const ProgressBar = styled.div<{ progress: number; size: number; stroke: number; circumference: number;}>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  transform: rotate(-90deg);
  .progressbar__svg {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .progressbar__svg-circle-full,
  .progressbar__svg-circle {
    fill: transparent;
    stroke-width: ${(props) => props.stroke}px;
    stroke-dashoffset:  ${(props) => props.circumference};
    stroke-linecap: round;
  }
  .progressbar__svg-circle-full {
    stroke-dasharray: 0;
    stroke: rgba(63, 63, 63, 0.3);
  }
  .progressbar__svg-circle {
    stroke-dasharray: ${(props) => props.circumference};
    stroke: #5EB652;
  }

  ${(props) => {
    const animCircle = keyframes`
      to {
        stroke-dashoffset: ${props.circumference * (1 - props.progress / 100)};
      }
    `;
    return css`
      .circle-anim {
        animation: ${animCircle} 1s ease-in-out forwards;
      }
    `;
  }}
`;
const ProgressBarInfoWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
`;
const ProgressText = styled.span`
  display: block;
  margin-top: 5px;
  text-align: center;
  font-size: 20px;
  color: #222;
`;
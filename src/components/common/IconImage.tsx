import styled from 'styled-components'

type Props = {
  imgUrl: string;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function IconImage({imgUrl, size=28, className, onClick, disabled=false}: Props) {
  return (
    <Icon
      className={`${className} ${disabled ? 'disabled' : ''}`}
      imgUrl={imgUrl}
      size={`${size}px`}
      onClick={onClick}
    />
  )
}

const Icon = styled.div<{imgUrl: string, size: string;}>`
  width: ${(props)=>props.size};
  height: ${(props)=>props.size};
  background-image: url(${(props)=>props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &.disabled{
    opacity: 0.3;
  }
`
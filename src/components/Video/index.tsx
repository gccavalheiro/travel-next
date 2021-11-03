import { useEffect, useRef, useState } from 'react'
import { Container } from 'components'

import * as S from './styles'

interface IVideoProps {
  title: string
  description?: string
  src: string
}

export const Video = ({ title, description, src, ...rest }: IVideoProps) => {
  const [playVideo, setPlayVideo] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handlePlayVideo = () => {
    videoRef?.current?.play()
    setPlayVideo(true)
  }

  const handlePauseVideo = () => {
    videoRef?.current?.pause()
    setPlayVideo(false)
  }

  function handleTogglePlay() {
    if (!playVideo) {
      handlePlayVideo()
    } else {
      handlePauseVideo()
    }
  }

  useEffect(() => {
    function handleEnded() {
      handlePauseVideo()
    }

    videoRef.current?.addEventListener('ended', handleEnded)

    return () => {
      videoRef.current?.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <S.Section className="section" id="video" {...rest}>
      <Container>
        <S.Container>
          <S.Content>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.Content>
          <S.VideoContent>
            <S.VideoFile ref={videoRef}>
              <S.VideoSource src={src} type="video/mp4" />
            </S.VideoFile>

            <S.VideoButton dFlex onClick={handleTogglePlay}>
              {playVideo ? (
                <S.VideoIcon className="ri-pause-line" />
              ) : (
                <S.VideoIcon className="ri-play-line" />
              )}
            </S.VideoButton>
          </S.VideoContent>
        </S.Container>
      </Container>
    </S.Section>
  )
}

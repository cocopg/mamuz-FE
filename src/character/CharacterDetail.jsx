import 'src/character/characterDetail.css'

import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import {
  IoChevronBack,
  IoHomeOutline,
  IoBookmarkOutline,
  IoBookmark,
} from 'react-icons/io5'

const images = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200',
]

function CharacterDetail() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [bookmarked, setBookmarked] = useState(true)

  return (
    <div className="detail">
      <header className="detailHeader">
        <button
          className="iconBtn"
          onClick={() => navigate(-1)}
        >
          <IoChevronBack />
        </button>

        <h2>캐릭터 {id}</h2>

        <button
          className="iconBtn"
          onClick={() => navigate('/')}
        >
          <IoHomeOutline />
        </button>
      </header>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        className="characterSwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt=""
              className="slideImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="infoSection">
        <h3>
          캐릭터와 관련된 캐릭터 설명
        </h3>

        <p>
          캐릭터에 대한 간단한 설명을 적어주는
          글을 넣어주는 곳
        </p>

        <div className="tags">
          #태그1 #태그2 #태그3
        </div>
      </section>

      <section className="description">
        <h4>상세설명</h4>

        <p>
          캐릭터에 대한 상세설명을 작성한 곳.
          <br />
          캐릭터에 대한 상세설명을 작성한 곳.
          <br />
          캐릭터에 대한 상세설명을 작성한 곳.
          <br />
          캐릭터에 대한 상세설명을 작성한 곳.
        </p>
      </section>

      <div className="bottomActions">
        <button
          className={`bookmarkBtn ${
            bookmarked ? 'active' : ''
          }`}
          onClick={() =>
            setBookmarked(!bookmarked)
          }
        >
          {bookmarked ? (
            <IoBookmark />
          ) : (
            <IoBookmarkOutline />
          )}
        </button>

        <button className="chatBtn" onClick={() => navigate('/chat')}>
          대화 시작하기
        </button>
      </div>
    </div>
  )
}

export default CharacterDetail
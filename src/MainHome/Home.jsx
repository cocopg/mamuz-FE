import './Home.css'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'

const cards = [
  {
    id: 1,
    title: '김성경',
    desc: '겉으로는 웃지만 속으로는 커다란 야망을 품고있는 욕심많은 여자',
    tags: '#드라마 #반전녀 #걸크러시',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    large: true,
  },
  {
    id: 2,
    title: '주인공',
    desc: '주인공이란 주인공같지 않은 그가 새로운 모습으로 돌아와 당신에게...',
    tags: '#주인공 #남자 #멋쟁이 #로맨스',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: '안젤리나',
    desc: '미국에서 친구가 없는 나에게 먼저 손 내밀어준 전교 1등 친구',
    tags: '#학원물 #여친짤 #외국계 #성장물',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: '배새오',
    desc: '이건 배도 아니고 새도아니다! 나란 존재는 뭘까...?',
    tags: '#판타지 #애니메이션 #음식들',
    image:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1200&auto=format&fit=crop',
  },
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <header className="topbar">
        <nav className="menu">
          <div className="menuLeft">
            <button className="active">홈</button>
            <button>랭킹</button>
          </div>

          <button
            className="searchBtn"
            onClick={() => navigate('/search')}
          >
            <IoSearch />
          </button>
        </nav>
      </header>

      <main className="homeContent">
        <div className="banner" />

        <div className="cardGrid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${card.large ? 'large' : ''}`}
            >
              <img src={card.image} alt={card.title} />

              <div className="overlay">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span>{card.tags}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
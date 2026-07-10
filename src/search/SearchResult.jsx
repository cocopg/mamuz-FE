import './search/searchResult.css'
import { IoChevronBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const results = [
  {
    id: 1,
    name: '주인공',
    desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.',
    online: true,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
  },
  {
    id: 2,
    name: '주인공',
    desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
  },
  {
    id: 3,
    name: '주인공',
    desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
  },
  {
    id: 4,
    name: '주인공',
    desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
  },
  {
    id: 5,
    name: '주인공',
    desc: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
  },
]

function SearchResult() {
  const navigate = useNavigate()

  return (
    <div className="searchResult">
      <div className="resultHeader">
        <button
          className="backBtn"
          onClick={() => navigate(-1)}
        >
          <IoChevronBack />
        </button>

        <input
          className="resultInput"
          value="주인공"
          readOnly
        />
      </div>

      <div className="resultList">
        {results.map((item) => (
          <div
            key={item.id}
            className="resultItem"
            onClick={() => navigate(`/character/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="avatar"
            />

            <div className="resultInfo">
              <div className="nameRow">
                <span className="name">
                  {item.name}
                </span>

                {item.online && (
                  <span className="onlineDot" />
                )}
              </div>

              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult
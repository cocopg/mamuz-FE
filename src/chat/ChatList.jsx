import 'src/chat/chatList.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  IoChevronBack,
  IoSettingsOutline,
  IoStar,
  IoStarOutline,
  IoTrashOutline,
  IoChevronDown,
} from 'react-icons/io5'

function ChatList() {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [deleteMode, setDeleteMode] = useState(false)

  const [showSetting, setShowSetting] = useState(false)

  const [showSort, setShowSort] = useState(false)

  const [sortType, setSortType] =
    useState('최신순')

  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: '주인공',
      favorite: true,
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
      lastMessage:
        '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
      date: '2026-07-04',
      rank: 35,
    },
    {
      id: 2,
      name: '안젤리나',
      favorite: false,
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300',
      lastMessage:
        '미국에서 친구가 없는 나에게 먼저 손 내밀어준',
      date: '2026-07-01',
      rank: 80,
    },
    {
      id: 3,
      name: '김성경',
      favorite: false,
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
      lastMessage:
        '겉으로는 웃지만 속으로는 커다란 야망을 품고',
      date: '2026-06-20',
      rank: 60,
    },
  ])

  const toggleFavorite = (id) => {
    setRooms(
      rooms.map((room) =>
        room.id === id
          ? {
              ...room,
              favorite: !room.favorite,
            }
          : room
      )
    )
  }

  const deleteRoom = (id) => {
    setRooms(
      rooms.filter(
        (room) => room.id !== id
      )
    )
  }

  const filteredRooms = [...rooms]
    .filter((room) =>
      room.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (a.favorite !== b.favorite) {
        return Number(b.favorite) - Number(a.favorite)
      }

      switch (sortType) {
        case '최신순':
          return (
            new Date(b.date) -
            new Date(a.date)
          )

        case '최근 대화순':
          return (
            new Date(b.date) -
            new Date(a.date)
          )

        case '인기순':
          return b.rank - a.rank

        default:
          return 0
      }
    })

  return (
    <div className="chatList">
      <header className="chatListHeader">
        <button
          className="backBtn"
          onClick={() => navigate('/')}
        >
          <IoChevronBack />
        </button>

        <h2>대화</h2>

        <button
          className="headerBtn"
          onClick={() =>
            setShowSetting(!showSetting)
          }
        >
          <IoSettingsOutline />
        </button>

        {showSetting && (
          <div className="settingDropdown">
            <button
              onClick={() => {
                setDeleteMode(true)
                setShowSetting(false)
              }}
            >
              삭제 모드
            </button>
          </div>
        )}
      </header>

      <div className="searchBox">
        <input
          placeholder="검색"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {deleteMode && (
        <div className="deleteBanner">
          <span>삭제 모드</span>

          <button
            onClick={() =>
              setDeleteMode(false)
            }
          >
            완료
          </button>
        </div>
      )}

      <div className="favoriteTitle">
        즐겨찾기
      </div>

      {filteredRooms
        .filter((room) => room.favorite)
        .map((room) => (
          <div
            key={room.id}
            className="chatItem"
            onClick={() =>
              navigate(
                `/chatroom/${room.id}`
              )
            }
          >
            <img
              src={room.image}
              alt=""
            />

            <div className="chatInfo">
              <h4>{room.name}</h4>

              <p>
                {room.lastMessage}
              </p>
            </div>

            {deleteMode ? (
              <button
                className="iconBtn"
                onClick={(e) => {
                  e.stopPropagation()
                  deleteRoom(room.id)
                }}
              >
                <IoTrashOutline />
              </button>
            ) : (
              <button
                className="iconBtn"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(
                    room.id
                  )
                }}
              >
                <IoStar />
              </button>
            )}
          </div>
        ))}

      <div className="sortHeader">
        <button
          className="sortBtn"
          onClick={() =>
            setShowSort(!showSort)
          }
        >
          {sortType}
          <IoChevronDown />
        </button>

        {showSort && (
          <div className="sortDropdown">
            {[
              '최신순',
              '최근 대화순',
              '인기순',
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSortType(item)
                  setShowSort(false)
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {filteredRooms
        .filter((room) => !room.favorite)
        .map((room) => (
          <div
            key={room.id}
            className="chatItem"
            onClick={() =>
              navigate(
                `/chatroom/${room.id}`
              )
            }
          >
            <img
              src={room.image}
              alt=""
            />

            <div className="chatInfo">
              <h4>{room.name}</h4>

              <p>
                {room.lastMessage}
              </p>
            </div>

            {deleteMode ? (
              <button
                className="iconBtn"
                onClick={(e) => {
                  e.stopPropagation()
                  deleteRoom(room.id)
                }}
              >
                <IoTrashOutline />
              </button>
            ) : (
              <button
                className="iconBtn"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(
                    room.id
                  )
                }}
              >
                {room.favorite ? (
                  <IoStar />
                ) : (
                  <IoStarOutline />
                )}
              </button>
            )}
          </div>
        ))}
    </div>
  )
}

export default ChatList
import './ChatList.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  IoSearch,
  IoSettingsOutline,
  IoStar,
  IoStarOutline,
  IoTrashOutline,
} from 'react-icons/io5'

function ChatList() {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [deleteMode, setDeleteMode] =
    useState(false)

  const [showSetting, setShowSetting] =
    useState(false)

  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: '주인공',
      favorite: true,
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
      lastMessage:
        '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    },
    {
      id: 2,
      name: '안젤리나',
      favorite: false,
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300',
      lastMessage:
        '미국에서 친구가 없는 나에게 먼저 손 내밀어준',
    },
    {
      id: 3,
      name: '김성경',
      favorite: false,
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
      lastMessage:
        '겉으로는 웃지만 속으로는 커다란 야망을 품고',
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

  const filteredRooms = rooms
    .filter((room) =>
      room.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort(
      (a, b) =>
        Number(b.favorite) -
        Number(a.favorite)
    )

  return (
    <div className="chatList">

      <header className="chatListHeader">
        <h2>대화</h2>

        <div className="headerIcons">
          <IoSearch />

          <button
            className="headerBtn"
            onClick={() =>
              setShowSetting(true)
            }
          >
            <IoSettingsOutline />
          </button>
        </div>
      </header>

      <div className="searchBox">
        <input
          type="text"
          placeholder="검색"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {deleteMode && (
        <div className="deleteBanner">
          <span>삭제</span>

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
              navigate(`/chat/${room.id}`)
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

      <div className="recentTitle">
        최신순
      </div>

      {filteredRooms
        .filter((room) => !room.favorite)
        .map((room) => (
          <div
            key={room.id}
            className="chatItem"
            onClick={() =>
              navigate(`/chat/${room.id}`)
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

      {showSetting && (
        <div
          className="modalOverlay"
          onClick={() =>
            setShowSetting(false)
          }
        >
          <div
            className="settingModal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="settingItem"
              onClick={() => {
                setDeleteMode(true)
                setShowSetting(false)
              }}
            >
              삭제 모드
            </button>

            <button
              className="settingItem"
              onClick={() =>
                setShowSetting(false)
              }
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatList
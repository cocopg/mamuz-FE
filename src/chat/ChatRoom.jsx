import './ChatRoom.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  IoChevronBack,
  IoSend,
  IoEllipsisVertical,
} from 'react-icons/io5'

function ChatRoom() {
  const navigate = useNavigate()

  const [input, setInput] = useState('')

  const [menuOpen, setMenuOpen] = useState(false)

  const [showSaveModal, setShowSaveModal] =
    useState(false)

  const [actionType, setActionType] =
    useState('')

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '캐릭터의 상세설명을 적어줘야 합니다. 내용을 적는 캐릭터 상세설명',
    },
    {
      id: 2,
      sender: 'user',
      text: '캐릭터의 상세설명을 적어줘야 합니다. 내용을 적는 캐릭터 상세설명',
    },
    {
      id: 3,
      sender: 'user',
      text: '캐릭터의 상세설명을 적어줘야 합니다. 내용을 적는 캐릭터 상세설명',
    },
    {
      id: 4,
      sender: 'user',
      text: '캐릭터의 상세설명을 적어줘야 합니다. 내용을 적는 캐릭터 상세설명',
    },
  ])

  const sendMessage = () => {
    if (!input.trim()) return

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: 'user',
        text: input,
      },
    ])

    setInput('')
  }

  const handleAction = () => {
    if (actionType === 'leave') {
      navigate('/')
    }

    if (actionType === 'reset') {
      setMessages([])
    }

    setShowSaveModal(false)
  }

  return (
    <div className="chatRoom">
      <header className="chatHeader">
        <button
          className="backBtn"
          onClick={() => navigate(-1)}
        >
          <IoChevronBack />
        </button>

        <h2>캐릭터</h2>

        <button
          className="menuBtn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          <IoEllipsisVertical />
        </button>
      </header>

      {menuOpen && (
        <div className="sideMenu">
          <div
            className="menuItem"
            onClick={() => {
              setActionType('reset')
              setShowSaveModal(true)
              setMenuOpen(false)
            }}
          >
            <h4>새로하기</h4>

            <p>
              현재 내용을 저장하고
              다시 시작할 수 있어요
            </p>
          </div>

          <button
            className="leaveBtn"
            onClick={() => {
              setActionType('leave')
              setShowSaveModal(true)
              setMenuOpen(false)
            }}
          >
            대화방 나가기
          </button>
        </div>
      )}

      <div className="chatBody">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`messageRow ${
              msg.sender === 'user'
                ? 'right'
                : 'left'
            }`}
          >
            {msg.sender === 'bot' && (
              <div className="avatar" />
            )}

            <div
              className={`message ${
                msg.sender === 'user'
                  ? 'userMessage'
                  : 'botMessage'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="chatInputArea">
        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
        />

        <button onClick={sendMessage}>
          <IoSend />
        </button>
      </div>

      {showSaveModal && (
        <div className="modalOverlay">
          <div className="saveModal">
            <h3>저장하시겠어요?</h3>

            <p>
              현재 대화를 저장한 후
              이동합니다.
            </p>

            <div className="modalButtons">
              <button
                onClick={() =>
                  setShowSaveModal(false)
                }
              >
                취소
              </button>

              <button
                className="saveBtn"
                onClick={handleAction}
              >
                저장 후 이동
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatRoom
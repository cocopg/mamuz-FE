import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <div className="navbar">
      <button
        className="navBtn"
        onClick={() => navigate('/')}
      >
        Home
      </button>

      <button
        className="navBtn"
        onClick={() => navigate('/chat-list')}
      >
        Chat
      </button>

      <button className="navBtn"
      onClick={() => navigate('/create')}>
        Create
      </button>

      <button className="navBtn">
        Profile
      </button>
    </div>
  )
}

export default Navbar
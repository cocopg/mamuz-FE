import 'src/search/search.css'
import { IoChevronBack } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { IoTimeOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const keywords = ['# 앨번', '# 앨번', '# 앨번', '# 느와르']

const recentSearches = [
  '최근 검색어1',
  '최근 검색어2',
  '최근 검색어3',
  '최근 검색어4',
  '최근 검색어5',
  '최근 검색어6',
  '최근 검색어7',
  '최근 검색어8',
  '최근 검색어9',
]

function Search() {
  const navigate = useNavigate()
  return (
    <div className="search">
      <header className="searchHeader">
        <div className="statusBar">
          <span className="time">9:41</span>

          <div className="icons">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        <div className="searchTop">
          <button className="backBtn">
            <IoChevronBack />
          </button>

          <input
            type="text"
            placeholder=""
            className="searchInput"
          />
        </div>
      </header>

      <div className="divider" />

      <section className="recommendSection">
        <h2>추천 검색어</h2>

        <div className="keywordWrap">
          {keywords.map((item, index) => (
            <button key={index} className="keywordBtn">
              <span>{item}</span>
              <IoClose />
            </button>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="recentSection">
        <div className="recentHeader">
          <h2>최근 검색어</h2>
          <button>모두 지우기</button>
        </div>

        <div className="recentList">
          {recentSearches.map((item, index) => (
            <div key={index} className="recentItem">
              <div className="recentLeft">
                <IoTimeOutline className="clockIcon" />
                <span>{item}</span>
              </div>

              <button className="deleteBtn">
                <IoClose />
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="bottomArea">
        <button
            className="confirmBtn"
            onClick={() => navigate('/search-result')}
        >
          검색하기
        </button>
      </div>
    </div>
  )
}

export default Search
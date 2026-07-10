import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import 'src/index.css'

import App from 'src/App.jsx'
import Home from 'src/MainHome/Home.jsx'
import Search from 'src/search/Search.jsx'
import SearchResult from 'src/search/SearchResult.jsx'
import CharacterDetail from 'src/character/CharacterDetail.jsx'
import ChatRoom from 'src/chat/ChatRoom.jsx'
import ChatList from 'src/chat/ChatList.jsx'
import Create from 'src/create/Create.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="search-result" element={<SearchResult />} />
          <Route path="character/:id" element={<CharacterDetail />}/>
          <Route path="chatroom/:id" element={<ChatRoom />} />
          <Route path="create" element={<Create />} />
          <Route path="chat-list" element={<ChatList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
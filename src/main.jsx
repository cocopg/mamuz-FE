import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Home from './MainHome/Home.jsx'
import Search from './search/Search.jsx'
import SearchResult from './search/SearchResult.jsx'
import CharacterDetail from './character/CharacterDetail.jsx'
import ChatRoom from './chat/ChatRoom.jsx'
import ChatList from './chat/ChatList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="search-result" element={<SearchResult />} />
          <Route path="character/:id" element={<CharacterDetail />}/>
          <Route path="chat" element={<ChatRoom />} />
          <Route path="chat-list" element={<ChatList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
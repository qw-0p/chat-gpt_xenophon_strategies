
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="w-screen bg-primary max-sm:flex-col-reverse flex justify-between h-screen m-0 overflow-hidden">
      <Chat />
      <Sidebar />
    </div >
  )
}

export default App

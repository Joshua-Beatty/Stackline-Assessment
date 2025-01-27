import Header from "./components/Header"
import { SalesInfo } from "./features/salesData/SalesInfo"

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-[#f6f8fa] min-h-full grow flex">
        <SalesInfo />
      </div>
    </div>
  )
}

export default App

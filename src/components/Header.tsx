import logo from "../assets/logo.svg"

function Header() {
  return (
    <div className="bg-[#052849] w-full h-16 p-4">
      <img src={logo} alt="Stackline Logo" className="h-full" />
    </div>
  )
}
export default Header

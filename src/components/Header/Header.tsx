const Header = () => {
  return (
    <header className="flex justify-center items-center mb-6">
      <img
        src="src/assets/images/back.svg"
        alt="arrow back"
        className="w-[30px] cursor-pointer"
      />

      <img
        src="src/assets/images/avocado.svg"
        alt="avocado with cute face"
        className="w-[30px] mr-2.5"
      />

      <span className="text-textPrimary font-semibold text-lg tracking-tight">
        Food Mentor
      </span>
    </header>
  )
}

export default Header

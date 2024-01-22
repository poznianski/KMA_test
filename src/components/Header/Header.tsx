const Header = () => {
  return (
    <header className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/other/back.svg"
        alt="arrow back"
        className="w-[30px] cursor-pointer"
      />

      <img
        src="/assets/images/other/avocado.svg"
        alt="avocado with cute face"
        className="mr-2.5 w-[30px]"
      />

      <span className="text-lg font-semibold tracking-tight text-textPrimary">
        Food Mentor
      </span>
    </header>
  )
}

export default Header

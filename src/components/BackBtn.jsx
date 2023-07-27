import { BackIcon } from "./Icons.jsx"

function BackBtn() {
  const goBack = () => {
    history.back()
  }

  return (
    <button
      onClick={goBack}
      className="border-2 border-primary p-2 rounded-md hover:bg-primary hover:text-backg-400 mb-10 transition-colors ease-in"
    >
      <BackIcon />
    </button>
  )
}

export default BackBtn

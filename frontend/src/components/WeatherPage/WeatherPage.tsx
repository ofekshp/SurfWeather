import './WeatherPage.css'
import { IoIosSearch } from "react-icons/io";

const WeatherPage = () => {
  return (
    <div className='weather'>
      <div className="searchbar">
        <input type="text" placeholder="Search..." />
        <IoIosSearch />
      </div>
    </div>
  )
}

export default WeatherPage

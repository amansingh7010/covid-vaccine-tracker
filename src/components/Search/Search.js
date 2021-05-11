import { useState } from 'react'

import SearchItem from '../SearchItem/SearchItem'
import './Search.css'

const Search = () => {
  const [pincode, setPincode] = useState('')
  const [centers, setCenters] = useState([])
  const [loading, setLoading] = useState(false)

  const currentDate = () => {
    const date = new Date()
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  }

  const onChangeHandler = (event) => {
    event.preventDefault()
    if (event.target.value.length === 6) {
      getList(event.target.value)
      setPincode(event.target.value)
    } else {
      setPincode('')
      setCenters([])
    }
  }

  const getList = async (zipCode) => {
    try {
      setLoading(true)
      setCenters([])
      const response = await fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${zipCode}&date=${currentDate()}`
      )
      const list = await response.json()
      setCenters(list.centers)
    } finally {
      setLoading(false)
    }
  }

  const listHeader = (
    <div className="ListHeader">
      {pincode.length === 6 && centers.length === 0 ? (
        <p>No Results found for pin {pincode}</p>
      ) : pincode.length === 6 ? (
        <p>Showing results for {pincode}</p>
      ) : null}
    </div>
  )

  return (
    <div className="Search">
      <input
        type="text"
        name="pincode"
        className="Search-Input"
        maxLength="6"
        onChange={onChangeHandler}
        placeholder="Enter ZIP Code"
        autoComplete="off"
      />
      {listHeader}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="SearchItem-Wrapper">
          {centers.map((center) => (
            <SearchItem key={center.center_id} center={center} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Search

import './SearchItem.css'

const SearchItem = (props) => {
  const { name, address, state_name, fee_type, sessions } = props.center

  return (
    <div className="Container">
      <div>{name}</div>
      <div style={{ paddingBottom: 10 }}>
        {address}, {state_name}
      </div>
      <strong
        style={{ paddingBottom: 10 }}
        className={fee_type === 'Paid' ? 'Red' : 'Green'}
      >
        {fee_type}
      </strong>
      <table className="SearchItem-Table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Available</th>
            <th>Age</th>
            <th>Vaccine</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.session_id}>
              <td>{session.date}</td>
              <td
                className={
                  session.available_capacity > 25
                    ? 'Green'
                    : session.available_capacity > 5
                    ? 'Orange'
                    : 'Red'
                }
              >
                {session.available_capacity}
              </td>
              <td>{session.min_age_limit}</td>
              <td>{session.vaccine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SearchItem

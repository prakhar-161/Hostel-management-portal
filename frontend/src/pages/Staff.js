

const Staff = () => {
  return (
    <div className="staff">
      <h1>Staff Information</h1>
      <form className="staff-form">
        <input 
          type="text" 
          placeholder="Name"
        />
        <input 
          type="text" 
          placeholder="Occupation"
        />
        <input 
          type="tel"
          placeholder="Contact Number"
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Staff
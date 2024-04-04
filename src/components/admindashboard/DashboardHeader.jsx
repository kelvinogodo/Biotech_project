
const DashboardHeader = () => {
  const logout = ()=>{
    localStorage.removeItem('user')
  }
  return (
    <div className='dashboard-header'>
      <button type="submit" className='logout-btn' onClick={logout}>logout</button>
    </div>
  )
}

export default DashboardHeader
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function NotFound({auth}) {
    const navigate = useNavigate()

    useEffect(() => {
        !auth && navigate('/login')
    },[auth, navigate])

  return (
    <h1>404 Page not Found</h1>
  )
}
const mapStateToProps = ({userAuth}) => ({
    auth: userAuth
})

export default connect(mapStateToProps)(NotFound)
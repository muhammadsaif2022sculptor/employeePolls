import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {handleAddQuestion} from '../actions/common'

function NewQ({dispatch,auth}) {
    const navigate = useNavigate()

    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    
    useEffect(()=>{
        !auth && navigate('/login')
    },[auth, navigate])

    function handleSubmit(e){
        e.preventDefault()
        const question = { 
            optionOneText: first, 
            optionTwoText: second, 
            author: auth 
        }
        dispatch(handleAddQuestion(question))
        setFirst('')
        setSecond('')
        navigate('/')
    }

  return (auth && <>
        <div className='form'>
        <h2>Would You Rather</h2>
        <form className='form' onSubmit={handleSubmit}>
            <label>First Option</label>
            <input type="text" 
            placeholder='Enter first option' 
            value={first} 
            className='form-text'
            onChange={(e) => setFirst(e.target.value)}
            />

            <label>Second Option</label>
            <input type="text" 
            placeholder='Enter second option' 
            value={second} 
            className='form-text' 
            onChange={(e) => setSecond(e.target.value)}
            />
            {first && second ? (<input type="submit" />) : (<input type="submit" disabled />)}
        </form>
        </div>
    </>
  )
}

const mapStateToProps = ({userAuth}) => ({
    auth: userAuth
})

export default connect(mapStateToProps)(NewQ)
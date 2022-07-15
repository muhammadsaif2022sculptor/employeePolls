import {_saveQuestionAnswer} from '../utils/_DATA'

describe('Test on _saveQuestionAnswer', () => {
    it('will return true when correctly formatted data is passed', async () => {
        const data = {
            authedUser: 'tylermcginnis', 
            qid: '6ni6ok3ym7mf1p33lnez', 
            answer: 'optionOne'
        }
        const result = await _saveQuestionAnswer(data)
        expect(result).toEqual(true)
    })

    it('will return error when incorrect data is passed', async() => {
        const data = {
            a: 'abc'
        }
        await expect(_saveQuestionAnswer(data)).rejects.toEqual('Please provide authedUser, qid, and answer')
    })
})
import React from 'react'

const QuestionList = ({questionList}) => {
  return (
    <div className='card_list'>{questionList?.map((qs)=>{
        return(
        <div key={qs.id} className='card'>
            <h3>{qs.name}</h3>
            <h5>{qs.question}</h5>
        </div>
        )
    })}</div>
  )
}

export default QuestionList
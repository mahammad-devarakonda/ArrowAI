import React, { useEffect} from 'react'
import { questionURL } from '@/assets/constants'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '@/Redux/QuestionsSlics';

const useGetQuestionsFirebase= () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getDatabase= async()=>{
            const data = await axios.get(questionURL)
         
            .then(questions=>{
                let tempquestions =[];
                for (let key in questions.data){
                    let question ={
                        id:key,
                        ...questions.data[key]
                    }
                    tempquestions.push(question)
                }
                dispatch(fetchQuestions(tempquestions));
            })

            console.log(data);
            
        }
        getDatabase()
    }, [])
}

export default useGetQuestionsFirebase

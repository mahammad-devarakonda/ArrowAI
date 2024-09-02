import React, { useRef, useState, useCallback, memo } from 'react';
import { geminiAIKey } from '@/assets/constants';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Skeleton } from "@/components/ui/skeleton";
import Markdown from 'react-markdown';
import { database, ref, set, push } from '../lib/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addQuestion } from '@/Redux/QuestionsSlics';
import TypingAnimation from "@/components/magicui/typing-animation"

const Ai = memo(() => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const questionsStore = useSelector(state => state.questions.questions || []);
    const userInput = useRef('');
    const dispatch = useDispatch();
    
    // Memoized function to handle AI button click to control multiple rerenders
    const aiButtonHandler = useCallback(async () => {
        let message = userInput.current?.value.trim();
        if (!message) return;
        setLoading(true);
        try {
            // Generating response using Google AI
            const genAI = new GoogleGenerativeAI(geminiAIKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(message);
            const response = await result.response;
            const text = await response.text();
            setText(text);

            // Storing data to Google Firebase
            const questionsRef = ref(database, 'questions');
            const newEntryRef = push(questionsRef);
            await set(newEntryRef, {
                question: message,
                answer: text,
                timestamp: new Date().toISOString()
            });

            dispatch(addQuestion({
                question: message,
                answer: text,
            }));
        } catch (error) {
            console.error("Error generating AI content:", error);
        } finally {
            setLoading(false);
            if (userInput.current) {
                userInput.current.value = '';
            }
        }
    }, [dispatch]);

    // Memoized function to open response to control multiple rerenders 
    const openResponse = useCallback((question) => () => {
        setSelectedQuestion(question);
    }, []);

    return (
        <div className="flex h-screen overflow-hidden mb-11">
            <div className='w-[250px] bg-white overflow-y-auto h-[530px] border-r-2'>
                <h3 className='text-center m-2 font-bold'>Recently Asked Questions</h3>
                <ul className='flex flex-col items-center'>
                    {Array.isArray(questionsStore) && questionsStore.length > 0 ? (
                        questionsStore.map((item, index) => (
                            <button
                                onClick={openResponse(item)}
                                key={index}
                                className=" border-b border-gray-200 text-center w-full max-w-md"
                            >
                                <TypingAnimation className="text-s text-left mt-3 px-4 truncate" text={item.question}></TypingAnimation>

                                <br />
                            </button>
                        ))
                    ) : (
                        <li>No questions available</li>
                    )}
                </ul>
            </div>
            <div className='w-3/4 bg-white p-4 flex flex-col h-[530px]'>
                <div className="flex-grow w-full bg- flex flex-col text-black items-center overflow-y-auto">
                    {loading ? (
                        <div className="flex flex-col space-y-3">
                            <Skeleton className="h-[100px] w-[700px] rounded-xl" />
                            <div className="space-y-2">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <Skeleton key={index} className="h-4 w-[250px]" />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className='w-[800px] max-w-full text-ellipsis'>
                            <Markdown>{selectedQuestion ? selectedQuestion.answer : text}</Markdown>
                        </div>
                    )}
                </div>
                <div className="w-full p-4 bg-white flex justify-center border-t border-gray-300">
                    <input
                        className="w-1/2 p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500"
                        ref={userInput}
                        placeholder="Ask your Question..."
                    />
                    <button className="ml-3 p-3 bg-black text-white rounded px-7" onClick={aiButtonHandler}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Ai;

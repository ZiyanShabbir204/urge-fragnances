import React, { useState } from 'react';
import "../../components/quiz.css"

import img1 from "../../assets/q1/1.jpg"
import img2 from "../../assets/q1/2.jpg"
import img3 from "../../assets/q1/3.jpg"
import img4 from "../../assets/q1/4.jpg"
import img5 from "../../assets/q1/5.jpg"
import img6 from "../../assets/q1/6.jpg"
import img7 from "../../assets/q1/7.jpg"
import img8 from "../../assets/q1/8.jpg"
import img9 from "../../assets/q1/9.jpg"

import img10 from "../../assets/q2/1.jpg"
import img11 from "../../assets/q2/2.jpg"
import img12 from "../../assets/q2/3.jpg"
import img13 from "../../assets/q2/4.jpg"
import img14 from "../../assets/q2/5.jpg"
import img15 from "../../assets/q2/6.jpg"
import img16 from "../../assets/q2/7.jpg"
import img17 from "../../assets/q2/8.jpg"
import img18 from "../../assets/q2/9.jpg"

import img19 from "../../assets/q3/1.jpg"
import img20 from "../../assets/q3/2.jpg"
import img21 from "../../assets/q3/3.jpg"
import img22 from "../../assets/q3/4.jpg"
import img23 from "../../assets/q3/5.jpg"
import img24 from "../../assets/q3/6.jpg"
import img25 from "../../assets/q3/7.jpg"
import img26 from "../../assets/q3/8.jpg"
import img27 from "../../assets/q3/9.jpg"



const Quiz = () => {
    const [answers, setAnswers] = useState({
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        question6: null
    });

    const [showRecommendation, setShowRecommendation] = useState(false);
    const [recommendedPerfume, setRecommendedPerfume] = useState('');

    const count = {
        TheBoss: 0,
        Rossete: 0,
        Celeste: 0,
        BlackSwan: 0,
        ArabianNights: 0,
        RoyalDale: 0,
        Victory: 0,
        Speed: 0,
        BasicInstinct: 0
    };

    const handleAnswerChange = (question, answer) => {
        setAnswers({
            ...answers,
            [question]: answer
        });
    };

    const handleSubmit = () => {
        // Count the answers
        Object.values(answers).forEach((answer) => {
            switch (answer) {
                case 'A':
                    count.TheBoss++;
                    break;
                case 'B':
                    count.Rossete++;
                    break;
                case 'C':
                    count.Celeste++;
                    break;
                case 'D':
                    count.BlackSwan++;
                    break;
                case 'E':
                    count.ArabianNights++;
                    break;
                case 'F':
                    count.RoyalDale++;
                    break;
                case 'G':
                    count.Victory++;
                    break;
                case 'H':
                    count.Speed++;
                    break;
                case 'I':
                    count.BasicInstinct++;
                    break;
                default:
                    break;
            }
        });

        console.log(count)
        // Find the perfume with the highest count
        const maxCount = Math.max(...Object.values(count));
        const recommended = Object.keys(count).find(key => count[key] === maxCount);
        setRecommendedPerfume(recommended);
        setShowRecommendation(true);
    };

    return (
        <div className="container mx-auto p-6 quiz-container">
            <h1 className="text-2xl font-bold text-center mb-6">Get your Personalized Perfume</h1>

            {/* Question 1 */}
            {answers.question1 === null && (
                <div className="mb-16">
                    <h1 className="text-lg font-bold mb-2">How do you usually spend your weekends?</h1>
                    <div className="grid grid-cols-3 gap-5">
                        {[
                            { char: 'A', img: img1 },
                            { char: 'B', img: img2 },
                            { char: 'C', img: img3 },
                            { char: 'D', img: img4 },
                            { char: 'E', img: img5 },
                            { char: 'F', img: img6 },
                            { char: 'G', img: img7 },
                            { char: 'H', img: img8 },
                            { char: 'I', img: img9 },

                            // 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I'
                        ].map(option => (
                            <div>
                                <img src={option.img} alt="" className='' srcset="" onClick={() => handleAnswerChange('question1', option.char)} />
                                <button
                                    key={option.char}
                                    className="block w-full bg-gray-200 text-center py-2 rounded-md hover:bg-gray-300"
                                    onClick={() => handleAnswerChange('question1', option.char)}
                                >
                                    {option.char === 'A' && 'Working on your goals'}
                                    {option.char === 'B' && 'Spending quality time with loved ones'}
                                    {option.char === 'C' && 'Going on outdoor adventures'}
                                    {option.char === 'D' && 'Exploring hidden areas in the city'}
                                    {option.char === 'E' && 'Indulging in luxurious self-care'}
                                    {option.char === 'F' && 'Hosting sophisticated dinner parties'}
                                    {option.char === 'G' && 'Celebrating personal victories'}
                                    {option.char === 'H' && 'Playing sports or hitting the gym'}
                                    {option.char === 'I' && 'Doing hardcore gym'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Repeat for the next questions */}
            {answers.question2 === null && (
                <div className="mb-16">
                    <h1 className="text-lg mb-2">Which setting inspires you the most?</h1>
                    <div className="grid grid-cols-3 gap-5">
                        {[{ char: 'A', img: img10 },
                        { char: 'B', img: img11 },
                        { char: 'C', img: img12 },
                        { char: 'D', img: img13 },
                        { char: 'E', img: img14 },
                        { char: 'F', img: img15 },
                        { char: 'G', img: img16 },
                        { char: 'H', img: img17 },
                        { char: 'I', img: img18 },
                        ].map(option => (
                            <div>
                                <img src={option.img} alt="" className='' srcset="" onClick={() => handleAnswerChange('question2', option.char)} />
                                <button
                                    key={option.char}
                                    className="block w-full bg-gray-200 text-center py-2 rounded-md hover:bg-gray-300"
                                    onClick={() => handleAnswerChange('question2', option.char)}
                                >
                                    {option.char === 'A' && 'A high-powered boardroom'}
                                    {option.char === 'B' && 'A garden in full bloom'}
                                    {option.char === 'C' && 'A wide-open sky and endless ocean'}
                                    {option.char === 'D' && 'A dimly lit, moody art gallery'}
                                    {option.char === 'E' && 'A bustling marketplace full of spices'}
                                    {option.char === 'F' && 'A grand ballroom with chandeliers'}
                                    {option.char === 'G' && 'A stadium filled with cheering crowds'}
                                    {option.char === 'H' && 'A racetrack or energetic fitness arena'}
                                    {option.char === 'I' && 'Gym'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Repeat for the next questions */}
            {answers.question3 === null && (
                <div className="mb-6">
                    <h1 className="text-lg mb-2">What’s your go-to pick-me-up activity?</h1>
                    <div className="grid grid-cols-3 gap-5">
                        {[{ char: 'A', img: img19 },
                        { char: 'B', img: img20 },
                        { char: 'C', img: img21 },
                        { char: 'D', img: img22 },
                        { char: 'E', img: img23 },
                        { char: 'F', img: img24 },
                        { char: 'G', img: img25 },
                        { char: 'H', img: img26 },
                        { char: 'I', img: img27 },].map(option => (
                            <div>
                                <img src={option.img} alt="" className='' srcset="" onClick={() => handleAnswerChange('question3', option.char)} />

                                <button
                                    key={option}
                                    className="block w-full bg-gray-200 text-center py-2 rounded-md hover:bg-gray-300"
                                    onClick={() => handleAnswerChange('question3', option.char)}
                                >
                                    {option.char === 'A' && 'Planning for a project'}
                                    {option.char === 'B' && 'Writing a heartfelt note or poem'}
                                    {option.char === 'C' && 'Taking a stroll in nature'}
                                    {option.char === 'D' && 'Watching a thought-provoking movie'}
                                    {option.char === 'E' && 'Exploring exotic cuisines'}
                                    {option.char === 'F' && 'Listening to classical music'}
                                    {option.char === 'G' && 'Crushing a personal goal'}
                                    {option.char === 'H' && 'Going for a quick run or workout'}
                                    {option.char === 'I' && 'Going for trekking'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {answers.question4 === null && (
                <div className="mb-16">
                    <h1 className="text-lg mb-2">What’s your ideal fragrance mood?</h1>
                    <div className="grid grid-cols-3 gap-5">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].map(option => (
                            <button
                                key={option}
                                className="block w-full bg-gray-200 text-center py-2 rounded-md hover:bg-gray-300"
                                onClick={() => handleAnswerChange('question4', option)}
                            >
                                {option === 'A' && 'Strong and empowering'}
                                {option === 'B' && 'Romantic and gentle'}
                                {option === 'C' && 'Fresh and invigorating'}
                                {option === 'D' && 'Dark and sensual'}
                                {option === 'E' && 'Warm and opulent'}
                                {option === 'F' && 'Classic and timeless'}
                                {option === 'G' && 'Bold and victorious'}
                                {option === 'H' && 'Energetic and zesty'}
                                {option === 'I' && 'Crude and Manly'}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {answers.question5 === null && (
                <div className="mb-16">
                    <h1 className="text-lg mb-2">What’s your ultimate life motto?</h1>
                    <div className="grid grid-cols-3 gap-5">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].map(option => (
                            <button
                                key={option}
                                className="block w-full bg-gray-200 text-center py-2 rounded-md hover:bg-gray-300"
                                onClick={() => handleAnswerChange('question5', option)}
                            >
                                {option === 'A' && 'Lead by example.'}
                                {option === 'B' && 'Love makes the world go round.'}
                                {option === 'C' && 'The sky’s the limit'}
                                {option === 'D' && 'Welcoming new experiences'}
                                {option === 'E' && 'Cherish the little things.'}
                                {option === 'F' && 'Elegance is an attitude.'}
                                {option === 'G' && 'Victory belongs to the brave'}
                                {option === 'H' && 'Speed is the essence of life'}
                                {option === 'I' && 'Be like Schwarzneger'}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {answers.question6 === null && (
                <div className="mb-16">
                    <h1 className="text-lg mb-2">What’s your energy level like on most days?</h1>
                    <div className="grid grid-cols-3 gap-5">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].map(option => (
                            <button
                                key={option}
                                className="block w-full bg-gray-200 text-center py-2 rounded-md hover:bg-gray-300"
                                onClick={() => handleAnswerChange('question6', option)}
                            >
                                {option === 'A' && 'High and focused'}
                                {option === 'B' && 'Calm and loving'}
                                {option === 'C' && 'Fresh and vibrant'}
                                {option === 'D' && 'Deep and introspective'}
                                {option === 'E' && 'Warm and steady.'}
                                {option === 'F' && 'Elegant and composed'}
                                {option === 'G' && 'Excited and determined'}
                                {option === 'H' && 'Fast-paced and dynamic'}
                                {option === 'I' && 'High and Uncontrollable'}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-customLightBrown text-white py-2 rounded-md hover:bg-customBrown"
            >
                Get My Recommendation
            </button>

            {/* Show recommendation */}
            {showRecommendation && (
                <div className="mt-6 text-center">
                    <p className="text-xl font-semibold">
                        Based on your answers, we recommend the perfume: {recommendedPerfume}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Quiz;

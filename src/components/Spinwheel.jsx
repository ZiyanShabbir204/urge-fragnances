import React, { useState } from 'react';

const PerfumeQuiz = () => {
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
        Speed: 0
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
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Get your Personalized Perfume</h1>

            {/* Question 1 */}
            {answers.question1 === null && (
                <div className="mb-16">
                    <p className="text-lg mb-2">How do you usually spend your weekends?</p>
                    <div className="grid grid-cols-3 gap-5">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(option => (
                            <button
                                key={option}
                                className="block w-full bg-gray-200 text-center py-2 rounded-md hover:bg-gray-300"
                                onClick={() => handleAnswerChange('question1', option)}
                            >
                                {option === 'A' && 'Working on your goals'}
                                {option === 'B' && 'Spending quality time with loved ones'}
                                {option === 'C' && 'Going on outdoor adventures'}
                                {option === 'D' && 'Exploring hidden areas in the city'}
                                {option === 'E' && 'Indulging in luxurious self-care'}
                                {option === 'F' && 'Hosting sophisticated dinner parties'}
                                {option === 'G' && 'Celebrating personal victories'}
                                {option === 'H' && 'Playing sports or hitting the gym'}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Repeat for the next questions */}
            {answers.question2 === null && (
                <div className="mb-16">
                    <p className="text-lg mb-2">Which setting inspires you the most?</p>
                    <div className="grid grid-cols-3 gap-5">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(option => (
                            <button
                                key={option}
                                className="block w-full bg-gray-200 text-center py-2 rounded-md hover:bg-gray-300"
                                onClick={() => handleAnswerChange('question2', option)}
                            >
                                {option === 'A' && 'A high-powered boardroom'}
                                {option === 'B' && 'A garden in full bloom'}
                                {option === 'C' && 'A wide-open sky and endless ocean'}
                                {option === 'D' && 'A dimly lit, moody art gallery'}
                                {option === 'E' && 'A bustling marketplace full of spices'}
                                {option === 'F' && 'A grand ballroom with chandeliers'}
                                {option === 'G' && 'A stadium filled with cheering crowds'}
                                {option === 'H' && 'A racetrack or energetic fitness arena'}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Repeat for the next questions */}
            {answers.question3 === null && (
                <div className="mb-6">
                    <p className="text-lg mb-2">What’s your go-to pick-me-up activity?</p>
                    <div className="grid grid-cols-3 gap-5">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(option => (
                            <button
                                key={option}
                                className="block w-full bg-gray-200 text-center py-2 rounded-md hover:bg-gray-300"
                                onClick={() => handleAnswerChange('question3', option)}
                            >
                                {option === 'A' && 'Planning for a project'}
                                {option === 'B' && 'Writing a heartfelt note or poem'}
                                {option === 'C' && 'Taking a stroll in nature'}
                                {option === 'D' && 'Watching a thought-provoking movie'}
                                {option === 'E' && 'Exploring exotic cuisines'}
                                {option === 'F' && 'Listening to classical music'}
                                {option === 'G' && 'Crushing a personal goal'}
                                {option === 'H' && 'Going for a quick run or workout'}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {answers.question4 === null && (
                <div className="mb-16">
                    <p className="text-lg mb-2">What’s your ideal fragrance mood?</p>
                    <div className="grid grid-cols-3 gap-5">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(option => (
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
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {answers.question5 === null && (
                <div className="mb-16">
                    <p className="text-lg mb-2">What’s your ultimate life motto?</p>
                    <div className="grid grid-cols-3 gap-5">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(option => (
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
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {answers.question6 === null && (
                <div className="mb-16">
                    <p className="text-lg mb-2">What’s your energy level like on most days?</p>
                    <div className="grid grid-cols-3 gap-5">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(option => (
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
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
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

export default PerfumeQuiz;

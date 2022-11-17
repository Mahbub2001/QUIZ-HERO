import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import './QuizesCategory.module.css'

const QuizesCategory = () => {
    const quizCategories = useLoaderData().data;
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 mt-10 gap-5 container'>
            {
                quizCategories.map(category => <Categories key={category.id} category={category}></Categories>)
            }
        </div>
    );
};

export default QuizesCategory;


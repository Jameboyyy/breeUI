import React, { useState } from 'react';
import data from "../data/data.json";
import './page.css'

const Page = () => {

    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [...new Set(data.map(card => card.category))];

    const handleCategoryClick = (category) => {
        setActiveCategory(prev => (prev === category ? null : category));
    };

    const filteredCards = activeCategory ? data.filter(card => card.category === activeCategory) : data;

    return (
        <section>
            <div className="page__container">
                <div className="category__buttons">
                    {categories.map (category => (
                        <button
                        key={category}
                        className={`category__btn ${activeCategory === category ? "active" : ""}`}
                        onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="cards__container">
                    {filteredCards.map(card => (
                        <div key={card.id} className='card'>
                            <img src={card.image} alt={card.title} className='card__img'/>
                            <h2 className="card__title">{card.title}</h2>
                            <p className="card__descr">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Page;

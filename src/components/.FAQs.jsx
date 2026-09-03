import { Astroid } from 'lucide-react';
import { Candy } from 'lucide-react';
import { useState } from 'react';
import {Plus, Minus} from 'lucide-react';
import './FAQs.css'

const facts = [
    {
        id: 1,
        question: "How long does shipping take?",
        answer: "Shipping typically takes 3-5 business days."
    },
    {
        id: 2,
        question: "Does your flavors are 100% natural?",
        answer: "Yes, all our flavors are made from natural ingredients."
    },
    {   
        id: 3,
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to select countries outside of the US. Please check our shipping policy for more details."
    },
    {
        id: 4,
        question: "Are your candies gluten-free?",
        answer: "Yep! Every SOUR UP flavor is 100% gluten-free, so everyone can get their sour fix."
    },
    {
        id: 5,
        question: "What age group are these candies best suited for?",
        answer: "Made with kids and teens in mind, but let's be honest — sour candy doesn't check ID at the door."
    },
    {
        id: 6,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, PayPal, and Apple Pay/Google Pay at checkout — fast and secure, every time."
    }
];

function Facts(){

    const [openId, setOpenId] = useState(null);

    const toggleFact = (id) => {
        setOpenId(openId === id ? null : id);
    }

    return(
        
        <section className="facts-container">
            <h2><Astroid size={40} /> Frequently Asked Questions</h2>

            <div className="faq-decor">
                    <Candy className="candy candy-1" />
                    <Candy className="candy candy-2" />
                    <Candy className="candy candy-3" />
                    <Candy className="candy candy-4" />
                    <Candy className="candy candy-5" />
            </div>

            <div className="facts">
                {facts.map((fact) => {
                   const isOpen = openId === fact.id;
                   return(
                    <div key={fact.id} className="{`fact ${isOpen ? 'fact-open' : ''}`}">
                        <button className="fact-question" onClick={() => toggleFact(fact.id)}>
                            <h3>{fact.question}</h3>
                            {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                        </button>

                        {isOpen && <p className="fact-answer">{fact.answer}</p>}
                    </div>
                   );
                })}
            </div>
        </section>
    );
}

export default Facts;
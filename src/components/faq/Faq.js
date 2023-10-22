import React from 'react';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import Question from "./Question";
import { questions } from './data';


const Faq = () => {
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2 className="u-title-h2">FAQs</h2>
          <p className="u-text-small u-text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, amet nostrum! Tempore odio magnam praesentium cum dolor
            corporis, laborum ipsam!
          </p>
        </div>
        <div className="questions">
        {questions.map((question) => (
          <Question title={question.title} answer={question.answer}/>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Faq

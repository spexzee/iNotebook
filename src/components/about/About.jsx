import React, { useState } from 'react';
import './about.css'
import { Link } from 'react-router-dom';

const About = (props) => {

    return (
        <div className='container'>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample"   >
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#153655' : 'white', color: props.mode === 'dark' ? 'white' : 'black', border: '2px solid', borderColor: props.mode === 'dark' ? 'white' : 'black' }} >
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={{ backgroundColor: props.mode === 'dark' ? '#153655' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        >
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or else.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#153655' : 'white', color: props.mode === 'dark' ? 'white' : 'black', border: '2px solid', borderColor: props.mode === 'dark' ? 'white' : 'black' }} >
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={{ backgroundColor: props.mode === 'dark' ? '#153655' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        >
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writting text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#153655' : 'white', color: props.mode === 'dark' ? 'white' : 'black', border: '2px solid', borderColor: props.mode === 'dark' ? 'white' : 'black' }} >
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={{ backgroundColor: props.mode === 'dark' ? '#153655' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        >
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            This word counter software works in any browser such as Chrome, Brave, Internet Explorer, safari, Opera, etc. It suits to count characters in facebook, bing, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Link to='/' className='btn btn-primary my-3'>Back To Text Form</Link>
            </div>
        </div>
    )
}

export default About
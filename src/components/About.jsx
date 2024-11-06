import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    return (
        <div className='container p-4 mt-5 rounded' style={myStyle}>
            <h1 className='my-4 text-center'>About Us</h1>

            <div className="accordion mb-5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Text Transformation
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Text-Master is all about transforming your text effortlessly.</strong> Need your text in uppercase? Lowercase? We can do that. Our tools help you tweak text to your heart's content, and we do it with precision and speed.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Clean and Clear
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Say goodbye to cluttered text.</strong> Text-Master can remove those pesky extra spaces that sneak into your content. We help you maintain text clarity and readability, making your content look clean and professional.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Insights at Your Fingertips
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Text-Master goes beyond just manipulation.</strong> Curious about how many characters or words are in your text? Wondering how long it will take to read? We provide you with valuable insights to help you better understand your content.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

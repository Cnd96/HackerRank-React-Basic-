import React, { useEffect, useState } from 'react';

function Slides({slides}) {

    const [clickReset,setClickReset]=useState(true);
    const [clickPrev,setClickPre]=useState(true);
    const [clicknNext,setClickNext]=useState(false);
    const [slideNumber,setSlideNumber]=useState(0);


    useEffect(() => {
        if(slideNumber==0){
            setClickReset(true);
            setClickPre(true);
            setClickNext(false);
        }
        else if(slideNumber==slides.length-1){
            setClickReset(false);
            setClickPre(false);
            setClickNext(true);
        }
        else{
            setClickReset(false);
            setClickPre(false);
            setClickNext(false);
        }
    }, [slideNumber])

    const onNextClick = () => {
        setSlideNumber(slideNumber+1);
    }
    const onPreviuosClick = () => {
        setSlideNumber(slideNumber-1);
    }

    const onRestClick = () => {
        setSlideNumber(0);
    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={onRestClick} disabled={clickReset}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={onPreviuosClick}   disabled={clickPrev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={onNextClick}  disabled={clicknNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[slideNumber].title}</h1>
                <p data-testid="text">{slides[slideNumber].text}</p>
            </div>
        </div>
    );

}

export default Slides;

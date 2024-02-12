import React, { useEffect, useState } from 'react'
import './Landingpage.scss'
const Landingpage = ()=> {
    const stillWords=["what can you find here ..."];
    const [changingWords , setChangingWords]= useState([
        'Jobs','Study Resources', 'Self Assessment ', 'AI Career Guidance ','Job Referrals'
    ]);
    const [currentIndex ,setCurrentIndex]=useState(0);

    useEffect(() => {
        const interval = setInterval( () => {
            setCurrentIndex((prevIndex) =>(prevIndex +1) % changingWords.length);
        },2000);
        return () => clearInterval(interval);
    }, [changingWords.length]);

  return (
    <>
    <div className='landing-page'>
        <section className='hero'>
            <div className='hero-left'>
                <h1>Welcome to </h1> <span className='jobmaze-anima'>JOB-BLENDR</span>
                <p>a comprehensive platform for freshers in the industry </p>
                <p>find job opportunities, enhance your skills, connect with professionals, self-assessment.</p>
            </div>
            <div className="hero-right">
                <div className="animated-words">
                    {stillWords.map((word,index)=>
                    (<div key={index} className='word'>{word}</div> )
                    )}
                    <div className="changing-words">
                        {changingWords[currentIndex]}
                    </div>
                </div>
            </div>
        </section>
       
    </div>
    <div className='section-2'>
        <h2 className='sect2-heading'>Don't know where to start ??</h2>
        <p>If you're feeling stuck and don't know where to start, you've come to the right place.<br></br> Let's embark on this journey together and turn your career aspirations into reality.</p>
        <p>Join us by signing up and starting by exploring our feeds.</p>
        <div className='btnsect-2'>
        <button class="buttonglow" role="button">GET STARTED</button>
        </div>
    </div>
    </>
  );
}

export default Landingpage;

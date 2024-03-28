import React, { useEffect, useState } from "react";
import dividerMobile from '../assets/pattern-divider-mobile.svg';
import dividerDesktop from '../assets/pattern-divider-desktop.svg';
import diceButton from '../assets/icon-dice.svg';

export default function Card() {

  const [advice, setAdvice] = useState({
    id: "",
    quote: "",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice?random=${Math.random()}`)
      .then((response) => response.json())
      .then((data) =>
        setAdvice({
          id: data.slip.id,
          quote: data.slip.advice,
        })
      )
      .catch((error) => console.error("Error ", error));
  }, [count]);

  return (
    <>
      <div className="min-h-screen w-full bg-darkBlue bg-contain bg-no-repeat  overflow-hidden flex justify-center items-center font-Manrope px-4 md:px-96">
        <div className='bg-darkGrayishBlue w-full text-center rounded-lg p-6'>
          <h1 className="text-neonGreen text-xs md:text-sm font-bold my-6"> A D V I C E &nbsp;&nbsp;# <span>{advice.id}</span></h1>
          <p className='text-lightCyan text-2xl font-bold  mb-6'>{advice.quote}</p>
          <picture>
            <source media="(min-width: 641px)" srcSet={dividerDesktop} />
            <source media="(max-width: 640px)" srcSet={dividerMobile} />
            <img className='mx-auto' src={dividerDesktop} alt="divider" />
          </picture>
          <div className='flex justify-center mt-8 -mb-12 '>
            <button type="submit" onClick={() => setCount(count + 1)} className='bg-neonGreen w-14 h-14 rounded-full flex justify-center items-center hover:shadow-[0_0_30px_0px] hover:shadow-neonGreen transition'>
              <img src={diceButton} alt="buttonIcon" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

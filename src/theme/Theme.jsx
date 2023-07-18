import React from 'react';
import './theme.css';
import {IoMdClose} from 'react-icons/io'

const Theme = () => {
  const mainBody = document.querySelector("body");

  /* ==========Background Color Theme codes============ */
  const setBackDark = () => {
    mainBody.setAttribute('data-themeBg', 'bgDark');
    localStorage.setItem("selectedTheme","bgDark");
  }

  const setBackBlack = () => {
    mainBody.setAttribute('data-themeBg', 'bgBlack');
    localStorage.setItem("selectedTheme","bgBlack");
  }
  const setBackLight = () => {
    mainBody.setAttribute('data-themeBg', 'bgLight');
    localStorage.setItem("selectedTheme","bgLight");
  }
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "bgDark") {
    setBackDark();
  } else if (selectedTheme === "bgBlack") {
    setBackBlack();
  }
  /* ==========Background Color Theme codes============ */
  const themeViolet = ()=> {
    mainBody.setAttribute('data-themePrimary','colorViolet');
    localStorage.setItem("selectedPrimary","colorViolet");
  }
  const themeGreen = ()=> {
    mainBody.setAttribute('data-themePrimary' , 'colorGreen');
    localStorage.setItem("selectedPrimary","colorGreen");
  }
  const themeBlue = ()=> {
    mainBody.setAttribute('data-themePrimary' , 'colorBlue');
    localStorage.setItem("selectedPrimary","colorBlue");
  }
  const themeRed = ()=> {
    mainBody.setAttribute('data-themePrimary', 'colorRed');
    localStorage.setItem("selectedPrimary","colorRed");
  }
  const themePink = ()=> {
    mainBody.setAttribute('data-themePrimary' ,'colorPink');
    localStorage.setItem("selectedPrimary","colorPink"); 
  }

  const selectedPrimary = localStorage.getItem("selectedPrimary");
  switch (selectedPrimary) {
    case "colorViolet": themeViolet ();
      break;
    case "colorGreen": themeGreen ();
      break;
    case "colorRed": themeRed ();
      break;
    case "colorPink": themePink ();
      break;
    default: 
  }

  /* ==========Primary color Theme codes============ */

  return (
    <div className='theme_container' onClick={(e) => {
      e.target.classList.contains('pop')?
      document.querySelector('.theme_container').classList.remove('pop'):
      '' 
    }}> 
        <aside className="theme_box">
                <h4>Customize Your Theme</h4>
                <p>Change the primary and background color to your preference</p>
             <div className="colors_container">
                <div className="primary_container">
                    <h6>Primary Color</h6>
                    <div className="primary_colors">
                        <div onClick={themeViolet} className="color violet"></div>
                        <div onClick={themeGreen} className="color green"></div>
                        <div onClick={themeBlue} className="color blue"></div>
                        <div onClick={themeRed} className="color red"></div>
                        <div onClick={themePink} className="color pink"></div>
                    </div>
                </div>

                <div className="background_container">
                    <h6>Background Color</h6>
                    <div className="background_colors">
                        <div onClick={setBackLight} className="bg_color bg_white">White</div>
                        <div onClick={setBackDark} className="bg_color bg_Dark">Dark</div>
                        <div onClick={setBackBlack} className="bg_color bg_black">Black</div>
                    </div>
                </div>
                
            </div>

        </aside>
    </div>
  )
}

export default Theme
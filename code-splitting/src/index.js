import nav from "./nav";
import * as GSAP from 'gsap'
  // static code splitting, vanilla way to lazy load any of your code
  // providing a path to the actual module itself
const getFooter = () => import("./footer");
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

button.addEventListener('click', e => {
  // dynamic import
  getFooter().then(footerModule => {
    document.body.appendChild(footerModule.footer);
  });

});

document.body.appendChild(button);
document.body.appendChild(image);
// document.body.appendChild(footer);

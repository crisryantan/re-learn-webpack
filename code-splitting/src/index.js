import nav from "./nav";
const getGSAP = () => import('gsap');
  // static code splitting, vanilla way to lazy load any of your code
  // providing a path to the actual module itself
const getFooter = () => import("./footer");
// code splitting named exports
const getLodashUniq = () => import("lodash-es/uniq")
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";


const setButtonStyle = (color) => import(`./button-styles/${color}.js`);

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

button.addEventListener('click', e => {
  // dynamic import
  getFooter().then(footerModule => {
    document.body.appendChild(footerModule.footer);
  });

  getGSAP().then(gsap => {
    console.log(gsap)
  })

  // set on runtime condition
  // dynamic code splitting
  setButtonStyle('red').then(styleStr => {
    button.style = styleStr.default;
  })
});

document.body.appendChild(button);
document.body.appendChild(image);
// document.body.appendChild(footer);

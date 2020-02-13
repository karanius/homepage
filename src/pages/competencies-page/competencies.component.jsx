
import React from 'react';
import './competencies.styles.scss';

import gearSVG from '../../animations/svgs/gear.svg';
import gear2SVG from '../../animations/svgs/gear2.svg';

import htmlSVG from '../../animations/svgs/html5.svg';
import cssSVG from '../../animations/svgs/css3.svg';
import sassSVG from '../../animations/svgs/sass.svg';
import bootstrapSVG from '../../animations/svgs/bootstrap.svg';
import jsSVG from '../../animations/svgs/js.svg';
import jsuqerySVG from '../../animations/svgs/jquery.svg'
import nodeSVG from '../../animations/svgs/node.svg';
import reactSVG from '../../animations/svgs/react.svg';
import gitSVG from '../../animations/svgs/git.svg';
import mysqlSVG from '../../animations/svgs/mysql.svg'
import mongoSVG from '../../animations/svgs/mongo.svg'

class Competencies extends React.Component {

  constructor(){
    super()

    this.state={
        initialScrollExecuted: null,
    }
  }

  initialIntroScrol = () => { 
    let requestId;
    let top = 0;
    const scrollDown = async () => {
      console.log('~~')
      if (top <= 100) {
        window.scrollTo({
          top: top ,
          behavior:"smooth"
        })
        top = top + 10
        setTimeout(()=>requestAnimationFrame(scrollDown),30)
      }else {
        this.setState({initialScrollExecuted: true});
        cancelAnimationFrame(requestId)
      }
    }
    requestId = requestAnimationFrame(scrollDown)
  }


  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollAnimationFunciton);
  }

  componentDidMount(){
    this.initialIntroScrol();
    window.addEventListener('scroll', this.scrollAnimationFunciton);
  }

  scrollAnimationFunciton = (e) => {
    const distanceFromTop = window.scrollY;
    console.log(distanceFromTop)

    //postion adjustments section:
      //.gear-holder - top postion:
        document.querySelector('.gear-holder').style.top = 75 + 'px';
      //.gear-holder - left postion:
        document.querySelector('.gear-holder').style.left =  ( (window.innerWidth / 2) ) + "px";
        // - (document.querySelector(".gear-holder").offsetWidth  / 2 )
      // .dev-kavian - height position
        document.querySelector('.dev-kavian').style.top =  ((document.querySelector('.gear-holder').offsetTop) + ((document.querySelector('.gear-holder').offsetHeight - document.querySelector('.dev-kavian').offsetHeight ) / 2 ) ) + 'px'
        //.dev-kavian - left position
        document.querySelector('.dev-kavian').style.left = ((window.innerWidth / 2) - (document.querySelector('.dev-kavian').offsetWidth / 2) ) + 'px'

        //right bracket - top postion
        // document.querySelector('.right-bracket').style.top = ( 73 + document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px';
        // left bracket - top position
        // document.querySelector('.left-bracket').style.top = ( 73 + document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px';
        // .msg-title - left position
        // document.querySelector('.msg-title').style.left = ((window.innerWidth / 2) -  (document.querySelector('.msg-title').offsetWidth / 2) )+ 'px'
        // .msg-title - bottom position
        // document.querySelector('.msg-title').style.bottom = ( 500 - document.querySelector('.middle-slash').offsetHeight ) + 'px'
        
        
        //logic section:
          // .dev-kavian - opacity
            document.querySelector('.dev-kavian').style.opacity =  `${1 / ((distanceFromTop ) + 1) - 0.05}`;
          //  .gear-holder - opacity
            document.querySelector('.gear-holder').style.opacity = distanceFromTop / 100 ;

        if (distanceFromTop < 100) {
          //initialise section :
          if (this.state.initialScrollExecuted){
            this.setState({initialScrollExecuted:null});

            setTimeout(()=>{document.querySelector('.dev-kavian').classList.remove("hide")},500)

            let requestId;
            let listOfFirstElem = document.querySelectorAll('.firstLoad');
            let pos = 0;
            const firstLoad = () => {
              console.log("~~")
              if (pos <= listOfFirstElem.length - 1) {
                listOfFirstElem[pos].classList.remove("hide");
                pos = pos + 1
                setTimeout(()=>{requestAnimationFrame(firstLoad)},200)
              } else {
                console.log('firstLoad: done')
                  document.querySelectorAll('.title-logo').forEach(el => {
                    setTimeout(()=>{el.classList.remove('hide')},700)
                  })
                cancelAnimationFrame(requestId)
              }
            }
            requestId = requestAnimationFrame(firstLoad)
          }

          
          


          // document.querySelector('.middle-slash').style.opacity = distanceFromTop / 100;
          // document.querySelector('.right-bracket').style.opacity = distanceFromTop / 100;
          // document.querySelector('.left-bracket').style.opacity = distanceFromTop / 100;
          // // document.querySelector('.msg-title').style.opacity = distanceFromTop / 100;
          // document.querySelector('.left-bracket').style.transform = `translate(${distanceFromTop}px,0)`;
          // document.querySelector('.right-bracket').style.transform = `translate(-${distanceFromTop}px,0)`;
      }     



  } 

  render(){
    return(
      <div className="comp-main-container">

        <div className="firstCard">
            
          <div className="dev-kavian hide" >
            DEV KAVIAN
          </div>

          <div className="gear-container">
            <div className="gear-holder">
              <div className="gear-holder-left">
                <img className="left-gear" width="50"  alt="gear" src={gear2SVG} />
              </div>
              <div className="gear-holder-middle">
                <div className="middle-gear-wrapper">    
                  <img className="middle-gear"   alt="gear" src={gearSVG} />
                  <img className="small-middle-gear" width="50"  alt="gear" src={gear2SVG} />
                  <img className="smaller-middle-gear" width="50"  alt="gear" src={gear2SVG} />
                </div>
              </div>
              <div className="gear-holder-right">
                <img className="right-gear" width="50"  alt="gear" src={gear2SVG} />
              </div>
            </div>
          </div>

 

          <div className="msg-container">
            <div className="msg-title-container">
              <h1 className="msg-title firstLoad first-card-intro hide">
                I Am: <br/>Full-Stack
              </h1>
              <ul className="list-container">
                <li className="list">
                  <p className="title-logo hide">
                    {`</>`}
                  </p>
                  <h3 className="firstLoad first-card-intro hide" >Front-End Design</h3> <p className=" firstLoad first-card-intro hide">To Make It Look Good.<br/>User Friendly.</p>
                </li>
                <li className="list">
                  <p className="title-logo hide">
                    {`{ }`}
                  </p>
                  <h3 className="firstLoad first-card-intro hide">Back-End Design</h3> <p className="firstLoad first-card-intro hide">To Make It Function.<br/>No Aheadaches.</p>
                </li>
              </ul>
            </div>
          </div>


        </div>


        <div className="second-card">
          <div>
            <h1 className="tech-stack-title"> 
              Tech Stack :
            </h1>
            <div className="tech-stack-logos-container">
              <div className="tech-stack-logo">
                <img alt='HTML: Hyper Text Markup Language Version 5' title='HTML: Hyper Text Markup Language Version 5' src={htmlSVG} />
                <img alt='CSS: Cascading Style Sheets Version 3' title='CSS: Cascading Style Sheets Version 3' src={cssSVG} />
                <img alt='Sass: Syntactically Awesome Style Sheets' title='Sass: Syntactically Awesome Style Sheets' src={sassSVG} />
                <img alt='Bootstrap: a front end library' title='Bootstrap: a front end library' src={bootstrapSVG} />
                <img alt='JS: Javascript' title='JS: Javascript' src={jsSVG} />
                <img alt='jQuery: javascript framework' title='jQuery: javascript framework' src={jsuqerySVG} />
                <img alt='Node.js: JavaScript run-time environment that executes code outside a browser.' title='Node.js a JavaScript run-time environment that executes code outside a browser.' src={nodeSVG} />
                <img alt='React.js: Front End javascript Framework' title='React.js Front End javascript Framework' src={reactSVG} />
                <img alt='Git: version-control system' title='Git: version-control system' src={gitSVG} />
                <img alt='MySQL: Structured Query Language' title='MySQL: Structured Query Language' src={mysqlSVG} />
                <img alt='MongoDB: noSQL database technology' title='MongoDB: noSQL database technology' src={mongoSVG} />
                <p>and more</p>

              </div>
              
            </div>

          </div>


        </div>



            <div className="skill-container">

              <div className="skill-logos">
                {/* html - css - sass  - bootstrap - js - node - python - express - mongodb - jquery - react - react-redux - react-router - git */}
              </div>

            </div>




        
        <div className="testHeight" style={{height:"2000px"}}></div>




      </div>
    )
  }
}

export default Competencies;











{/* <div className="developer-logo-container">
<div className="left-bracket-container">
    <div className="left-bracket">{`<`}</div>
</div>

<div className="middle-slash-container">
  <div className="middle-slash">{`/`}</div>
</div>

<div className="right-bracket-container"> 
  <div className="right-bracket">{'>'}</div>
</div>
</div> */}










////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import './competencies.styles.scss';


// class Competencies extends React.Component {
//   constructor(){
//     super()

//     this.state={
//         initialScrollExecuted: null,
//         rightBracket:-5,
//         bracketsComeIn: false
//     }
//   }

//   initialIntroScrol = () => { 
//     let requestId;
//     let top = 0;
//     const scrollDown = async () => {
//       console.log('running')
//       if (top <= 100) {
//         window.scrollTo({
//           top: top ,
//           behavior:"smooth"
//         })
//         top = top + 10
//         setTimeout(()=>requestAnimationFrame(scrollDown),30)
//       }else {
//         this.setState({initialScrollExecuted: true});
//         cancelAnimationFrame(requestId);
//       }
//     }
//     requestId = requestAnimationFrame(scrollDown)
//   }



//   componentDidMount(){
//     this.initialIntroScrol();
//     window.addEventListener('scroll', this.animationFnction);
//     // let maxD //max point from data
//     // let minD //min point from data    
//     // let maxN // max point of the range    
//     // let minN // min point of the range    
//     // let x//current point to be normalized
//     // // const outputY =( (x - minD * ( maxN - minN  ) / maxD - minD ) + minN
//     // // (((((x) - (minD)) *  ((maxN) - (minN)))   / ((maxD) - (minD)))  + (minN))

    

//   }

//   //for left bracket:
//   //start point = left 0 
//   //end point or max point = document.querySelector('.left-bracket-container').offsetWidth - document.querySelector('.left-bracket').offsetWidth;

//   // for right bracket :
//   // start point = right 0
//   // end point  or max point = document.querySelector('.right-bracket-container').offsetWidth - document.querySelector('.right-bracket').offsetWidth


//   scrollAdjuster = (top) => {
//     window.scrollTo({
//       top: top ,
//       behavior:"smooth"
//     })
//   }

//   animationFnction = (e) => {
//     const distanceFromTop = window.scrollY;
//     console.log(distanceFromTop)

//     //postion adjustments: ~~~
//       //right bracket:
//       document.querySelector('.right-bracket').style.top = (63 + document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px';
//       // left bracket:
//       document.querySelector('.left-bracket').style.top = (63 + document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px';
//       // .msg-title - left:
//       document.querySelector('.msg-title').style.left = ((window.innerWidth / 2) -  (document.querySelector('.msg-title').offsetWidth / 2) )+ 'px'
//       // .msg-title - bottom:
//       document.querySelector('.msg-title').style.bottom = ( 500 - document.querySelector('.middle-slash').offsetHeight ) + 'px'
//       // .dev-kavian
//       document.querySelector('.dev-kavian').style.top =  ( document.querySelector('.middle-slash').offsetTop - (document.querySelector('.middle-slash').offsetHeight / 2)) - ((document.querySelector('.right-bracket').offsetHeight - document.querySelector('.middle-slash').offsetHeight) / 2) + 'px'


//     if (distanceFromTop < 18 && this.state.initialScrollExecuted ) {
//       document.querySelector('.dev-kavian').classList.remove("hide");
//       document.querySelector('.dev-kavian').style.left = ((window.innerWidth / 2) - (document.querySelector('.dev-kavian').offsetWidth / 2) ) + 'px'
//     }
    
//     if (distanceFromTop < 100) {
//       if (this.state.initialScrollExecuted){
//         document.querySelector('.dev-kavian').style.opacity =  `${1 / ((distanceFromTop ) + 1)}`;
//       }
      
//       document.querySelector('.middle-slash').style.opacity = distanceFromTop / 100;
//       document.querySelector('.right-bracket').style.opacity = distanceFromTop / 100;
//       document.querySelector('.left-bracket').style.opacity = distanceFromTop / 100;
//       document.querySelector('.msg-title').style.opacity = distanceFromTop / 100;
//       document.querySelector('.left-bracket').style.transform = `translate(${distanceFromTop}px,0)`;
//       document.querySelector('.right-bracket').style.transform = `translate(-${distanceFromTop}px,0)`;



//     }

    

    



//   }

//   render(){
//     return(
//       <div className="comp-main-container">
        
//         <div className="dev-kavian hide" >
//           DEV KAVIAN
//         </div>


        // <div className='first-section'>
        //   <div className="dev-bracket-container">
        //     <div className="left-bracket-container">
        //         <div className="left-bracket">{`<`}</div>
        //     </div>

        //     <div className="middle-slash-container">
        //       <div className="middle-slash">{`/`}</div>
        //     </div>

        //     <div className="right-bracket-container"> 
        //       <div className="right-bracket">{'>'}</div>
        //     </div>
        //   </div>

        // </div>


//           <div className="msg-container">
//             <h1 className="msg-title">
//               FRONT END DESIGN
//             </h1>
//           </div>


//           <div style={{height:"2000px"}}></div>
//         <section className="content">
//           <article >
//             <h1>something</h1>
//             <hr/>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore delectus a ea quod voluptatem cumque sunt sed nulla facilis! Nihil nobis aliquam nam sed placeat earum ab libero optio.</p>
//           </article>
//         </section>
//       </div>
//     )
//   }
// }

// export default Competencies;
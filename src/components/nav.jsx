import { Logo } from './Logo';
import { SideHandler } from './navMobile';  



export function scrollToElement(elementId) {
  const element = document.querySelector(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// export const NavWrapper = styled.nav`
//     // border-bottom: solid 6px rgb(0, 0, 0, 0.1);
//     border-bottom: solid 3px rgb(241, 151, 32, 0.1);
//     // box-shadow: 0px 0px 1000px 1px ;
//     box-shadow: 0px 0px 1000px 1px rgb(241, 151, 32);
//     background-color: white;

//     padding: 0.6rem;
    
//     display: grid;
//     grid-template-columns: auto auto;
//     position: sticky;
//     top: 0;
//     z-index: 4;

//     .logo-link{
//         justify-self: left;
//         cursor: pointer;
//         border: none;
//         background: none;
//         border-radius: 10px;
//         transition: 0.8s;
//     }    
//     .logo-link:hover{
//         box-shadow: 0px 0px 1000px 1px rgb(241, 151, 32);
//         background-color: rgb(241, 151, 32, 0.14);
//     }    
//     .nav-btn-container{
//         display: grid;
//         grid-template-columns: repeat(2, auto);
//         gap: 1rem;
//         justify-self: right;
//         align-items: center;
//         margin-right: 1rem;
//     }    
//     .nav-btn{
//         background-color: rgb(241, 151, 32);
//         color: white;
//         border: none;
//         border-radius: 4px;
//         font-size: 16px;
//         font-weight: bold;
//         padding: 0.4rem;

//         cursor: pointer;
//         transition: 0.4s;
//     }    
//     .nav-btn:hover{
//         background-color: black;
//     }    

//     @media(max-width: 820px){
//         grid-tmplate-columns: auto;
//         justify-content: right;

//         .nav-link-btn{
//             display: none;
//         }    

//         .side-nav-btn{
//             display: block;
//             cursor: pointer;
//             border: none;
//             background-color: transparent;
//         }    
//         .side-icon-container{
//             display: grid;
//             width: 50px;
//             grid-template-rows: repeat(3, auto);
//             gap: 6px;
//             background-color: transparent;
//         }    
//         .oval{
//             background-color: transparent;
//             border: solid black 3px;
//             // border-radius: 5px;
//             border-top-left-radius: 24% 100%;
//             border-top-right-radius: 24% 100%;
//             border-bottom-left-radius: 24% 100%;
//             border-bottom-right-radius: 24% 100%;
//             width: 50px;
//             height: 10px;
//         }    
//     }    
//     @media(min-width: 821px){
//         .side-nav-btn{
//             display: none;
//         }    
//     }    
//     `
    
    export const NavBar = () => {
        
        return(
            <div className='nav-wrapper'>
                <button onClick={()=> scrollToElement('.header-section')} className='logo-link nav-link-btn'>
                    <Logo></Logo>
                </button>
                <div className="nav-btn-container nav-link-btn">
                    <button onClick={()=> scrollToElement('.booking-section')} className='contact-nav-btn nav-btn'>contact</button>
                    <button onClick={()=> scrollToElement('.help-section')} className='service-nav-btn nav-btn'>service</button>
                </div>
                <button onClick={() => SideHandler()} className='side-nav-btn'>
                    <div className='side-icon-container'>
                        <div className='oval oval1'></div>
                        <div className='oval oval2'></div>
                        <div className='oval oval3'></div>
                    </div>
                </button>

            
            <style>
               {`.nav-wrapper {
                   border-bottom: solid 3px rgba(241, 151, 32, 0.1);
                   box-shadow: 0px 0px 1000px 1px rgba(241, 151, 32);
                   background-color: white;
                   padding: 0.6rem;
                   display: grid;
                   grid-template-columns: auto auto;
                   position: sticky;
                   top: 0;
                   z-index: 4;
               }
               
               .logo-link {
                   justify-self: left;
                   cursor: pointer;
                   border: none;
                   background: none;
                   border-radius: 10px;
                   transition: 0.8s;
               }
               
               .logo-link:hover {
                   box-shadow: 0px 0px 1000px 1px rgba(241, 151, 32);
                   background-color: rgba(241, 151, 32, 0.14);
               }
               
               .nav-btn-container {
                   display: grid;
                   grid-template-columns: repeat(2, auto);
                   gap: 1rem;
                   justify-self: right;
                   align-items: center;
                   margin-right: 1rem;
               }
               
               .nav-btn {
                   background-color: rgba(241, 151, 32);
                   color: white;
                   border: none;
                   border-radius: 4px;
                   font-size: 16px;
                   font-weight: bold;
                   padding: 0.4rem;
                   cursor: pointer;
                   transition: 0.4s;
               }
               
               .nav-btn:hover {
                   background-color: black;
               }
               
               @media (max-width: 820px) {
                   .nav-wrapper {
                       grid-template-columns: auto;
                       justify-content: right;
                   }
               
                   .nav-link-btn {
                       display: none;
                   }
               
                   .side-nav-btn {
                       display: block;
                       cursor: pointer;
                       border: none;
                       background-color: transparent;
                   }
               
                   .side-icon-container {
                       display: grid;
                       width: 50px;
                       grid-template-rows: repeat(3, auto);
                       gap: 6px;
                       background-color: transparent;
                   }
               
                   .oval {
                       background-color: transparent;
                       border: solid black 3px;
                       border-top-left-radius: 24% 100%;
                       border-top-right-radius: 24% 100%;
                       border-bottom-left-radius: 24% 100%;
                       border-bottom-right-radius: 24% 100%;
                       width: 40px;
                       height: 4px;
                   }
               }
               
               @media (min-width: 821px) {
                   .side-nav-btn {
                       display: none;
                   }
               }`}
            </style>
            </div>
        )
    }

    export const BtnHero = () => {
        return <button className="header-cta-btn" onClick={() => scrollToElement('.booking-section')}>claim my free call</button>
    }
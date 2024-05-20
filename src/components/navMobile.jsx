import { scrollToElement } from "./nav";


// export const NavWrapperMobile = styled.nav`
//     display: grid;
//     grid-template-columns: auto auto;
    
//     position: fixed;
//     right: -100%;
//     top: 0;
//     z-index: 10;

//     background-color: rgb(241, 151, 32);
//     height: 100vh;
//     transition: 1s;
    
//     .extra-layer-wrapper{
//         display: grid;
//         grid-template-rows: auto auto auto 1fr;
//         justify-content: left;
//         z-index: 12;
//         gap: 0.4rem;
        
//         height: 100vh;
//         background-color: white;
//     }
//     .logo-link-mobile{
//         background: none;
//         border: none;
//         cursor: pointer;
//     }
//     .nav-btn-mobile{
//         justify-self: left;
//      cursor: pointer;
//         text-align: left;
//         position: relative;

//         background: none;
//         border: none;
//         font-size: 18px;
//         padding: 10px 0px 10px 0px;
//         width: 100%;
//     }


//     .side-nav-close{
//         align-self: top;
//         justify-self: center;
//         justify-content: center;
//         align-items: center;
//         position: relative;
        
//         background-color: transparent;
//         border: none;
//         margin-top: 8px;
//         margin-inline: 0.3rem;
//         height: 32px;
//         width: 32px;
//         cursor: pointer;
//     }
//     .side-nav-close::before,
//     .side-nav-close::after {
//         content: "";
//         position: absolute;
//         top: 50%;
//         left: 0;
//         width: 100%;
//         height: 3.6px;
//         background-color: black;
//         border-radius: 8px;
//     }

//     .side-nav-close::before {
//         transform: rotate(45deg);
//     }

//     .side-nav-close::after {
//         transform: rotate(-45deg);
//     }

//     .nav-btn-mobile:hover{
//         color: white;
//     }
//     .nav-btn-mobile:hover .btn-bg{width: 100%}
//     .nav-btn-mobile::before{
//         transition: opacity 0.4s ease, transform 0.4s ease;
//         content: "- ";
//         right: 10px;
//         opacity: 0;
//         transform: translateX(-100%); 
//         margin-left: 8px;  
//     }
//     .nav-btn-mobile:hover::before{
//         opacity: 1;
//         transform: translateX(0);
//     }
//     .btn-bg{
//         position: absolute;
//         left: 0px;
//         top: 0px;
//         height: 100%;
//         background-color: rgb(241, 151, 32);
//         width: 0px;
//         z-index: -2;
//         transition: 0.4s;
//         border-top-right-radius: 6% 6%;
//         border-bottom-right-radius: 6% 6%;
//     }
//     .fillout{
//         width: 50vw;
//     }
//     @media(max-width: 820px){
//         &.side-nav-on{
//             right: 0;
//         }
//         .extra-layer-wrapper{
//             right: 0;
//         }
//     }
//     @media(min-width: 821px){
//         right: -100;
//     }
// `


export const SideHandler = () =>{
    const target = document.querySelector('.nav-mobile-container');
    target.classList.toggle('side-nav-on');
}   

export const SideLinkHandler = (target) => {
    SideHandler();
    scrollToElement(target);
    // scrollTo(target);
};  


export const NavBarMobile = () => {
    return(
        <div className='nav-mobile-container'>
            <button onClick={() => SideHandler()} className='side-nav-close' aria-label='close side navigation'></button>
            <div className="extra-layer-wrapper">
                <button onClick={()=>SideLinkHandler('.header-section')} className='home-nav-btn-mobile nav-btn-mobile'>home<div className='btn-bg'/></button>
                <button onClick={()=>SideLinkHandler('.booking-section')} className='contact-nav-btn-mobile nav-btn-mobile'>Contact<div className='btn-bg'/></button>
                <button onClick={()=>SideLinkHandler('.help-section')} className='service-nav-btn-mobile nav-btn-mobile'>Service<div className='btn-bg'/></button>
                <div className='fillout'/>
            </div>


            <style>
                {`
                .nav-mobile-container {
                  display: grid;
                  grid-template-columns: auto auto;
                  position: fixed;
                  right: -100%;
                  top: 0;
                  z-index: 10;
                  background-color: rgb(241, 151, 32);
                  height: 100vh;
                  transition: 1s;
                }
                
                /* Nested extra-layer-wrapper */
                .nav-mobile-container .extra-layer-wrapper {
                  display: grid;
                  grid-template-rows: auto auto auto 1fr;
                  grid-template-columns: 1fr;
                  gap: 0.4rem;
                  justify-content: left;
                  z-index: 12;
                  height: 100vh;
                  width: 50vw;
                  background-color: white;
                }
                
                /* Additional classes */
                .nav-mobile-container .logo-link-mobile {
                  background: none;
                  border: none;
                  cursor: pointer;
                }
                
                .nav-mobile-container .nav-btn-mobile {
                  justify-self: left;
                  cursor: pointer;
                  text-align: left;
                  position: relative;
                  background: none;
                  border: none;
                  font-size: 18px;
                  padding: 10px 0px 10px 0px;
                  width: 100%;
                }
                
                .nav-mobile-container .side-nav-close {
                  align-self: top;
                  justify-self: center;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  background-color: transparent;
                  border: none;
                  margin-top: 8px;
                  margin-inline: 0.3rem;
                  height: 32px;
                  width: 32px;
                  cursor: pointer;
                }
                
                /* Pseudo-elements styling */
                .nav-mobile-container .side-nav-close::before,
                .nav-mobile-container .side-nav-close::after {
                  content: "";
                  position: absolute;
                  top: 50%;
                  left: 0;
                  width: 100%;
                  height: 3.6px;
                  background-color: black;
                  border-radius: 8px;
                }
                
                .nav-mobile-container .side-nav-close::before {
                  transform: rotate(45deg);
                }
                
                .nav-mobile-container .side-nav-close::after {
                  transform: rotate(-45deg);
                }
                
                /* Hover effects */
                .nav-mobile-container .nav-btn-mobile:hover {
                  color: white;
                }
                
                .nav-btn-mobile:hover .btn-bg {
                  width: 100%;
                }
                
                /* Additional styles */
                .nav-mobile-container .nav-btn-mobile::before {
                  transition: opacity 0.4s ease, transform 0.4s ease;
                  content: "- ";
                  right: 10px;
                  opacity: 0;
                  transform: translateX(-100%);
                  margin-left: 8px;
                }
                
                .nav-mobile-container .nav-btn-mobile:hover::before {
                  opacity: 1;
                  transform: translateX(0);
                }
                
                .nav-mobile-container .btn-bg {
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  height: 100%;
                  background-color: rgb(241, 151, 32);
                  width: 0px;
                  z-index: -2;
                  transition: 0.4s;
                  border-top-right-radius: 6% 6%;
                  border-bottom-right-radius: 6% 6%;
                }
                
                /* Media queries */
                @media (max-width: 820px) {
                  .nav-mobile-container.side-nav-on {
                    right: 0;
                  }
                  .nav-mobile-container .extra-layer-wrapper {
                    right: 0;
                  }
                }
                
                @media (min-width: 821px) {
                  .nav-mobile-container {
                    right: -100;
                  }
                }`}
            </style>
        </div>
    )
}


// re-purposed from demo https://codepen.io/sysrytwr6uw4/pen/jOyZWYx

import React, { useState , useEffect , useCallback , useRef } from 'react';
import { infoType } from './search-api-slice';
import './tilt-card.css';

function setUpCard(card:any){

    /*
    var opened = [];
    
      VanillaTilt.init(card, {});
      
      let card_body = card.querySelector('.card-body');  

      card.anime0 = anime({
          targets: card_holder,
          translateY: 75,
          easing: 'easeInOutQuad',
          duration: 200,
          autoplay: false,
          direction: 'reverse',
          complete: () => { 
            
            card.anime0.reverse(); 
            if(card.markedForClosing){
              card.markedForClosing = false;
              card.isAnimating = false;
            }else{
              let alreadyOpenedCard = this.opened.pop();
              if(alreadyOpenedCard){
                alreadyOpenedCard.markedForClosing = true;
                alreadyOpenedCard.isAnimating = false;
                alreadyOpenedCard.play();
              }
              this.opened.push(card);
            }
          }
        });

      card.anime1 = anime({
          targets: card_body,
          height: 0,
          opacity: 0,
          easing: 'easeInOutQuad',
          duration: 200,
          autoplay: false,
          direction: 'reverse',
          complete: () => { card.anime1.reverse(); }
        });

      card.play = () => {
        if(card.isAnimating) return;
        card.isAnimating = true;
        card.anime0.play();
        card.anime1.play();

      }
      
      card.addEventListener('mouseover', card.play );
      */
     console.log('setup', card);
      card.addEventListener('mouseover', ()=>console.log('M O') );


}


function useHookWithRefCallback() {
    const ref = useRef(null)
    const setRef = useCallback((node:any) => {
      if (ref.current) {
        // Make sure to cleanup any events/references added to the last instance
      }
      
      if (node) {
        // Check if a node is actually passed. Otherwise node would be null.
        // You can now do what you need to, addEventListeners, measure, etc.
        setUpCard(node);
      }
      
      // Save a reference to the node
      ref.current = node
    }, [])
    
    return [setRef]
  }
  











export function TiltCard(props:infoType) {


    // In your component you'll still recieve a `ref`, but it 
    // will be a callback function instead of a Ref Object
   
    const [ref] = useHookWithRefCallback();
        
    //ref={ref}

    return <div className="card-holder" ref={ref}>  
            <div className="card mb-3">
                <img className="card-img-top"
                    src={props.artworkUrl100}
                    alt="Card image cap"
                    key={"img_" + props.trackId.toString()}>
                </img>
                <div className="card-img-overlay">
                    <div className="card-icon"><i className="fab fa-codepen"></i></div>
                    <div className="card-title">{props.artistName}</div>
                </div>
                <div className="card-body">
                    <p className="card-body--three-lines">{props.longDescription}</p>
                </div>
                <div className="card-footer">
                    <div className="card--link-more">
                        Find out more
                    </div>
                </div>
            </div>
    </div> 
  }
  

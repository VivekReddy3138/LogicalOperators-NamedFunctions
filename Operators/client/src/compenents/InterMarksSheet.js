import React, { useRef } from 'react'

function InterMarksSheet() {

  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let engInputRef = useRef();
   let sanInputRef = useRef();
   let maths1aInputRef = useRef();
   let maths1bInputRef = useRef();
   let phyInputRef = useRef();
   let chemInputRef = useRef();
   let resultParaRef = useRef();

   let engSpanRef = useRef();
   let sanSpanRef = useRef();
   let maths1aSpanRef = useRef();
   let maths1bSpanRef = useRef();
   let phySpanRef = useRef();
   let chemSpanRef = useRef();

   let CalculateResult = ()=>{
    let firstName = (firstNameInputRef.current.value);
    let lastName = (lastNameInputRef.current.value);
   let engMarks = Number(engInputRef.current.value);
   let sanMarks = Number(sanInputRef.current.value);
   let maths1aMarks = Number(maths1aInputRef.current.value);
   let maths1bMarks = Number(maths1bInputRef.current.value);
   let phyMarks = Number(phyInputRef.current.value);
   let chemMarks = Number(chemInputRef.current.value);
   let totalMarks = engMarks + sanMarks + maths1aMarks + maths1bMarks + phyMarks + chemMarks;
    
   let result;
   if(engMarks <35 || sanMarks <35 || maths1aMarks <25 || maths1bMarks <25 || phyMarks <21 || chemMarks <21){
   result = "failed";
   }else{
   result = "Passed";
   }

   let perc = (totalMarks/600)*100

   engSpanRef.current.innerHTML = engMarks >= 35? "Pass" : "Fail";
   sanSpanRef.current.innerHTML = sanMarks >= 35? "Pass" : "Fail";
   maths1aSpanRef.current.innerHTML = maths1aMarks >= 25? "Pass" : "Fail";
   maths1bSpanRef.current.innerHTML = maths1bMarks >= 25? "Pass" : "Fail";
   phySpanRef.current.innerHTML = phyMarks >= 21? "Pass" : "Fail";
   chemSpanRef.current.innerHTML = chemMarks >= 21? "Pass" : "Fail";
  
   resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} in Inter and got Total Marks of ${totalMarks} with pecentage of ${perc.toFixed(2)}%`;

    console.log("resuts of vivek reddy")
   }

    let engOnFocus = () => {
      engInputRef.current.style.backgroundColor = "yellow";
      console.log("eng onFocus");
    }
     
    let engOnBlur = () => {
      engInputRef.current.style.backgroundColor = "";
      console.log("eng onBlur");
    }

    let engOnChange = () => {
      if(engInputRef.current.value >= 0 && engInputRef.current.value <= 100){
        if(engInputRef.current.value >= 35 ){
          engSpanRef.current.innerHTML = "Pass";
          engSpanRef.current.style.backgroundColor = "Green";
         }else{
          engSpanRef.current.innerHTML = "Fail";
          engSpanRef.current.style.backgroundColor = "Red";
         }
       }else{
        engSpanRef.current.innerHTML = "Invalid";
        engSpanRef.current.style.backgroundColor = "pink";
       }
    }


    let sanOnFocus = () => {
      sanInputRef.current.style.backgroundColor = "yellow";
    }

    let sanOnBlur = () => {
      sanInputRef.current.style.backgroundColor = "";
    }

    let sanOnChange = () => {
      if(sanInputRef.current.value >= 0 && sanInputRef.current.value <= 100){
        if(sanInputRef.current.value >= 35 ){
          sanSpanRef.current.innerHTML = "Pass";
          sanSpanRef.current.style.backgroundColor = "Green";
         }else{
          sanSpanRef.current.innerHTML = "Fail";
          sanSpanRef.current.style.backgroundColor = "Red";
         }
       }else{
        sanSpanRef.current.innerHTML = "Invalid";
        sanSpanRef.current.style.backgroundColor = "pink";
       }

    }

   
    let maths1aOnFocus = () => {
      maths1aInputRef.current.style.backgroundColor = "yellow";
    }

    let maths1aOnBlur = () => {
      maths1aInputRef.current.style.backgroundColor = "";
    }

    let maths1aOnChange = () => {
      if(maths1aInputRef.current.value >= 0 && maths1aInputRef.current.value <= 75){
        if(maths1aInputRef.current.value >= 25 ){
          maths1aSpanRef.current.innerHTML = "Pass";
          maths1aSpanRef.current.style.backgroundColor = "Green";
         }else{
          maths1aSpanRef.current.innerHTML = "Fail";
          maths1aSpanRef.current.style.backgroundColor = "Red";
         }
       }else{
        maths1aSpanRef.current.innerHTML = "Invalid";
        maths1aSpanRef.current.style.backgroundColor = "pink";
       }
    }


  return (
    <div>
      <form>
        <div>
            <label>FirstName</label>
            <input ref={firstNameInputRef}
            onFocus={()=>{
              firstNameInputRef.current.style.backgroundColor = "yellow";
            }} 
            onBlur={()=>{
              firstNameInputRef.current.style.backgroundColor = "";
            }} 
            ></input>
            <span></span>
        </div>
        <div>
            <label>LastName</label>
            <input ref={lastNameInputRef}
            onFocus={()=>{
              lastNameInputRef.current.style.backgroundColor = "yellow";
            }} 
            onBlur={()=>{
              lastNameInputRef.current.style.backgroundColor = "";
            }} 
            ></input>
            <span></span>
        </div>
        <div>
            <label>English</label>
            <input  ref={engInputRef}
             onFocus={()=>{
              engOnFocus ();
              }}

             onBlur={()=>{
              engOnBlur ();
              }}

            onChange={()=>{
              engOnChange();
            }}

            ></input>
            <span ref={engSpanRef}></span>
        </div>
        <div>
            <label>Sanskrit</label>
            <input ref={sanInputRef}

           onFocus={()=>{
            sanOnFocus ();
           }}

           onBlur={()=>{
            sanOnBlur();
           }}

           onChange={()=>{
            sanOnChange()
           }}

            ></input>
            <span ref={sanSpanRef}></span>
        </div>
        <div>
            <label>Mathematics-1A</label>
            <input ref={maths1aInputRef}

            onFocus={()=>{
             maths1aOnFocus();
            }}

            onBlur={()=>{
             maths1aOnBlur();
            }}

            onChange={()=>{
             maths1aOnChange();
            }}

            ></input>
            <span ref={maths1aSpanRef}></span>
        </div>
        <div>
            <label>Mathematics-1B</label>
            <input ref={maths1bInputRef}
            onFocus={()=>{
              maths1bInputRef.current.style.backgroundColor = "yellow";
            }} 
            onBlur={()=>{
              maths1bInputRef.current.style.backgroundColor = "";
            }} 
            onChange={()=>{
              if(maths1bInputRef.current.value >= 0 && maths1bInputRef.current.value <= 75){
                if(maths1bInputRef.current.value >= 25 ){
                  maths1bSpanRef.current.innerHTML = "Pass";
                  maths1bSpanRef.current.style.backgroundColor = "Green";
                 }else{
                  maths1bSpanRef.current.innerHTML = "Fail";
                  maths1bSpanRef.current.style.backgroundColor = "Red";
                 }
               }else{
                maths1bSpanRef.current.innerHTML = "Invalid";
                maths1bSpanRef.current.style.backgroundColor = "pink";
               }
             
            }}
            ></input>
            <span  ref={maths1bSpanRef}></span>
        </div>
        <div>
            <label>Physics</label>
            <input ref={phyInputRef}
            onFocus={()=>{
              phyInputRef.current.style.backgroundColor = "yellow";
            }} 
            onBlur={()=>{
              phyInputRef.current.style.backgroundColor = "";
            }} 
            onChange={()=>{
              if(phyInputRef.current.value >= 0 && phyInputRef.current.value <= 60){
                if(phyInputRef.current.value >= 21){
                  phySpanRef.current.innerHTML = "Pass";
                  phySpanRef.current.style.backgroundColor = "Green";
                 }else{
                  phySpanRef.current.innerHTML = "Fail";
                  phySpanRef.current.style.backgroundColor = "Red";
                 }
               }else{
                phySpanRef.current.innerHTML = "Invalid";
                phySpanRef.current.style.backgroundColor = "pink";
               }  
            }}
            ></input>
            <span  ref={phySpanRef}></span>
        </div>
        <div>
            <label>Chemistry</label>
            <input ref={chemInputRef}
            onFocus={()=>{
              chemInputRef.current.style.backgroundColor = "yellow";
            }} 
            onBlur={()=>{
              chemInputRef.current.style.backgroundColor = "";
            }} 
            onChange={()=>{
              if(chemInputRef.current.value >= 0 && chemInputRef.current.value <= 60){
                if(chemInputRef.current.value >= 21){
                  chemSpanRef.current.innerHTML = "Pass";
                  chemSpanRef.current.style.backgroundColor = "Green";
                 }else{
                  chemSpanRef.current.innerHTML = "Fail";
                  chemSpanRef.current.style.backgroundColor = "Red";
                 }
               }else{
                chemSpanRef.current.innerHTML = "Invalid";
                chemSpanRef.current.style.backgroundColor = "pink";
               }
             
            }}
            ></input>
            <span  ref={chemSpanRef}></span>
        </div>
        <button type="button" onClick={()=>{
          
          CalculateResult();
          // alert(engInputRef.current.value);
          // engInputRef.current.value = "vivek";
          
                  }}
        > Calculate Result</button>
        <div>
        <p ref={resultParaRef}>please enter values</p>
        </div>
      </form>
    </div>
  )
}

export default InterMarksSheet

import react,{useState} from "react" ;

const Practice = ()=>{
    const [obj,setObj] = useState({ Name :"",
                                    Father :""
                                });
    const inputName =(event)=>{
        setObj((preValue)=>{
            if( event.target.name == "Name"){
                return(
                    {
                    Name : event.target.value , 
                     Father: preValue.Father
                    } );
            }
            else if(event.target.name == "Father")
            {
                return(
                    {
                        Name : preValue.Name ,   
                        Father: event.target.value
                    } 
                );
            
            }

        }) ;

    }
            
    const element = <div>
                      <form>
                            <h2>Welcome Enter your Details :</h2>
                            <h3>{obj.Name}'s father is {obj.Father}</h3>
                            <input type="text"
                             placeholder="Enter your Name"
                             name =  "Name"
                             onChange={inputName} 
                             value = {obj.Name}    
                             />
                              <br/>
                            <input type="text" 
                            placeholder="Enter Your Father Name"
                            name = "Father"
                            onChange={inputName}
                            value = {obj.Father}
                            />
                            <br/>
                            <button type="submit">click</button>
                        
                      
                      </form>  
                 </div>

                return element  ; 
            }
export default Practice ; 
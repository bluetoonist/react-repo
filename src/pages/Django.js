import React,{useState} from "react"

function Django(){
    const [flag,setFlag] = useState();
    const [current_pk,setCurrent_pk] = useState("");

    const onFlag = (e) =>{
        const current_flag = e.target.value;
        setFlag(current_flag);
      
    }

    // pk가 없는 값을 얻어올 때 처리해야됨
    const onReader = async(e) => {
        const reader = await fetch("http://127.0.0.1:8000/crud/index")
        .then(response => response.json())
        .then( (res) => {
            console.log(res);
            const get_max_pk = res[res.length-1].pk;
            
            setCurrent_pk(get_max_pk);
        })
        
    }
    

    const onSender = async (e) => {
        e.preventDefault();
        
        const title =  e.target[0].value;
        const content = e.target[1].value;
        

        console.log("onSender function " + current_pk);
        const URL = flag === "CREATE" ? "http://127.0.0.1:8000/crud/create" : "http://127.0.0.1:8000/crud/delete";
    
        const sender =  await fetch(URL,{
            method:"POST",    
    
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                title : title,
                content : content,
                pk : current_pk
            })
            
        })
        const response  = await sender.json()
        console.log(response)
    
    }


    return(
        <>
            <h1>Hello This is DJango Practice page</h1>
            
            <h2>CREATE</h2>
            <form onSubmit ={onSender}>
                <input type="text"  name="title" />
                <br/>
                <input type="text" name="content"/>
                <br/>
                <br></br>
                <input type="submit" onClick={onFlag} value="CREATE" />
                <input type="submit" onClick={onFlag} value="DELETE" />
        
            </form>

            <h2>READ</h2>
            <button onClick={onReader}> 콘솔 창을 확인</button>
        
        
        </>

    );

}

export default Django;
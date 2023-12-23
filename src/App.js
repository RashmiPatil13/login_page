import {useState,useEffect} from 'react';
 import './App.css';


function App() {
  const [email ,setEmail]=useState("");
  const [password, setPassword] =useState("");

  //const history = useState();
  useEffect(() =>{
    if (localStorage.getItem('user-info')){
      //history.push("/add")
    }
  },[])
   async function login(){
    console.log(email,password)
    let item={email,password}
     fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
            // email: this.state.idValue,
            // password: this.state.pwValue
       })     
    //  const result = await result.json();

    // if(result.success == true){
    // const token = result.token
    //  localStorage.setItem(' atuny0',token)
    // }
    .then((response) => response.json())
     .then((result) => {
    if(result.message === 'SUCCESS'){
      const token = result.token
       localStorage.setItem(' atuny0',token)
      // alert('You are logged in.');
      this.goToMain();
     } else {
        //  alert('Please check your login information.');
     }
  });
}
  
  

   
  
 
  return (
        <div className='hero'>
       <div className='main'>
      
      <p>Welcome back! 👋</p>
      <h2>Sign in to your account</h2>
      <label for="email"><b>your email</b></label>
      <input type="text" name='email' className='input' id='id' placeholder='Enter your email' 
        onChange={(e)=>setEmail(e.target.value)}></input>
        
      <label for="password"><b>password</b></label>
      <input type="password" name='password' className='input' id='password'placeholder='Enter password' 
         onChange={(e)=>setPassword(e.target.value)} 
      
        required>

        </input>
      <button className='login' 
      //disabled={this.enableloginButton()} 
    //id={this.changeloginButtonStyle()} 
      onClick={login}><b>CONTINUE</b></button>
      <div id='forget'> Forget your password?</div>
    </div>
    <h6>Don’t have an account?  <a href="#">Sign up</a></h6>
    </div>
      
      
  
  );
}

export default App;

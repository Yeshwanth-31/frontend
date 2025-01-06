import React, { Component } from 'react'; 
import './App.css'
class Slam extends Component{
    render(){
        return(
            <div style={{
                width: '100%',
                height: '100vh',
                backgroundImage: 'url(https://openminds.org.au/wp-content/uploads/Friendship.jpg)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white',  
                textAlign: 'center', 
              }}>
        
                <form>
                <div class="container">
                    SLAM BOOK <br/><br/>
                    <label>Name :</label>
                    <input type="text"style={{align:'centre'}}/><br/><br/>
                    <label>Nickname :</label>
                    <input type="text"/><br/><br/>
                    <label>Mobile No : </label>
                    <input type="passsword"/><br/><br/>
                    <label>About me: </label>
                    <textarea /><br/><br/>
                    <label>College : </label>
                    <select>
                        <option value="">select college</option>
                        <option value="KEC">KEC college</option>
                        <option value="BANNARI">BANNARI college</option>
                    </select><br/><br/>
                    <label>Favourite actor :</label>
                    <input type="text"/><br/><br/>
                    <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white'}}>Submit </button>


                    

                </div>
                </form>
              </div>
        
        );
    }
}
export default Slam
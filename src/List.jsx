import React from 'react'

const List = () => {
  return (
    <>
        <div className='part1'>
            <ol>
              <li>FRUITS</li> 
                <dl>
                  <dd>  
                      <ul style={{listStyleType: "none"}}> 
                        <li><span>*</span> APPLE</li>
                        <li><span>*</span> MANGO</li>
                        <li><span>*</span> BANANA</li> 
                      </ul>
                  </dd>
                </dl>  
              <li>VEGETABLE</li> 
                <dl>
                  <dd>
                      <ol type="I">
                          <li>CARROT</li>
                          <li>ONION</li>
                          <li>TOMATO</li>
                      </ol>
                  </dd>
                </dl>  
              <li>BIRDS</li> 
                <dl>
                  <dd>
                    <ul style={{listStyleType: "none"}}>
                      <li><span>#</span> PARROT</li>
                      <li><span>#</span> PEACOCK</li>
                      <li><span>#</span> PEGION</li> 
                    </ul> 
                  </dd>
                </dl>
            </ol>  
        </div>
    </>
  )
}

export default List
import React from "react";
import styled from "styled-components";

export default  function HeadBar(){
    return(
        <HeaderBar className='flex justify-between align-center'>
        <div className='flex justify-between align-center'>
           <Box  style={{overflow:"hidden"}} className='flex justify-between align-center'>
           <div style={{width:"200px", fontSize:'0'}} className='flex justify-start align-center'>
            <span style={{fontSize:'1rem'}}>May 27-Jun 2, 2020</span>
            </div>
            <div style={{backgroundColor:"#F8F9FA", height:"45px", width:"45px", marginRight:'-1rem', borderLeft:"1px solid #E3E4E8"}} className='flex justify-center align-center'>
                <Img src="./assets/images/calander.png"/>
            </div>
           </Box>
            <Button>Compare</Button>
        </div>
        <div className="flex justify-between align-center">
           <span style={{color:'gray'}}> Group By:</span>
           <GroupBox className="flex justify-between align-center">
              <span style={{color:"#GB727D"}}>Country</span>
              <Img src='./assets/images/downarrow.png'/>
           </GroupBox>
           <GroupBox className="flex justify-between align-center">
           <span style={{color:"#GB727D"}}>Stacked Bar</span>
              <Img src='./assets/images/downarrow.png'/>
           </GroupBox>
       </div>
    </HeaderBar>
    );
}

const HeaderBar = styled.div`
border-bottom:1px solid #E3E4E8;
padding:1rem 2rem;
`;

const Button = styled.button`
 display: inline-block;
 color:#2c8ebf;
 border:1px solid #2c8ebf;
 border-radius:5px;
 width: 140px ;
 height: 45px;
 background-color:white;
 margin-left:.75rem
`;

const Box = styled.div`
background-color: rgb(255,255,255);
border: 1px solid #E3E4E8;
border-radius:5px;
height: 45px;
padding:0 1rem;
color:#GB727D;

&  span{
    color:#6B727D;
    font-weight:500;
}
`;

const GroupBox = styled(Box)`width: 250px; margin-left:.75rem`;

const Img = styled.img`
`;

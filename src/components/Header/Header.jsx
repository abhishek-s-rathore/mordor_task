import React from "react";
import styled from "styled-components";

export default function Header() {

  return (
    <HeaderBox className='container flex justify-between align-center'>
      <LogoBox className="flex align-center">
        <Img src="./assets/images/logo.png" />
        <Title>
          <span>Unified</span> Analytics
        </Title>
      </LogoBox>

      <Tabs className='flex justify-between align-center'>
        <AnsEngine className='flex justify-between align-center'>
         <Img src='./assets/images/answerengine.png'/>
         <span>Answer Engine</span>
         </AnsEngine>

         <Dashboard className='flex justify-between align-center'>
           <Img  src='./assets/images/dashboard.png' />
           <span>Dashboard</span>
         </Dashboard>

         <Anomalies className='flex justify-between align-center'>
           <Img src="./assets/images/anomalies.png"/>
           <span>Anomalies</span>
         </Anomalies>
      </Tabs>

      <Config className='flex justify-between align-center'>
        <Notification>
        <Img src='./assets/images/bell.png'/>
        <Img src='./assets/images/notification.png' className='position-notification'/>
        </Notification>
        <User>
          Hello <span>Ira</span>
        </User>
        <Avatar>
          <Img src='./assets/images/profile.png'/>
        </Avatar>
      </Config>
    </HeaderBox>
  );
}


const HeaderBox = styled.div`
  padding: 24px 0;
`;

const LogoBox = styled.div``;

const Img = styled.img`
  margin-right: 1rem;
`;

const Title = styled.p`
  color: #46cdcf;
  font-size: 22px;
  & > span {
    font-weight: bold;
  }
`;

 const Tabs = styled.div``;

 const AnsEngine = styled.div`margin:0 1rem; font-weight:500;font-size:1.05rem;
   & > span {
     color:rgba(255,255,255,.7);
   }
 `;
 const Dashboard = styled.div`margin:0 1rem; font-weight:500;font-size:1.05rem;
 & > span {
  color:rgba(255,255,255,.9);
}
 `;
 const Anomalies = styled.div`margin:0 1rem;font-weight:500;font-size:1.05rem;
 & > span {
  color:rgba(255,255,255,.7);
}
 `;

 const Config = styled.div`
 margin-right:-.75rem;
 `;


 const Notification = styled.div`
 margin-right:1rem;
  position:relative;
 `;

 const User = styled.div`
   margin-right:1.5rem;
   font-size:1.05rem;
   color:rgba(255,255,255,.7);
   &> span{
    color:rgb(255,255,255);
   }
 `;
 const Avatar = styled.div`
 
 `;
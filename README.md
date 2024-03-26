# SocialBlock

## **Problem** 
Web2 social media, which is the current mainstream model, is characterized by centralized platforms that have control over user data and content. Following are some problems highlighting the limitations of web2 social media : \
Lack of User Control\
Data Privacy Concerns\
Content Moderation Challenges\ 
Lack of Transparency and Trust\
Centralized Authority\
Incentives Misalignment\ 
Limited Interoperability

## **Solution Proposed :**
We have created a Web3 Socail Media App called **SOCIAL-BLOCK**
Use of Web3 social media offers potential benefits such as user-controlled data, content, and platform rules, greater transparency and trust, decentralized moderation, incentives alignment, and interoperability across different platforms. Users will have more control over their personal information, can verify the authenticity of content, and can participate in decision-making through decentralized governance as a result generating solution to above mentioned problem. \

### **Technologies used:** 
**_React_** : Used for creating the frontend of our application. 
**_Solidity_**: For writing smart contracts to add user’s data on blockchain. 
**_Tailwind CSS_** : For changing the UI of our application. 
**_Google Cloud Blockchain Node Engine_**

### **_Functions:_** 
Create profile using metamask\
Add and delete tweets\
Get all tweets in your feed\

### **_How to Use SocialBlock:_** 
To create a profile, add or delete tweet you need to have a metamask account \
Create a Metamask account and download Metamask extension in your browser. \
Create a node on **Google Cloud Blockchain Node Engine** and generate URL \
Add this url in `./server/hardhatconfig.js\` , put is as string
Add your Metamask account's private key to accounts in ` ./server/hardhatconfig.js ` as string \
As seen in below picture \

![image](https://user-images.githubusercontent.com/96530721/232332492-70e28fee-b226-4088-b5e8-e59bf2394c1a.png)


In ./server run the following command:\
    npx hardhat run scripts/deploy.js --network googleCloudPlatforms \
    This will generated a **coin-address** \  
Then change the generated coin address in `./client/src/config.js` and put it as string as in following image \ 

![image](https://user-images.githubusercontent.com/96530721/232332413-a96b70fa-2442-4700-8632-d49a7fb9cb52.png)

\
Then in ` ./client ` run the following commands \
    npm start
    
   
   
 ### Project Preview Video 
 https://drive.google.com/file/d/1XBSU6GKdJX_1_dSgMCf-f4nPV54EcepW/view?usp=sharing



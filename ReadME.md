# Lottery system

  Lottery system is a Dapp build on Ethereum, using VRF chainlink to get the random number for selecting winner.

## Techstack

1. Truffle
2. NPM
3. Remix
4. Infura
5. kovan Test net
6. Deployed contract address link: https://kovan.etherscan.io/address/0x56504D70cE338DC7e9e4707F1E6d55521Eb01446

## Functions

1. participate : This function allow users to participate in the lottery. There are few checks which has to be passed before the user can participate.
    
2. balanceOf: Returns balance of the contract

3. decideWinner: This function is used to decide the winner. It can be called only by the owner and it runs only when the lottery timing is over

4. getRandomWinner: This function is basically used to get the random winner among all the participant.

5. claimReward: This function helps the winner to claim the reward . Winner get 1% of the total money that contract has.

## Step to Run on Remix

1. copy the code on remix sol file

2. change contract import to

        import "https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/VRFConsumerBase.sol";

3. change Environment to `inject web3` and connect metamask to `Kovan test network`

4. Fund the account with test Eth and LINK test token

        faucet link : https://faucets.chain.link/kovan?_ga=2.113957315.51379515.1643172343-1210889108.1643172343

5. Import LINK test token into metamask using import token option

        Link contract address:        0xa36085F69e2889c224210F603D836748e7dC0088

6. Deploy the contract file

7. send LINk token to contract address from metamask

8. To participate create 2 more account in metmask and fund them with 0.1 test Ether using same faucet link

9. click on participate button to participate into lottery. 
        
        Note: Do not use the deployment account to participate

10. Switch to deployment account and click to decideWinner button 

11. Click on winner button to get winner address

12. switch to winner's account and click on claim reward

        Note: reward can only be claimed by winner address

## Deploying contract using truffle

1. Install package:

        npm install

2. compile contract: 

        truffle compile

3. migrate contract: 

        truffle migrate --reset --network=kovan

4. Note: 

        change private key in to your key in line-5 
        change infura link in line - 24

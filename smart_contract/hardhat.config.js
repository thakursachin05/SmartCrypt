// https://eth-goerli.alchemyapi.io/v2/eWp5zM9gNAcv94ta4_YmhdDZ-V_GAQnP

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity : '0.8.0',
  networks:{ 
    goerli : {
      url : `https://eth-goerli.alchemyapi.io/v2/eWp5zM9gNAcv94ta4_YmhdDZ-V_GAQnP`,
      accounts: ['aa52144d047fe196d5c2aca2b0507e6a17726a29b52f69f17d755774e8773d48']
    }
    
  }
}
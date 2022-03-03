const CheckContract = artifacts.require("CheckContract");
const ERC721Token = artifacts.require("ERC721Token")
const ERC1155Token = artifacts.require("ERC1155Token")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CheckContract", function ( accounts ) {

  let checkContract
  let erc721
  let erc1155
  
  before(async() => {
    checkContract = await CheckContract.deployed()
    erc721 = await ERC721Token.deployed()
    erc1155 = await ERC1155Token.deployed()
  })
  
  it("Should recognize the erc721 token", async() => {
    let result = await checkContract.isERC721(erc721.address)
    return assert.isTrue( result )
  });

  it("Should recognize the erc1155 token", async() => {
    let result = await checkContract.isERC1155(erc1155.address)
    return assert.isTrue( result )
  });

  it("Should not recognize the erc721 token (actually is ERC1155)", async() => {
    let result = await checkContract.isERC721(erc1155.address)
    return assert.isFalse( result )
  });

  it("Should not recognize the erc1155 token (actually is ERC721)", async() => {
    let result = await checkContract.isERC1155(erc721.address)
    return assert.isFalse( result )
  });

});

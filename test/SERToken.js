const { expect } = require("chai");

describe("SERToken", function () {
  let SERToken, serToken, owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    SERToken = await ethers.getContractFactory("SERToken");
    serToken = await SERToken.deploy();
  });

  it("should have the correct name", async function () {
    expect(await serToken.name()).to.equal("SER Token");
  });

  it("should have the correct symbol", async function () {
    expect(await serToken.symbol()).to.equal("SER");
  });

  it("should have the correct decimals", async function () {
    expect(await serToken.decimals()).to.equal(12);
  });

  it("should have the correct total supply", async function () {
    const totalSupply = await serToken.totalSupply();
    expect(totalSupply).to.equal("1400000000000000000000000000000000");
  });

  it("should assign the total supply to the owner", async function () {
    const ownerBalance = await serToken.balanceOf(owner.address);
    expect(ownerBalance).to.equal("1400000000000000000000000000000000");
  });
});

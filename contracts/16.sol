// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SERToken is ERC20 {
    uint8 private _decimals;

    constructor() ERC20("SER Token", "SER") {
        _decimals = 12;
        _mint(msg.sender, 1400000000000000000000 * 10 ** uint256(_decimals));
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}

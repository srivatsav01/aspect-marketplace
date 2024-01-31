// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract HelloWorld {
    address private owner;
    constructor() {
        owner = msg.sender;
    }
    function isOwner(address user) external view returns (bool result) {
        return user == owner;
    }

    // print hello message
    function hello() public pure returns (string memory) {
        return "hello";
    }

    // print world message
    function world() public pure returns (string memory) {
        return "world";
    }
}
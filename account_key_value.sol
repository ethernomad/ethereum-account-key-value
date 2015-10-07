/**
 * @title AccountKeyValue
 * @author Jonathan Brown <jbrown@bluedroplet.com>
 */
contract AccountKeyValue {

  mapping (address => mapping (bytes32 => bytes)) values;

  // TODO: add c4 after https://github.com/ethereum/solidity/issues/120
  event Update(string indexed c1, string indexed c2, string indexed c3) anonymous;

  function keyHash(string c1, string c2, string c3, string c4) internal returns (bytes32) {
    return sha3(c1, '.', c2, '.', c3, '.', c4);
  }

  function getValue(address account, string c1, string c2, string c3, string c4) constant returns (bytes) {
    return values[account][keyHash(c1, c2, c3, c4)];
  }

  function setValue(bytes value, string c1, string c2, string c3, string c4) {
    values[msg.sender][keyHash(c1, c2, c3, c4)] = value;
    Update(c1, c2, c3);
  }

  function deleteValue(string c1, string c2, string c3, string c4) {
    delete values[msg.sender][keyHash(c1, c2, c3, c4)];
    Update(c1, c2, c3);
  }

}

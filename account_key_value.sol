/**
 * @title AccountKeyValue
 * @author Jonathan Brown <jbrown@bluedroplet.com>
 */
contract AccountKeyValue {

  mapping (address => mapping (string => bytes)) values;

  event logUpdate(address indexed account, string key) anonymous;

  function valueGet(address account, string key) constant returns (bytes) {
    return values[account][key];
  }

  function valueSet(string key, bytes value) {
    values[msg.sender][key] = value;
    logUpdate(msg.sender, key);
  }

  function valueDelete(string key) {
    delete values[msg.sender][key];
    logUpdate(msg.sender, key);
  }

}

/**
 * @title AccountKeyValue
 * @author Jonathan Brown <jbrown@bluedroplet.com>
 */
contract AccountKeyValue {

  mapping (address => mapping (string => bytes)) values;

  event logUpdate(address indexed account, string key) anonymous;

  function valueSet(string key, bytes value) external {
    values[msg.sender][key] = value;
    logUpdate(msg.sender, key);
  }

  function valueDelete(string key) external {
    delete values[msg.sender][key];
    logUpdate(msg.sender, key);
  }

  function valueGet(address account, string key) constant external returns (bytes) {
    return values[account][key];
  }

}

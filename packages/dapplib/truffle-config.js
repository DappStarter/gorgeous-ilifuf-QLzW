require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remember collect harvest crisp flower gaze'; 
let testAccounts = [
"0x9949ae5cec9e5ca237cf8d76a51421baf2de899191543db06f3415c1b1ffe4e7",
"0x239a9ef0970b6e36b834ed92cb48758797e99ade849f9982be3c07d76dcd98fd",
"0x2eb157a5786783b957e2a0a405de9fdcc4bd0f1abdee049d86f912e267833a26",
"0x9cca4703bd0a6b719409c7ac23ac234dec5589cbfd0ce3404dbee7af4cd7380b",
"0xe23ecf7b12d04a076c6913602780ea66ab6a49648f23d0fa32d7583a55380e24",
"0xcf780c2a575d2f78fa791ea23ad0006198f69dddce8e3a0e37e36edee55136f3",
"0xdd036446101be5ce0df306d6da2f616856cf82749bd6abf4441b859e8fce8bd7",
"0x6f821135d5ab2ed5c2c9f904c77d654b35be0a4269aedb925e2a8a1a1fbe30db",
"0x4cceedd145f72e81449525125aa8483d4abcb8e0e35693e7d0b35b49b5b29464",
"0x1c6ac48695813fd2f93e43bcdee6dca6fbbf9b03deff3b85e35dbbbbd69ef40c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


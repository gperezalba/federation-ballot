const ballotABI = [{"constant":false,"inputs":[{"name":"closingBallot","type":"bytes32"}],"name":"openBallotCloseBallot","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oldLeader","type":"address"},{"name":"_newLeader","type":"address"}],"name":"openBallotValidatorChangeSpecial","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oldLeader","type":"address"},{"name":"_newLeader","type":"address"}],"name":"openBallotValidatorChange","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"bytes32"}],"name":"openProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"proposals","outputs":[{"name":"open","type":"bool"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"associationVoterCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"addedToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isAssociation","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ballots","outputs":[{"name":"open","type":"bool"},{"name":"isFederal","type":"bool"},{"name":"isAssociation","type":"bool"},{"name":"addPending","type":"bool"},{"name":"removePending","type":"bool"},{"name":"removeAssociation","type":"bool"},{"name":"addAssociation","type":"bool"},{"name":"validatorChangeSpecial","type":"bool"},{"name":"isClosingBallot","type":"bool"},{"name":"who","type":"address"},{"name":"change","type":"uint256"},{"name":"closingBallot","type":"bytes32"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"}],"name":"openBallotRemovePending","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"oldAssociation","type":"address"}],"name":"openBallotRemoveAssociation","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAssociationMember","type":"address"}],"name":"addAssociationMember","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"oldAssociationMember","type":"address"}],"name":"removeAssociationMember","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_ballotId","type":"bytes32"},{"name":"userVote","type":"bool"}],"name":"voteFederal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"salt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"address"}],"name":"voted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAssociation","type":"address"}],"name":"openBallotAddAssociation","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_ballotId","type":"bytes32"},{"name":"userVote","type":"bool"}],"name":"voteAssociation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"associationVoter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"change","type":"uint256"}],"name":"openBallotAddPending","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"proposalId","type":"bytes32"}],"name":"voteProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"_change","type":"uint256"}],"name":"openBallotDecreaseAmount","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"member","type":"address"},{"indexed":true,"name":"association","type":"address"}],"name":"AddAssociationMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"member","type":"address"},{"indexed":true,"name":"association","type":"address"}],"name":"RemoveAssociationMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"bytes32"},{"indexed":true,"name":"creator","type":"address"}],"name":"BallotCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"bytes32"}],"name":"SuccessfulBallot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newAssociation","type":"address"}],"name":"AddAssociation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newAssociation","type":"address"}],"name":"RemoveAssociation","type":"event"}];
const ballotADDRESS = "0x0000000000000000000000000000000000000013";

const ballotID = "0x662263e90096889a9915f4c82fdbdfff48c0c0d981ea44c51564d240cca89346";

const App = {
    web3: null,
    account: null,
	contract: null,

    start: async function(web3) {
        this.web3 = web3;

        try {
			this.contract = new this.web3.eth.Contract(ballotABI, ballotADDRESS);

            const accounts = await this.web3.eth.getAccounts();
            this.account = accounts[0];

        } catch (error) {
            console.error("Could not connect to contract or chain.");
        }
	},

	execute: async function() {
		await this.contract.methods.voteFederal(ballotID, true).send({value: 0, from: this.account, gas: 100000});
	},
}    

window.App = App;

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            var accounts= await web3.eth.getAccounts();
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
    console.log(web3.version);
	App.start(window.web3);
});
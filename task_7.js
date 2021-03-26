

let account = {
    accountNumber: "000000000000",
    nameUser: "hibana",
    address: "ul.Doroshenka",

    transactionDetails: [
        {id:1,accountNumber: "11111111111",nameUser:"egor",address:"ul. Eltona Johna"},
    ],
    addTransaction(accountNumber,nameUser,address) {
        let arrId = [];
        let lastID = 0;
        //find idexes of obj props
        for (let el of this.transactionDetails) {
            arrId.push(el.id);
        }

        //get last index
        lastID = arrId.slice(-1);

        //simple validation
        if (accountNumber.length <= 12 && nameUser.length >= 4 && nameUser.length <= 16) {
            let transaction = {
                id:++lastID,
                accountNumber,
                nameUser,
                address:`ul. ${address}`,
            }
    
            this.transactionDetails.push(transaction);
        } else {
            console.log("Sorry but you input wrong data");
        }
    },

    showHistory() {
        for(let transaction of this.transactionDetails) {
            let {id,accountNumber,nameUser,address} = transaction;

            console.log(`id: ${id} , accountNumber: ${accountNumber} , nameUser: ${nameUser} , address: ${address}`);
        }
    },

    updateTransaction(searchID,newAccountNumber ,newNameUser ,newAddress ) {
        for (let transaction of this.transactionDetails) {
            let {id} = transaction;

            if (id === searchID) {
                transaction.accountNumber = newAccountNumber
                transaction.nameUser = newNameUser
                transaction.address = newAddress
            } 
        }
    },

    // ?? question why index == -1
    // deleteTransaction(searchAccNumber) {
    //     for (let transaction of this.transactionDetails) {
    //         let {accountNumber} = transaction;
    //         if (accountNumber === searchAccNumber) {
    //             let index = this.transactionDetails.indexOf(accountNumber);

    //             this.transactionDetails.splice(index,1);
    //         }
    //     }
    // },

    deleteTransaction(searchAccNumber) {
        for(let transaction of this.transactionDetails) {
            let {accountNumber} = transaction;
            if (accountNumber === searchAccNumber) {
                console.log(transaction.id);
                this.transactionDetails.splice(transaction.id-1,1)
            } 
            
        }
    },

    updateInfoAccount(newNameUser = this.nameUser, newAddress= this.address) {
        if (typeof newNameUser === "string" && typeof newAddress === "string" && newNameUser.length >= 4 && newNameUser.length <= 16 ) {
            this.nameUser = newNameUser;
            this.address = newAddress;
        }
    },
}



// account.addTransaction("22222222222",'Anton','Chreshczatik');
// account.addTransaction("33333333333",'Andrii','Fedorowa');
// account.showHistory();
account.updateTransaction(3,"44444444444","Bartosh",undefined);
// account.showHistory();
// account.deleteTransaction("11111111111");
account.showHistory();
// account.updateInfoAccount(undefined,"Bartosh");
// account.updateInfoAccount("Egor",undefined);
// console.log(account);


let accounts = [
    {id:1, amount: 100, currency: "EUR"},
    {id:2, amount: 34, currency: "EUR"},
    {id:3, amount: 235, currency: "USD"}
];

function findAccount(id){
    return accounts.find(account => account.id===id);
}

module.exports.getAccountById = (req, res) =>{
    const {id} = req.params;
    console.log(`Request to retrieve account: ${id}`);
    const foundAccount = findAccount(parseInt(id));
    if(!foundAccount){
        return res.status(404).json({
            message:"Account not found. Please provide a valid account."
        });
    }
    const contentToSend = `{
        "account":{
            "account_number": ${foundAccount.id},
            "balance":{
                "currency": "${foundAccount.currency}",
                "value": ${foundAccount.amount}
            }
        },
        "_links":[
            {
                "href": "/account/${foundAccount.id}",
                "rel": "self",
                "method": "GET"
            },
                
            {
                "href": "/account/${foundAccount.id}",
                "rel": "add-money-to-account",
                "method": "POST"
            },
            
            {
                "href": "/account/${foundAccount.id}",
                "rel": "close-account",
                "method": "DELETE"
            }
        ]
    }`;
    return res.status(200).send(contentToSend);
}
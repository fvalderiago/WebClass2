console.log("JS Basics");
const mybusiness = "MindMyOwnBusiness";
console.log("My Business Name is: " + mybusiness);

let outletAddress;
outletAddress = "Blackhouse Bay";
console.log("Outlet address 1: " + outletAddress);
outletAddress = "Manakau";
console.log("Outlet address 2: " + outletAddress);
outletAddress = "City";
console.log("Outlet address 3: " + outletAddress);
console.log(Date());
if (outletAddress == 'Blackhouse Bay')
{
    console.log("Large store");
}
if (outletAddress == 'Manakau')
    {
        console.log("Head Office");
    }
    if (outletAddress == 'City')
        {
            console.log("Mega store");
        }

switch (outletAddress) {
    case 'Blackhouse Bay':
        {
        console.log("Large store");
        break;
        }
    case 'Manakau':
        {
            console.log("Head Office");
            break;
        }
    case 'City':
        {
            console.log("Mega store 2");
            break;
        }
}


app.get('/', (req, res) => {
    res.send('Hello World!') 
  })
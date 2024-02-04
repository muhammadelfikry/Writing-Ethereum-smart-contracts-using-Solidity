const ShippingStatus = artifacts.require("./Shipping.sol");
const truffleAssert = require('truffle-assertions');

contract('Shipping', () => {
    
    it("should return the status pending", async () => {
        const instance = await ShippingStatus.deployed();
        const status = await instance.Status();
        assert.equal(status, "Pending");
    });

    it("should return the status Shipped", async ()=> {
        // Instance of our deployed contract
            const instance = await ShippingStatus.deployed();
        
            // Calling the Shipped() function
            await instance.Shipped();
        
            // Checking the initial status in our contract
            const status = await instance.Status();
        
            // Checking if the status is Shipped
            assert.equal(status, "Shipped");
          });        

    it("should return the status Delivered", async () => {
        const instance = await ShippingStatus.deployed();
        await instance.delivered();
        const status = await instance.Status();
        assert.equal(status, "Delivered");
    });

    it('should return correct event description', async () => {
        const instance = await ShippingStatus.deployed();

        const delivered = await instance.delivered();

        truffleAssert.eventEmitted(delivered, 'LogNewAlert', (event) =>  {
            return event.description == 'Paket kamu sudah tiba';
        })
    })
});
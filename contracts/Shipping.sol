pragma solidity >=0.4.25 <0.9.0;

contract shipping {
    enum ShippingStatus { Pending, Shipped, Delivered }

    ShippingStatus private status;

    event LogNewAlert(string description);

    constructor() public {
        status = ShippingStatus.Pending;
    }

    function Shipped() public {
        status = ShippingStatus.Shipped;
        emit LogNewAlert("Paket Kamu Sedang Dikirim");
    }

    function delivered() public {
        status = ShippingStatus.Delivered;
        emit LogNewAlert("Paket kamu sudah tiba");
    }
    
    function getStatus(ShippingStatus _status) internal pure returns (string memory) {
        if (ShippingStatus.Pending == _status) return "Pending";
        if (ShippingStatus.Shipped == _status) return "Shipped";
        if (ShippingStatus.Delivered == _status) return "Delivered";
    }

    function Status() public view returns (string memory) {
        ShippingStatus _status = status;
        return getStatus(_status);
    }
}
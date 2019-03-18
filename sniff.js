Java.perform(function() {

    var ble = Java.use("com.xiaomi.hm.health.bt.a.a");
    var sniff = ble.a.overload('java.lang.String');
    
    sniff.implementation = function (data) {
		console.log("(+) "+ data);
	}
});

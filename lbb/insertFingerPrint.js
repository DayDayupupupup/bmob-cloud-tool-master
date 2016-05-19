/**
 * Created by Mac on 2016/5/18.
 */
function onRequest(request, response, modules) {
    var db = modules.oData;
    db.insert({
        "table":"location_fingerPrint",             //表名
        "data":{"GPSLat":request.body.gpsLat,
            "GPSLng":request.body.gpsLng,
            "CellLat":request.body.cellLat,
            "CellLng":request.body.cellLng,
            "accelerationX":request.body.accelerationX,
            "accelerationY":request.body.accelerationY,
            "accelerationZ":request.body.accelerationZ,
            "status":request.body.status}            //需要更新的数据，格式为JSON
    },function(err,data){         //回调函数
        var Respdata = {
            "err":err,
            "data":data
        };
        response.send(JSON.stringify(Respdata));
    });

};
exports.insertFingerPrint = onRequest;